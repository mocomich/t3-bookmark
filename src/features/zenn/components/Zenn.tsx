import { TypoGraphy } from "@/components/util-elements/TypoGraphy";
import { ErrorFallback } from "@/components/util-parts/ErrorBoundary";
import { PulseArticleList } from "@/components/util-parts/PulseArticleList";
import { css } from "@emotion/react";
import { Suspense, memo } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { ZennArticleList } from "./ZennArticleList";

export const Zenn: React.FC = memo(() => {
  return (
    <div css={styles.container}>
      <div className='mt-8'>
        <TypoGraphy variant='h2'>
          <a href='https://zenn.dev' target='_blank' rel='noopener noreferrer'>
            Zenn Articles
          </a>
        </TypoGraphy>
      </div>
      <div className='mt-8'>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<PulseArticleList count={6} />}>
            <ZennArticleList />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
});

const styles = {
  container: css({
    width: "80%",
    margin: "0 auto",
  }),
};
