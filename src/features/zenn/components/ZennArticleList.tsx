import { vwCalcFn } from "@/styles/mixin";
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
          url={article.path}
          emoji={article.emoji}
        />
      ))}
    </div>
  );
});

const styles = {
  container: css({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: vwCalcFn(40),
  }),
};
