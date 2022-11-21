export const links = [
  { path: "/mypage/bookmarks/all", title: "All Bookmarks" },
  {
    path: "/mypage/bookmarks/unread",
    title: "UnRead",
  },
  {
    path: "/mypage/bookmarks/read",
    title: "Already Read",
  },
] as const;

// TODO: 挙動確認の為一時的に6、後程9に変更する
export const DEFAULT_LIMIT = 6;
