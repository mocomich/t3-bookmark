import { getQuery } from "@/utils/libs";
import { trpc } from "@/utils/trpc";
import { useRouter } from "next/router";

export const useQueryBookmarks = () => {
  const router = useRouter();
  const query = getQuery(router.query.category);

  const { data: bookmarks } =
    trpc.bookmark.getSearchedBookmarksByCategory.useQuery({
      category: query,
    });

  return { bookmarks, query };
};
