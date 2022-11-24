import { BOX_SHADOW, COLORS } from "@/styles/config/utils";
import { vwCalcFn } from "@/styles/mixin";
import { css } from "@emotion/react";
import React from "react";

export const PulseArticle = () => {
  return (
    <article css={styles.container}>
      <div css={styles.left} className='animate-pulse' />
      <div css={styles.right}>
        <div css={styles.dummyTitle} className='animate-pulse' />
        <div css={styles.dummyTitle} className='animate-pulse' />
      </div>
    </article>
  );
};

const styles = {
  container: css({
    background: COLORS.white,
    borderRadius: "6px",
    width: "100%",
    height: "130px",
    boxShadow: BOX_SHADOW.md,
    display: "grid",
    gridTemplateColumns: "110px auto",
    alignItems: "center",
    columnGap: vwCalcFn(20),
    padding: "12px 20px",
  }),
  left: {
    background: COLORS.offWhite,
    boxShadow: BOX_SHADOW.md,
    borderRadius: "1000px",
    aspectRatio: "1/1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "40px",
    cursor: "pointer",
    width: "100%",
  },
  right: css({
    display: "grid",
    rowGap: "10px",
  }),
  dummyTitle: { width: "100%", background: COLORS.lightGray, height: "18px" },
};
