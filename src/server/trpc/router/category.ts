import { authedProcedure, t } from "../trpc";

export const categoryRouter = t.router({
  getAllCategories: authedProcedure.query(({ ctx }) => {
    return ctx.prisma.category.findMany();
  }),
});
