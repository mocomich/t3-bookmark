import { Space } from "@/components/util-elements/Space";
import { ErrorFallback } from "@/components/util-parts/ErrorBoundary";
import { Pagination } from "@/components/util-parts/pagination/Pagination";
import { PATH_LIST } from "@/features/mypage/const";
import { usePagination } from "@/features/mypage/hooks/usePagination";
import { trpc } from "@/utils/trpc";
import { css } from "@emotion/react";
import { memo } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { AllMyBookmarkList } from "./AllMyBookmarkList";

export const AllMyBookmarks = memo(() => {
  const { data: count } = trpc.bookmark.getCountAllBookmarksByUserId.useQuery(
    undefined,
    { staleTime: 5000 }
  );

  const { isDisplayButton, page, handlePaginationChange } = usePagination(
    PATH_LIST.all,
    count
  );
  return (
    <section css={styles.container}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <AllMyBookmarkList currentPage={page} />
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
