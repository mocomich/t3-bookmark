import { BOX_SHADOW, COLORS } from "@/styles/config/utils";
import { css } from "@emotion/react";
import { memo } from "react";

type Props = {
  tag: string;
};

export const Tag: React.FC<Props> = memo(({ tag }) => {
  return <div css={styles.tag}>#{tag}</div>;
});

const styles = {
  tag: css({
    fontSize: "14px",
    fontWeight: "bold",
    padding: "4px 8px",
    background: COLORS.orange,
    borderRadius: "6px",
    color: "white",
    boxShadow: BOX_SHADOW.md,
  }),
};
