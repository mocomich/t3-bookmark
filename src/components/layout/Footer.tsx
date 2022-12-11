import { LAYOUT_WIDTH } from "@/styles/config/sizes";
import { COLORS } from "@/styles/config/utils";
import { css } from "@emotion/react";
import { memo } from "react";

import { Space } from "../util-elements/Space";
import { Logo } from "./Logo";

export const Footer: React.FC = memo(() => {
  return (
    <div css={styles.container}>
      <div css={styles.footer} />
      <Space axis='VERTICAL' size={20} />
      <Logo />
    </div>
  );
});

const styles = {
  container: css({
    background: COLORS.white,
    display: "grid",
    justifyItems: "center",
    alignContent: "end",
  }),
  footer: css({
    borderTop: `1px solid ${COLORS.lightGray}`,
    maxWidth: LAYOUT_WIDTH,
    width: "100%",
  }),
};
