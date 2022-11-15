import { sp, tab, vwCalcFn } from "@/styles/mixin";
import { css } from "@emotion/react";
import { memo } from "react";

import { useQueryQiitaArticles } from "../hooks/useQueryQiitaArticles";
import { QiitaArticle } from "./QiitaArticle";

export const QiitaArticleList: React.FC = memo(() => {
  const { data: articles } = useQueryQiitaArticles();

  return (
    <div css={styles.container}>
      {articles?.map((article) => (
        <QiitaArticle
          key={article.id}
          title={article.title}
          url={article.url}
          updated_at={article.updated_at}
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
    [sp]: {
      gridTemplateColumns: "1fr",
    },
    [tab]: {
      gridTemplateColumns: "1fr",
    },
  }),
};
