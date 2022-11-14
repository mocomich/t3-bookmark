import { ERROR_MESSAGE } from "@/utils/const";
import { z } from "zod";

export const createBookmarkSchema = z.object({
  url: z.string().url({ message: ERROR_MESSAGE.url }),
  title: z.string().min(1, { message: `タイトル${ERROR_MESSAGE.required}` }),
  categories: z
    .array(z.object({ value: z.number(), label: z.string() }))
    .min(1, { message: `カテゴリー${ERROR_MESSAGE.required}` }),
  comprehension: z.string(),
  isRead: z.boolean(),
  memo: z.string(),
});

export const updateBookmarkSchema = z.object({
  id: z.string().cuid(),
  url: z.string().url(),
  title: z.string(),
  categories: z.array(z.object({ value: z.number(), label: z.string() })),
  isRead: z.boolean(),
  comprehension: z.string(),
  memo: z.string(),
});

export const deleteBookmarkSchema = z.object({
  id: z.string().cuid(),
});

export const getSBookmarkByIdSchema = z.object({
  id: z.string().cuid(),
});