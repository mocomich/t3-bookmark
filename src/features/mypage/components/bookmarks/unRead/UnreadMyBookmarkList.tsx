import { sp, tab, vwCalcFn } from "@/styles/mixin";
import { trpc } from "@/utils/trpc";
import { css } from "@emotion/react";
import { memo } from "react";

import { MyBookmark } from "../MyBookmark";

export const UnreadMyBookmarkList = memo(() => {
  const { data: articles } =
    trpc.bookmark.getUnReadBookmarksByUserId.useQuery();
  return (
    <div css={styles.container}>
      {articles?.map((article, i) => (
        <MyBookmark
          key={article.id}
          imageId={i + 1}
          id={article.id}
          url={article.url}
          title={article.title}
          updatedAt={article.updatedAt}
        />
      ))}
    </div>
  );
});

const styles = {
  container: css({
    maxWidth: "1120px",
    width: "80%",
    margin: "0 auto",
    display: "grid",
    gap: vwCalcFn(40),
    gridTemplateColumns: "repeat(3, 1fr)",
    [sp]: {
      gridTemplateColumns: "1fr",
    },
    [tab]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  }),
};
