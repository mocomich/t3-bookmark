import { getQuery } from "@/utils/libs";
import { trpc } from "@/utils/trpc";
import { useRouter } from "next/router";
import { useCallback } from "react";

export const useQueryBookmarksByTag = () => {
  const router = useRouter();
  const query = getQuery(router.query.tag);

  const { data, hasNextPage, fetchNextPage } =
    trpc.bookmark.getSearchedBookmarksByTag.useInfiniteQuery(
      {
        tag: query,
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
