import { vwCalcFn } from "@/styles/mixin";
import { css } from "@emotion/react";

import { PulseArticle } from "./PulseArticle";

type Props = {
  count: number;
};

export const PulseArticleList: React.FC<Props> = ({ count }) => {
  const pulseCounts = Array(count).fill(null);

  return (
    <div css={styles.container}>
      {pulseCounts.map((_, i) => (
        <PulseArticle key={i} />
      ))}
    </div>
  );
};

const styles = {
  container: css({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: vwCalcFn(40),
  }),
};
