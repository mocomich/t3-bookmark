import { createTagSchema, deleteTagSchema } from "@/schema";

import { authedProcedure, t } from "../trpc";

export const tagRouter = t.router({
  getAllTags: authedProcedure.query(({ ctx }) => {
    return ctx.prisma.tag.findMany({
      where: {
        userId: ctx.session?.user?.id,
      },
    });
  }),

  createTag: authedProcedure
    .input(createTagSchema)
    .mutation(async ({ ctx, input }) => {
      const tag = await ctx.prisma.tag.create({
        data: {
          ...input,
          user: {
            connect: {
              id: ctx.session?.user?.id,
            },
          },
        },
      });
      return tag;
    }),

  deleteTag: authedProcedure
    .input(deleteTagSchema)
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.tag.delete({
        where: {
          id: input.id,
        },
      });
    }),
});
