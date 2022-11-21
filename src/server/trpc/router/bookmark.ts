import { DEFAULT_LIMIT } from "@/features/mypage/const";
import {
  createBookmarkSchema,
  getBookmarksInputSchema,
} from "@/features/mypage/schema";
import { CreateBookmarkType } from "@/features/mypage/types";

import { authedProcedure, t } from "../trpc";

export const bookmarkRouter = t.router({
  getAllBookmarksByUserId: authedProcedure
    .input(getBookmarksInputSchema)
    .query(async ({ ctx, input }) => {
      const page = input.page ?? 1;
      const limit = input.limit ?? DEFAULT_LIMIT;
      const count = await ctx.prisma.bookmark.count();
      const bookmarks = await ctx.prisma.bookmark.findMany({
        where: {
          userId: ctx.session?.user?.id,
        },
        skip: limit * (page - 1),
        take: limit,
        orderBy: {
          updatedAt: "desc",
        },
      });
      return { count, bookmarks };
    }),

  getReadBookmarksByUserId: authedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.bookmark.findMany({
      where: {
        userId: ctx.session?.user?.id,
        isRead: true,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });
  }),
  getUnReadBookmarksByUserId: authedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.bookmark.findMany({
      where: {
        userId: ctx.session?.user?.id,
        isRead: false,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });
  }),
  createBookmark: authedProcedure
    .input(createBookmarkSchema)
    .mutation(async ({ ctx, input }) => {
      const sendData = removeCategories({ ...input });
      const categories = input.categories.map((category) => ({
        name: category.label,
      }));

      const bookmark = await ctx.prisma.bookmark.create({
        data: {
          ...sendData,
          categories: {
            create: [...categories],
          },
          user: {
            connect: {
              id: ctx.session?.user?.id,
            },
          },
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
