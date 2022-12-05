import { sp, tab, vwCalcFn } from "@/styles/mixin";
import { trpc } from "@/utils/trpc";
import { css } from "@emotion/react";

import { MyBookmark } from "../../../myBookmarks/components/bookmark/MyBookmark";
import { useSearchBookmark } from "../../hooks/useSearchBookmark";
import { NoDataMessage } from "../NoDataMessage";

export const SearchResultList: React.FC = () => {
  const { keywordQuery } = useSearchBookmark();
  const { data: bookmarks } =
    trpc.bookmark.getSearchedBookmarksByKeyword.useQuery({
      keyword: keywordQuery,
    });

  if (bookmarks && bookmarks.length < 1)
    return <NoDataMessage searchQuery={keywordQuery} />;

  return (
    <div css={styles.container}>
      {bookmarks?.map((bookmark, i) => (
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
      ))}
    </div>
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
