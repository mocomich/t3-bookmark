import { MY_BOOKMARK_LINK_LIST } from "@/features/mypage/const";
import { LAYOUT_WIDTH } from "@/styles/config/sizes";
import { COLORS } from "@/styles/config/utils";
import { sp } from "@/styles/mixin";
import { trpc } from "@/utils/trpc";
import { css } from "@emotion/react";

import { MyBookmarksLinkTitle } from "./MyBookmarksLinkTitle";

export const MyBookmarkLinks: React.FC = () => {
  const { data: counts } = trpc.bookmark.getBookmarksCounts.useQuery(
    undefined,
    {
      staleTime: 5000,
    }
  );

  return (
    <div css={styles.container}>
      <div css={styles.tabList} aria-label='Find Articles'>
        <div css={styles.tabListInner}>
          {MY_BOOKMARK_LINK_LIST.map((link) => (
            <MyBookmarksLinkTitle
              key={link.path}
              title={link.title}
              path={link.path}
              counts={counts ? counts[link.path] : 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: css({}),
  tabList: css({
    background: COLORS.white,
    height: "50px",
    lineHeight: "50px",
    [sp]: {
      height: "32px",
      lineHeight: "32px",
    },
  }),
  tabListInner: css({
    maxWidth: LAYOUT_WIDTH,
    width: "95%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "20px",
    [sp]: {
      gap: "8px",
    },
  }),
  tabContent: css({
    margin: "0 auto",
    width: "90%",
    [sp]: {
      width: "100%",
    },
  }),
};
