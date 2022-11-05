import { FOOTER_HEIGHT, HEADER_HEIGHT } from "@/styles/config/sizes";
import { COLORS } from "@/styles/config/utils";
import { css } from "@emotion/react";

import { Footer } from "./Footer";
import { Header } from "./header/Header";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div css={styles.container}>
      <Header />
      <main css={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

const styles = {
  container: css({
    height: "100vh",
    display: "grid",
    gridTemplateRows: `${HEADER_HEIGHT}px auto ${FOOTER_HEIGHT}px`,
  }),
  main: css({
    background: COLORS.beige,
  }),
};
