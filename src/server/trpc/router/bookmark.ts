import { DEFAULT_LIMIT, PATH_LIST } from "@/features/mypage/const";
import {
  createBookmarkSchema,
  getBookmarksInputSchema,
  getSingleBookmarkByIdSchema,
  updateBookmarkSchema,
} from "@/features/mypage/schema";
import { CreateBookmarkType } from "@/features/mypage/types";

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
      [PATH_LIST["all"]]: allCounts,
      [PATH_LIST["unread"]]: unReadCounts,
      [PATH_LIST["read"]]: readCounts,
    };

    return counts;
  }),

  createBookmark: authedProcedure
    .input(createBookmarkSchema)
    .mutation(async ({ ctx, input }) => {
      const sendData = remove({ ...input });
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
      const sendData = remove({ ...input });

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
});

const remove = (
  obj: CreateBookmarkType
): Omit<CreateBookmarkType, "categories" | "tags"> => {
  const { categories, tags, ...data } = obj;
  return data;
};
