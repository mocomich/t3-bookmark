import { Space } from "@/components/util-elements/Space";
import { Spinner } from "@/components/util-elements/Spinner";
import { ErrorFallback } from "@/components/util-parts/ErrorBoundary";
import { Pagination } from "@/components/util-parts/pagination/Pagination";
import { PATH_LIST } from "@/utils/const";
import { usePagination } from "@/utils/hooks/usePagination";
import { trpc } from "@/utils/trpc";
import { css } from "@emotion/react";
import { Suspense, memo } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { UnReadMyBookmarkList } from "./UnreadMyBookmarkList";

export const UnReadMyBookmarks = memo(() => {
  const { data: count } =
    trpc.bookmark.getCountUnReadBookmarksByUserId.useQuery(undefined, {
      staleTime: 5000,
    });

  const { isDisplayButton, page, handlePaginationChange } = usePagination(
    PATH_LIST.unreadBookmarks,
    count
  );
  return (
    <section css={styles.container}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<Spinner />}>
          <UnReadMyBookmarkList currentPage={page} />
        </Suspense>
      </ErrorBoundary>
      <Space axis='VERTICAL' size={40} />
      <Pagination
        page={page}
        onClick={handlePaginationChange}
        isDisplayButtonPrev={isDisplayButton(page).prev}
        isDisplayButtonNext={isDisplayButton(page).next}
      />
    </section>
  );
});

const styles = {
  container: css({
    maxWidth: "1120px",
    width: "90%",
    margin: "0 auto",
  }),
};
