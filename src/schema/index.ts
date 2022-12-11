import { ERROR_MESSAGE } from "@/utils/const";
import { z } from "zod";

export const createBookmarkSchema = z.object({
  url: z.string().url({ message: ERROR_MESSAGE.url }),
  title: z
    .string()
    .min(1, { message: `タイトル${ERROR_MESSAGE.required}` })
    .max(50, { message: `タイトルは50文字${ERROR_MESSAGE.max}` }),
  categories: z
    .array(z.object({ value: z.string(), label: z.string() }))
    .min(1, { message: `カテゴリー${ERROR_MESSAGE.required}` })
    .max(3, { message: `カテゴリーは最大3つ${ERROR_MESSAGE.max}` }),
  tags: z
    .array(z.object({ value: z.string(), label: z.string() }))
    .max(2, { message: `タグは最大2つ${ERROR_MESSAGE.max}` })
    .optional(),
  comprehension: z.number(),
  isRead: z.boolean(),
  memo: z.string(),
});

export const updateBookmarkSchema = z.object({
  id: z.string().cuid(),
  url: z.string().url(),
  title: z
    .string()
    .min(1, { message: `タイトル${ERROR_MESSAGE.required}` })
    .max(50, { message: `タイトルは50文字${ERROR_MESSAGE.max}` }),
  categories: z
    .array(z.object({ value: z.string(), label: z.string() }))
    .min(1, { message: `カテゴリー${ERROR_MESSAGE.required}` })
    .max(3, { message: `カテゴリーは最大3つ${ERROR_MESSAGE.max}` }),
  tags: z
    .array(z.object({ value: z.string(), label: z.string() }))
    .max(2, { message: `タグは最大2つ${ERROR_MESSAGE.max}` })
    .optional(),
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

export const createTagSchema = z.object({
  name: z.string().max(8, { message: `タグは8文字${ERROR_MESSAGE.max}` }),
});

export const deleteTagSchema = z.object({
  id: z.string().cuid(),
});

export const keywordSearchSchema = z.object({
  keyword: z.string(),
});

export const categorySearchSchema = z.object({
  category: z.string(),
  limit: z.number().min(1).max(100).nullish(),
  cursor: z.string().nullish(),
});

export const tagSearchSchema = z.object({
  tag: z.string(),
});
