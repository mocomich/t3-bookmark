import { Spinner } from "@/components/util-elements/Spinner";
import { ErrorFallback } from "@/components/util-parts/ErrorBoundary";
import { css } from "@emotion/react";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { TagSearchResultList } from "./TagResultList";

export const TagSearchResult = () => {
  return (
    <section css={styles.container}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<Spinner />}>
          <TagSearchResultList />
        </Suspense>
      </ErrorBoundary>
    </section>
  );
};

const styles = {
  container: css({
    maxWidth: "1120px",
    minHeight: "300px",
    width: "90%",
    margin: "0 auto",
  }),
};
