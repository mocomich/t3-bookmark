import { Button } from "@/components/util-elements/Button";
import { Space } from "@/components/util-elements/Space";
import { useQueryBookmarksByCategory } from "@/features/categories/hooks/useQueryBookmarksByCategory";
import { sp, tab, vwCalcFn } from "@/styles/mixin";
import { css } from "@emotion/react";

import { MyBookmark } from "../../../myBookmarks/components/bookmark/MyBookmark";
import { useQueryBookmarksByKeyword } from "../../hooks/useQueryBookmarksByKeyword";
import { NoDataMessage } from "../NoDataMessage";

export const SearchResultList: React.FC = () => {
  const { data, hasNextPage, query, onClickHandler } =
    useQueryBookmarksByKeyword();

  if (data?.pages[0] && data.pages[0].bookmarks.length < 1)
    return (
      <>
        <Space axis='VERTICAL' size={40} />
        <NoDataMessage searchQuery={query} />
      </>
    );

  return (
    <>
      <div css={styles.container}>
        {data?.pages.map((page) => {
          return page.bookmarks.map((bookmark, i) => (
            <MyBookmark
              key={bookmark.id}
              imageId={i + 1}
              id={bookmark.id}
              url={bookmark.url}
              title={bookmark.title}
              categories={bookmark.categories}
              tags={bookmark.tags}
              updatedAt={bookmark.updatedAt}
            />
          ));
        })}
      </div>
      <Space axis='VERTICAL' size={40} />
      <div className='w-24 ml-auto'>
        {hasNextPage && (
          <Button size='medium' onClick={onClickHandler}>
            More
          </Button>
        )}
      </div>
    </>
  );
};

const styles = {
  container: css({
    display: "grid",
    gap: vwCalcFn(40),
    gridTemplateColumns: "repeat(3, 1fr)",
    [sp]: {
      gridTemplateColumns: "1fr",
      gap: "20px",
    },
    [tab]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  }),
};
