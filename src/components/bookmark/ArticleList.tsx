import { TypoGraphy } from "@/components/util-elements/TypoGraphy";
import { vwCalcFn } from "@/styles/mixin";
import { css } from "@emotion/react";

import { Article } from "./Article";

const bookmarks = [
  {
    id: 1,
    title: "title A",
    url: "https://zenn.dev/mocomichi/articles/47c95425bc28d5",
    imageId: 7,
  },
  {
    id: 2,
    title: "title A",
    url: "https://zenn.dev/mocomichi/articles/47c95425bc28d5",
    imageId: 2,
  },
  {
    id: 3,
    title: "title A",
    url: "https://zenn.dev/mocomichi/articles/47c95425bc28d5",
    imageId: 3,
  },
];

export const ArticleList: React.FC = () => {
  return (
    <div css={styles.container}>
      <div className='mt-8'>
        <TypoGraphy variant='h2'>Bookmarks</TypoGraphy>
      </div>
      <div className='mt-8' css={styles.bookmarks}>
        {bookmarks.map((bookmark) => (
          <Article
            key={bookmark.id}
            title={bookmark.title}
            url={bookmark.url}
            imageId={bookmark.imageId}
          />
        ))}
      </div>
    </div>
  );
};

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
