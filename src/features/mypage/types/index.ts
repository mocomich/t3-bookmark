import { z } from "zod";

import { MY_BOOKMARK_LINK_LIST } from "../const";
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

export type LinkPathsType = typeof MY_BOOKMARK_LINK_LIST[number]["path"];
export type LinkTitlesType = typeof MY_BOOKMARK_LINK_LIST[number]["title"];
