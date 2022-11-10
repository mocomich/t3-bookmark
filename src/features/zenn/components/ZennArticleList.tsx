import { Article } from "@/components/bookmark/Article";
import { TypoGraphy } from "@/components/util-elements/TypoGraphy";
import { vwCalcFn } from "@/styles/mixin";
import { css } from "@emotion/react";
import { Suspense, memo } from "react";

import { useQueryZennArticles } from "../hooks/useQueryZennArticles";
import { ZennArticle } from "./ZennArticle";

export const ZennArticleList: React.FC = memo(() => {
  const { data: articles } = useQueryZennArticles();

  return (
    <div css={styles.container}>
      <div className='mt-8'>
        <TypoGraphy variant='h2'>
          <a href='https://zenn.dev' target='_blank' rel='noopener noreferrer'>
            Zenn Articles
          </a>
        </TypoGraphy>
      </div>
      {/* // TODO: Loadingアニメーション */}
      <Suspense fallback={<div>Loading</div>}>
        <div className='mt-8' css={styles.bookmarks}>
          {articles?.map((article) => (
            <ZennArticle
              key={article.id}
              title={article.title}
              url={article.path}
              emoji={article.emoji}
            />
          ))}
        </div>
      </Suspense>
    </div>
  );
});

const styles = {
  container: css({
    width: "80%",
    margin: "0 auto",
  }),
  bookmarks: css({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: vwCalcFn(40),
  }),
};
