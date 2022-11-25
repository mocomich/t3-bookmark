import { Space } from "@/components/util-elements/Space";
import { ErrorFallback } from "@/components/util-parts/ErrorBoundary";
import { Pagination } from "@/components/util-parts/pagination/Pagination";
import { PulseBookmarkList } from "@/components/util-parts/pulse/PulseBookmarkList";
import { PATH_LIST } from "@/features/mypage/const";
import { usePagination } from "@/features/mypage/hooks/usePagination";
import { trpc } from "@/utils/trpc";
import { css } from "@emotion/react";
import { Suspense, memo } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { UnReadMyBookmarkList } from "./UnReadMyBookmarkList";

export const UnReadMyBookmarks = memo(() => {
  const { data: count } =
    trpc.bookmark.getCountUnReadBookmarksByUserId.useQuery(undefined, {
      staleTime: 5000,
    });

  const { isDisplayButton, page, handlePaginationChange } = usePagination(
    PATH_LIST.unread,
    count
  );
  return (
    <section css={styles.container}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<PulseBookmarkList count={6} />}>
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
    width: "80%",
    margin: "0 auto",
  }),
};
