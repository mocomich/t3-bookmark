import { createBookmarkSchema } from "@/features/mypage/schema";
import { CreateBookmarkType } from "@/features/mypage/types";

import { authedProcedure, t } from "../trpc";

export const bookmarkRouter = t.router({
  getBookmarksByUserId: authedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.bookmark.findMany({
      where: {
        userId: ctx.session?.user?.id,
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
