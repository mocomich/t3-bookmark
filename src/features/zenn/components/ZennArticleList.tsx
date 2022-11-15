import { sp, tab, vwCalcFn } from "@/styles/mixin";
import { css } from "@emotion/react";
import { memo } from "react";

import { useQueryZennArticles } from "../hooks/useQueryZennArticles";
import { ZennArticle } from "./ZennArticle";

export const ZennArticleList: React.FC = memo(() => {
  const { data: articles } = useQueryZennArticles();

  return (
    <div css={styles.container}>
      {articles?.map((article) => (
        <ZennArticle
          key={article.id}
          title={article.title}
          path={article.path}
          emoji={article.emoji}
          publishedAt={article.publishedAt}
        />
      ))}
    </div>
  );
});

const styles = {
  container: css({
    display: "grid",
    gap: vwCalcFn(40),
    gridTemplateColumns: "repeat(2, 1fr)",
    [sp]: {
      gridTemplateColumns: "1fr",
    },
    [tab]: {
      gridTemplateColumns: "1fr",
    },
  }),
};
