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
      const sendData = removeCategories({ ...input });
      const categoryIds = input.categories.map((category) => ({
        id: category.value,
      }));

      const bookmark = await ctx.prisma.bookmark.create({
        data: {
          ...sendData,
          categories: {
            connect: [...categoryIds],
          },
          user: {
            connect: {
              id: ctx.session?.user?.id,
            },
          },
        },
        include: {
          categories: true,
        },
      });
      return bookmark;
    }),

  updateBookmark: authedProcedure
    .input(updateBookmarkSchema)
    .mutation(async ({ ctx, input }) => {
      const bookmarkId = input.id;
      const sendData = removeCategories({ ...input });
      const categoryIds = input.categories.map((category) => ({
        id: category.value,
      }));

      const bookmark = await ctx.prisma.bookmark.update({
        data: {
          ...sendData,
          categories: {
            connect: [...categoryIds],
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
        },
      });
      return bookmark;
    }),
});

const removeCategories = (
  obj: CreateBookmarkType
): Omit<CreateBookmarkType, "categories"> => {
  const { categories, ...data } = obj;
  return data;
};
