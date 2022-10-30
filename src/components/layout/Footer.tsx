import { css } from "@emotion/react";

export const Footer: React.FC = () => {
  return <div css={styles.container}>Footer</div>;
};

const styles = {
  container: css({
    background: "blue",
  }),
};
