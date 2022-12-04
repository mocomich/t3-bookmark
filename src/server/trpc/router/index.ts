import { t } from "../trpc";
import { bookmarkRouter } from "./bookmark";
import { categoryRouter } from "./category";
import { tagRouter } from "./tag";

export const appRouter = t.router({
  category: categoryRouter,
  bookmark: bookmarkRouter,
  tag: tagRouter,
});

export type AppRouter = typeof appRouter;
