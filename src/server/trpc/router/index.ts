import { t } from "../trpc";
import { categoryRouter } from "./category";

export const appRouter = t.router({
  category: categoryRouter,
});

export type AppRouter = typeof appRouter;
