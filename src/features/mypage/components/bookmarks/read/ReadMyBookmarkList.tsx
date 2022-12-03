import { DEFAULT_LIMIT } from "@/features/mypage/const";
import { sp, tab, vwCalcFn } from "@/styles/mixin";
import { trpc } from "@/utils/trpc";
import { css } from "@emotion/react";

import { MyBookmark } from "../bookmark/MyBookmark";

type Props = {
  currentPage: number;
};
export const ReadMyBookmarkList: React.FC<Props> = ({ currentPage }) => {
  const { data: bookmarks } = trpc.bookmark.getReadBookmarksByUserId.useQuery(
    {
      page: currentPage,
      limit: DEFAULT_LIMIT,
    },
    { suspense: true, keepPreviousData: true, staleTime: 5000 }
  );

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
    },
    [tab]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  }),
};
