import { z } from "zod";

import { links } from "../const";
import {
  createBookmarkSchema,
  deleteBookmarkSchema,
  getBookmarkByIdSchema,
  updateBookmarkSchema,
} from "../schema";

export type FormDataType = CreateBookmarkType;

export type CreateBookmarkType = z.infer<typeof createBookmarkSchema>;
export type updateBookmarkType = z.infer<typeof updateBookmarkSchema>;
export type DeleteBookmarkType = z.infer<typeof deleteBookmarkSchema>;
export type GetSBookmarkByIdType = z.infer<typeof getBookmarkByIdSchema>;

export type LinkPathsType = typeof links[number]["path"];
export type LinkTitlesType = typeof links[number]["title"];
