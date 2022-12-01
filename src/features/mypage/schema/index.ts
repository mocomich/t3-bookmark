import { ERROR_MESSAGE } from "@/utils/const";
import { z } from "zod";

export const createBookmarkSchema = z.object({
  url: z.string().url({ message: ERROR_MESSAGE.url }),
  title: z.string().min(1, { message: `タイトル${ERROR_MESSAGE.required}` }),
  categories: z
    .array(z.object({ value: z.string(), label: z.string() }))
    .min(1, { message: `カテゴリー${ERROR_MESSAGE.required}` }),
  comprehension: z.number(),
  isRead: z.boolean(),
  memo: z.string(),
});

export const updateBookmarkSchema = z.object({
  id: z.string().cuid(),
  url: z.string().url(),
  title: z.string(),
  categories: z
    .array(z.object({ value: z.string(), label: z.string() }))
    .min(1, { message: `カテゴリー${ERROR_MESSAGE.required}` }),
  isRead: z.boolean(),
  comprehension: z.number(),
  memo: z.string(),
});

export const deleteBookmarkSchema = z.object({
  id: z.string().cuid(),
});

export const getAllBookmarksByUserIdSchema = z.object({
  userId: z.string().cuid(),
});

export const getSingleBookmarkByIdSchema = z.object({
  id: z.string().cuid(),
});

export const getBookmarksInputSchema = z.object({
  page: z.number().nullish(),
  limit: z.number().nullish(),
});
