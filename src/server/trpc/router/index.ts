import { t } from "../trpc";
import { bookmarkRouter } from "./bookmark";
import { categoryRouter } from "./category";

export const appRouter = t.router({
  category: categoryRouter,
  bookmark: bookmarkRouter,
});

export type AppRouter = typeof appRouter;
