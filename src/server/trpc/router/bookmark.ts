import {
  categorySearchSchema,
  createBookmarkSchema,
  deleteBookmarkSchema,
  getBookmarksInputSchema,
  getSingleBookmarkByIdSchema,
  keywordSearchSchema,
  tagSearchSchema,
  updateBookmarkSchema,
} from "@/schema";
import { CreateBookmarkType } from "@/types";
import { DEFAULT_LIMIT, PATH_LIST } from "@/utils/const";

import { authedProcedure, t } from "../trpc";

export const bookmarkRouter = t.router({
  getSingleBookmarkById: authedProcedure
    .input(getSingleBookmarkByIdSchema)
    .query(async ({ ctx, input }) => {
      const bookmark = await ctx.prisma.bookmark.findUnique({
        where: {
          id: input.id,
        },
        include: {
          categories: true,
          tags: true,
        },
      });
      return bookmark;
    }),
  getAllBookmarksByUserId: authedProcedure
    .input(getBookmarksInputSchema)
    .query(async ({ ctx, input }) => {
      const page = input.page ?? 1;
      const limit = input.limit ?? DEFAULT_LIMIT;
      const bookmarks = await ctx.prisma.bookmark.findMany({
        where: {
          userId: ctx.session?.user?.id,
        },
        include: {
          tags: true,
          categories: true,
        },
        skip: limit * (page - 1),
        take: limit,
        orderBy: {
          updatedAt: "desc",
        },
      });
      return bookmarks;
    }),

  getCountAllBookmarksByUserId: authedProcedure.query(async ({ ctx }) => {
    const count = await ctx.prisma.bookmark.count({
      where: {
        userId: ctx.session?.user?.id,
      },
    });
    return count;
  }),

  getReadBookmarksByUserId: authedProcedure
    .input(getBookmarksInputSchema)
    .query(async ({ ctx, input }) => {
      const page = input.page ?? 1;
      const limit = input.limit ?? DEFAULT_LIMIT;
      const bookmarks = await ctx.prisma.bookmark.findMany({
        where: {
          userId: ctx.session?.user?.id,
          isRead: true,
        },
        include: {
          categories: true,
          tags: true,
        },
        skip: limit * (page - 1),
        take: limit,
        orderBy: {
          updatedAt: "desc",
        },
      });
      return bookmarks;
    }),

  getCountReadBookmarksByUserId: authedProcedure.query(async ({ ctx }) => {
    const count = await ctx.prisma.bookmark.count({
      where: {
        userId: ctx.session?.user?.id,
        isRead: true,
      },
    });
    return count;
  }),

  getUnReadBookmarksByUserId: authedProcedure
    .input(getBookmarksInputSchema)
    .query(async ({ ctx, input }) => {
      const page = input.page ?? 1;
      const limit = input.limit ?? DEFAULT_LIMIT;
      const bookmarks = await ctx.prisma.bookmark.findMany({
        where: {
          userId: ctx.session?.user?.id,
          isRead: false,
        },
        include: {
          categories: true,
          tags: true,
        },
        skip: limit * (page - 1),
        take: limit,
        orderBy: {
          updatedAt: "desc",
        },
      });
      return bookmarks;
    }),
  getCountUnReadBookmarksByUserId: authedProcedure.query(async ({ ctx }) => {
    const count = await ctx.prisma.bookmark.count({
      where: {
        userId: ctx.session?.user?.id,
        isRead: false,
      },
    });
    return count;
  }),

  getBookmarksCounts: authedProcedure.query(async ({ ctx }) => {
    const allCounts = await ctx.prisma.bookmark.count({
      where: {
        userId: ctx.session?.user?.id,
      },
    });

    const unReadCounts = await ctx.prisma.bookmark.count({
      where: {
        userId: ctx.session?.user?.id,
        isRead: false,
      },
    });
    const readCounts = await ctx.prisma.bookmark.count({
      where: {
        userId: ctx.session?.user?.id,
        isRead: true,
      },
    });

    const counts = {
      [PATH_LIST["allBookmarks"]]: allCounts,
      [PATH_LIST["unreadBookmarks"]]: unReadCounts,
      [PATH_LIST["readBookmarks"]]: readCounts,
    };

    return counts;
  }),

  createBookmark: authedProcedure
    .input(createBookmarkSchema)
    .mutation(async ({ ctx, input }) => {
      const sendData = _remove({ ...input });
      const categoryIds = input.categories.map((category) => ({
        id: category.value,
      }));
      const tagIds = input.tags?.map((tag) => ({
        id: tag.value,
      }));

      const bookmark = await ctx.prisma.bookmark.create({
        data: {
          ...sendData,
          categories: {
            connect: [...categoryIds],
          },
          tags: {
            connect: tagIds,
          },
          user: {
            connect: {
              id: ctx.session?.user?.id,
            },
          },
        },
        include: {
          categories: true,
          tags: true,
        },
      });
      return bookmark;
    }),

  updateBookmark: authedProcedure
    .input(updateBookmarkSchema)
    .mutation(async ({ ctx, input }) => {
      const bookmarkId = input.id;
      const sendData = _remove({ ...input });

      const categoryIds = input.categories.map((category) => ({
        id: category.value,
      }));

      const tagIds = input.tags?.map((tag) => ({
        id: tag.value,
      }));

      await ctx.prisma.bookmark.update({
        data: {
          categories: {
            set: [],
          },
          tags: {
            set: [],
          },
        },
        where: {
          id: bookmarkId,
        },
      });

      const bookmark = await ctx.prisma.bookmark.update({
        data: {
          ...sendData,
          categories: {
            connect: [...categoryIds],
          },
          tags: {
            connect: tagIds ? [...tagIds] : [],
          },
          user: {
            connect: {
              id: ctx.session?.user?.id,
            },
          },
        },
        where: {
          id: bookmarkId,
        },
        include: {
          categories: true,
          tags: true,
        },
      });
      return bookmark;
    }),

  getSearchedBookmarksByKeyword: authedProcedure
    .input(keywordSearchSchema)
    .query(async ({ ctx, input }) => {
      const limit = input.limit ?? DEFAULT_LIMIT;
      const { cursor } = input;
      const bookmarks = await ctx.prisma.bookmark.findMany({
        take: limit + 1,
        where: {
          userId: ctx.session?.user?.id,
          title: {
            contains: input.keyword,
          },
        },
        include: {
          categories: true,
          tags: true,
        },
        cursor: cursor ? { id: cursor } : undefined,
        orderBy: {
          updatedAt: "desc",
        },
      });
      let nextCursor: typeof cursor | undefined = undefined;
      if (bookmarks.length > limit) {
        const nextItem = bookmarks.pop();
        /* eslint-disable @typescript-eslint/no-non-null-assertion */
        nextCursor = nextItem!.id;
      }
      return {
        bookmarks,
        nextCursor,
      };
    }),

  getSearchedBookmarksByCategory: authedProcedure
    .input(categorySearchSchema)
    .query(async ({ ctx, input }) => {
      const limit = input.limit ?? DEFAULT_LIMIT;
      const { cursor } = input;
      const bookmarks = await ctx.prisma.bookmark.findMany({
        take: limit + 1,
        where: {
          userId: ctx.session?.user?.id,
          categories: {
            some: {
              name: input.category,
            },
          },
        },
        cursor: cursor ? { id: cursor } : undefined,
        include: {
          categories: true,
          tags: true,
        },
        orderBy: {
          updatedAt: "desc",
        },
      });
      let nextCursor: typeof cursor | undefined = undefined;
      if (bookmarks.length > limit) {
        const nextItem = bookmarks.pop();
        /* eslint-disable @typescript-eslint/no-non-null-assertion */
        nextCursor = nextItem!.id;
      }
      return {
        bookmarks,
        nextCursor,
      };
    }),

  getSearchedBookmarksByTag: authedProcedure
    .input(tagSearchSchema)
    .query(async ({ ctx, input }) => {
      const limit = input.limit ?? DEFAULT_LIMIT;
      const { cursor } = input;
      const bookmarks = await ctx.prisma.bookmark.findMany({
        take: limit + 1,
        where: {
          userId: ctx.session?.user?.id,
          tags: {
            some: {
              name: input.tag,
            },
          },
        },
        cursor: cursor ? { id: cursor } : undefined,
        include: {
          categories: true,
          tags: true,
        },
        orderBy: {
          updatedAt: "desc",
        },
      });
      let nextCursor: typeof cursor | undefined = undefined;
      if (bookmarks.length > limit) {
        const nextItem = bookmarks.pop();
        /* eslint-disable @typescript-eslint/no-non-null-assertion */
        nextCursor = nextItem!.id;
      }
      return {
        bookmarks,
        nextCursor,
      };
    }),

  deleteBookmarkById: authedProcedure
    .input(deleteBookmarkSchema)
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.bookmark.delete({
        where: {
          id: input.id,
        },
      });
    }),
});

const _remove = (
  obj: CreateBookmarkType
): Omit<CreateBookmarkType, "categories" | "tags"> => {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const { categories, tags, ...data } = obj;
  return data;
};
