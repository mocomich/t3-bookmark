import { getQuery } from "@/utils/libs";
import { trpc } from "@/utils/trpc";
import { useRouter } from "next/router";
import { useCallback } from "react";

export const useQueryBookmarksByCategory = () => {
  const router = useRouter();
  const query = getQuery(router.query.category);

  const { data, hasNextPage, fetchNextPage } =
    trpc.bookmark.getSearchedBookmarksByCategory.useInfiniteQuery(
      {
        category: query,
      },
      {
        getNextPageParam: (lastPage) => lastPage.nextCursor,
        suspense: true,
      }
    );
  const onClickHandler = useCallback(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  return { data, hasNextPage, query, onClickHandler };
};
