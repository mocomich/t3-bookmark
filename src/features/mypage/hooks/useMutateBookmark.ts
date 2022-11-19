import { trpc } from "@/utils/trpc";

export const useMutateBookmark = () => {
  const utils = trpc.useContext();

  const createBookmarkMutation = trpc.bookmark.createBookmark.useMutation({
    onSuccess: (res) => {
      const previousMyBookmarks = utils.bookmark.getBookmarksByUserId.getData();
      if (previousMyBookmarks) {
        utils.bookmark.getBookmarksByUserId.setData([
          res,
          ...previousMyBookmarks,
        ]);
      }
    },
  });

  return {
    createBookmarkMutation,
  };
};
