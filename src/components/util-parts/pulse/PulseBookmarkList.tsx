import { sp, tab, vwCalcFn } from "@/styles/mixin";
import { css } from "@emotion/react";

import { PulseBookmark } from "./PulseBookmark";

type Props = {
  count: number;
};

export const PulseBookmarkList: React.FC<Props> = ({ count }) => {
  const pulseCounts = Array(count).fill(null);

  return (
    <div css={styles.container}>
      {pulseCounts.map((_, i) => (
        <PulseBookmark key={i} />
      ))}
    </div>
  );
};

const styles = {
  container: css({
    display: "grid",
    gap: vwCalcFn(40),
    gridTemplateColumns: "repeat(3, 1fr)",
    [sp]: {
      gridTemplateColumns: "1fr",
    },
    [tab]: {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  }),
};
