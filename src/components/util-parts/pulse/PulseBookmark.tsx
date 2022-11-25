import { BOX_SHADOW, COLORS } from "@/styles/config/utils";
import { css } from "@emotion/react";

export const PulseBookmark = () => {
  return (
    <article css={styles.container}>
      <div css={styles.head} className='animate-pulse'>
        <div css={styles.top}>
          <div css={styles.dummyTag} className='animate-pulse' />
          <div css={styles.dummyIcon} className='animate-pulse' />
        </div>
        <div css={styles.headImage} className='animate-pulse' />
      </div>
      <div css={styles.content}>
        <div css={styles.dummyTitle} className='animate-pulse' />
        <div css={styles.dummyTitle} className='animate-pulse' />
      </div>
      <div css={styles.bottom}>
        <div css={styles.dummyCategory} className='animate-pulse' />
        <div css={styles.dummyDate} className='animate-pulse' />
      </div>
    </article>
  );
};

const styles = {
  container: css({
    width: "100%",
    background: "white",
    boxShadow: BOX_SHADOW.lg,
    display: "grid",
    gridTemplateRows: "140px 2fr 1fr",
    minHeight: "280px",
    borderRadius: "12px",
  }),
  head: css({
    position: "relative",
    borderRadius: "6px 6px 0 0",
    padding: "12px",
    background: COLORS.lightGray,
  }),
  top: css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }),
  content: css({
    padding: "12px",
    display: "grid",
    gap: "4px",
  }),
  bottom: css({
    display: "grid",
    gridTemplateColumns: "auto 56px",
    justifyContent: "space-between",
    padding: "12px",
  }),
  dummyIcon: css({
    width: "40px",
    aspectRatio: "1/1",
    background: COLORS.lightGray,
    borderRadius: "6px",
  }),
  dummyTag: css({
    width: "50px",
    height: "30px",
    background: COLORS.lightGray,
    borderRadius: "6px",
  }),
  headImage: css({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50px",
    aspectRatio: "1/1",
    borderRadius: "1000px",
    background: COLORS.lightGray,
  }),
  dummyTitle: {
    width: "100%",
    background: COLORS.lightGray,
    height: "24px",
  },
  dummyCategory: css({
    width: "120px",
    height: "18px",
    background: COLORS.lightGray,
    borderRadius: "6px",
  }),
  dummyDate: css({
    width: "100%",
    height: "16px",
    background: COLORS.lightGray,
    borderRadius: "6px",
    justifySelf: "flex-end",
    alignSelf: "flex-end",
  }),
};
