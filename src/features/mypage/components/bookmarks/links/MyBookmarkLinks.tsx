import { links } from "@/features/mypage/const";
import { COLORS } from "@/styles/config/utils";
import { sp } from "@/styles/mixin";
import { css } from "@emotion/react";

import { MyBookmarksLinkTitle } from "./MyBookmarksLinkTitle";

export const MyBookmarkLinks: React.FC = () => {
  return (
    <div css={styles.container}>
      <div css={styles.tabList} aria-label='Find Articles'>
        <div css={styles.tabListInner}>
          {links.map((link) => (
            <MyBookmarksLinkTitle
              key={link.path}
              title={link.title}
              path={link.path}
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
    maxWidth: "1360px",
    width: "90%",
    margin: "0 auto",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: "20px",
    [sp]: {
      width: "90%",
      gap: "8px",
    },
  }),
  tabContent: css({
    margin: "0 auto",
    width: "80%",
    [sp]: {
      width: "100%",
    },
  }),
};
