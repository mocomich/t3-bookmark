import { BOX_SHADOW, COLORS } from "@/styles/config/utils";
import { sp } from "@/styles/mixin";
import { css } from "@emotion/react";
import { memo } from "react";

import { Markdown } from "../editForm/memo/MarkDown";

type Props = {
  memo: string;
};
export const Memo: React.FC<Props> = memo(({ memo }) => {
  return (
    <div css={styles.container}>
      <Markdown markdown={memo} />
    </div>
  );
});

const styles = {
  container: css({
    width: "70%",
    margin: "0 auto",
    height: "100%",
    padding: "40px",
    borderRadius: "6px",
    background: COLORS.white,
    boxShadow: BOX_SHADOW.md,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "28px",
    [sp]: {
      width: "95%",
      padding: "20px",
    },
  }),
};
