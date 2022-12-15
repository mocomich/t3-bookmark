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
    onSuccess: () => {
      utils.bookmark.getAllBookmarksByUserId.refetch();
    },
  });

  const deleteBookmarkMutation = trpc.bookmark.deleteBookmarkById.useMutation({
    onSuccess: (_, variable) => {
      const previousBookmarks =
        utils.bookmark.getAllBookmarksByUserId.getData();

      if (previousBookmarks) {
        utils.bookmark.getAllBookmarksByUserId.setData(
          previousBookmarks.filter((bookmark) => bookmark.id !== variable.id)
        );
      }
    },
  });

  return {
    createBookmarkMutation,
    updateBookmarkMutation,
    deleteBookmarkMutation,
  };
};
