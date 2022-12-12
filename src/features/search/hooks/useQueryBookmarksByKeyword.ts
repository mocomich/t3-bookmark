import { getQuery } from "@/utils/libs";
import { trpc } from "@/utils/trpc";
import { useRouter } from "next/router";
import { useCallback } from "react";

export const useQueryBookmarksByKeyword = () => {
  const router = useRouter();
  const query = getQuery(router.query.keyword);

  const { data, hasNextPage, fetchNextPage } =
    trpc.bookmark.getSearchedBookmarksByKeyword.useInfiniteQuery(
      {
        keyword: query,
      },
      {
        getNextPageParam: (lastPage) => lastPage.nextCursor,
      }
    );
  const onClickHandler = useCallback(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  return { data, hasNextPage, query, onClickHandler };
};
