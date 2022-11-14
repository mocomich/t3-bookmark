import { css } from "@emotion/react";
import React from "react";

export const Comprehension = () => {
  return (
    <div css={styles.container}>
      <label>0%</label>
      <label className='pl-3'>25%</label>
      <label className='pl-2'>50%</label>
      <label className='pl-3'>75%</label>
      <label>100%</label>
    </div>
  );
};

const styles = {
  container: css({
    display: "flex",
    justifyContent: "space-between",
  }),
  center: css({
    textAlign: "center",
  }),
};
