import { css } from "@emotion/react";
import { memo } from "react";

export const Footer: React.FC = memo(() => {
  return <div css={styles.container}>Footer</div>;
});

const styles = {
  container: css({
    background: "blue",
  }),
};
