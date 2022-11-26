export const PATH_LIST = {
  all: "/mypage/bookmarks/all",
  unread: "/mypage/bookmarks/unread",
  read: "/mypage/bookmarks/read",
  settings: "/mypage/settings",
} as const;

export const MY_BOOKMARK_LINK_LIST = [
  { path: PATH_LIST["all"], title: "All Bookmarks" },
  {
    path: PATH_LIST["unread"],
    title: "UnRead",
  },
  {
    path: PATH_LIST["read"],
    title: "Already Read",
  },
] as const;

export const SETTING_LINK_LIST = [
  { path: PATH_LIST["settings"], title: "Settings" },
] as const;

export const DEFAULT_LIMIT = 9;
