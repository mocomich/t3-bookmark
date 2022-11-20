import { z } from "zod";

import {
  createBookmarkSchema,
  deleteBookmarkSchema,
  getBookmarkByIdSchema,
  updateBookmarkSchema,
} from "../schema";

export type FormDataType = CreateBookmarkType;

export type CreateBookmarkType = z.infer<typeof createBookmarkSchema>;
export type updateBookmarkSchema = z.infer<typeof updateBookmarkSchema>;
export type DeleteBookmarkType = z.infer<typeof deleteBookmarkSchema>;
export type GetSBookmarkByIdType = z.infer<typeof getBookmarkByIdSchema>;
