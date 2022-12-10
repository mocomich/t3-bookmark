import { getQuery } from "@/utils/libs";
import { trpc } from "@/utils/trpc";
import { useRouter } from "next/router";

export const useQueryBookmarksByTags = () => {
  const router = useRouter();
  const query = getQuery(router.query.tag);

  const { data: bookmarks } = trpc.bookmark.getSearchedBookmarksByTag.useQuery({
    tag: query,
  });

  return { bookmarks, query };
};
