import { ErrorFallback } from "@/components/util-parts/ErrorBoundary";
import { PulseArticleList } from "@/components/util-parts/pulse/PulseArticleList";
import { ArticlesTitle } from "@/features/articles/ArticlesTitle";
import { sp } from "@/styles/mixin";
import { css } from "@emotion/react";
import { Suspense, memo } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { QiitaArticleList } from "./QiitaAricleList";

export const Qiita: React.FC = memo(() => {
  return (
    <div css={styles.container}>
      <div css={styles.space} />
      <ArticlesTitle path='https://qiita.com/'>Qiita Articles</ArticlesTitle>
      <div css={styles.space} />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<PulseArticleList count={6} />}>
          <QiitaArticleList />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
});

const styles = {
  container: css({
    width: "100%",
    margin: "0 auto",
  }),
  space: css({
    height: "32px",
    [sp]: {
      height: "24px",
    },
  }),
};
