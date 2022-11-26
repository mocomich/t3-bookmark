import { trpc } from "@/utils/trpc";

export const useMutateBookmark = () => {
  const utils = trpc.useContext();

  const createBookmarkMutation = trpc.bookmark.createBookmark.useMutation({
    onSuccess: (res) => {
      const previousMyBookmarks =
        utils.bookmark.getAllBookmarksByUserId.getData();
      if (previousMyBookmarks) {
        utils.bookmark.getAllBookmarksByUserId.setData([
          res,
          ...previousMyBookmarks,
        ]);
      }
    },
  });

  const updateBookmarkMutation = trpc.bookmark.updateBookmark.useMutation({
    onSuccess: (res) => {
      const previousMyBookmarks =
        utils.bookmark.getAllBookmarksByUserId.getData();
      if (previousMyBookmarks) {
        utils.bookmark.getAllBookmarksByUserId.setData([
          ...previousMyBookmarks.map((bookmark) =>
            bookmark.id === res.id ? res : bookmark
          ),
        ]);
      }
    },
  });

  return {
    createBookmarkMutation,
    updateBookmarkMutation,
  };
};
