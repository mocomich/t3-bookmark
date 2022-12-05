import { z } from "zod";

import { MY_BOOKMARK_LINK_LIST, SETTING_LINK_LIST } from "../const";
import {
  createBookmarkSchema,
  createTagSchema,
  deleteBookmarkSchema,
  getSingleBookmarkByIdSchema,
  keywordSearchSchema,
  updateBookmarkSchema,
} from "../schema";

export type FormDataType = CreateBookmarkType;

export type CreateBookmarkType = z.infer<typeof createBookmarkSchema>;
export type updateBookmarkType = z.infer<typeof updateBookmarkSchema>;
export type DeleteBookmarkType = z.infer<typeof deleteBookmarkSchema>;
export type GetSBookmarkByIdType = z.infer<typeof getSingleBookmarkByIdSchema>;

export type BookmarkLinkPathsType =
  typeof MY_BOOKMARK_LINK_LIST[number]["path"];
export type BookmarkTitlesType = typeof MY_BOOKMARK_LINK_LIST[number]["title"];

export type SettingLinkPathsType = typeof SETTING_LINK_LIST[number]["path"];
export type SettingLinkTitlesType = typeof SETTING_LINK_LIST[number]["title"];

export type CreateTagType = z.infer<typeof createTagSchema>;

export type KeywordSearchType = z.infer<typeof keywordSearchSchema>;
