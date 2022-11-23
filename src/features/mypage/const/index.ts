export const PATH_LIST = {
  all: "/mypage/bookmarks/all",
  unread: "/mypage/bookmarks/unread",
  read: "/mypage/bookmarks/read",
} as const;

export const links = [
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

// TODO: 挙動確認の為一時的に6、後程9に変更する
export const DEFAULT_LIMIT = 3;
