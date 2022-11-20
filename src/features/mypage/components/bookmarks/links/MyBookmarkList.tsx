import { trpc } from "@/utils/trpc";

export const MyBookmarkList: React.FC = () => {
  const { data: bookmarks } = trpc.bookmark.getBookmarksByUserId.useQuery();

  console.log(bookmarks, "book");

  return <div>MyBookmarkList</div>;
};
