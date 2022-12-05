import { BOX_SHADOW, COLORS } from "@/styles/config/utils";
import { css } from "@emotion/react";
import { memo } from "react";

type Props = {
  name?: string;
};

export const Tag: React.FC<Props> = memo(({ name }) => {
  return <div css={styles.tag}>{name}</div>;
});

const styles = {
  tag: css({
    display: "grid",
    placeItems: "center",
    fontSize: "12px",
    height: "29px",
    fontWeight: "bold",
    padding: "4px 8px",
    background: COLORS.orange,
    borderRadius: "6px",
    color: "white",
    boxShadow: BOX_SHADOW.md,
  }),
};
