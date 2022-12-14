import { LAYOUT_WIDTH } from "@/styles/config/sizes";
import { COLORS } from "@/styles/config/utils";
import { sp } from "@/styles/mixin";
import { SETTING_LINK_LIST } from "@/utils/const";
import { css } from "@emotion/react";

import { SettingLinkTitle } from "./SettingLinkTitle";

// TODO:BookmarkLinksと共通化できそうなのでする
export const SettingLinks: React.FC = () => {
  return (
    <div css={styles.container}>
      <div css={styles.tabList} aria-label='Find Articles'>
        <div css={styles.tabListInner}>
          {SETTING_LINK_LIST.map((link) => (
            <SettingLinkTitle
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
