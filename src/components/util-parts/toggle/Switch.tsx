import { COLORS } from "@/styles/config/utils";
import { css } from "@emotion/react";
import React from "react";

type Props = {
  value: boolean;
  onClick: (payload: "MEMO" | "EDIT") => void;
};

export const Switch: React.FC<Props> = ({ value, onClick }) => {
  return (
    <div css={styles.container}>
      <button
        onClick={() => onClick("MEMO")}
        css={styles.memo(value)}
        type='button'
      >
        Memo
      </button>
      <button
        onClick={() => onClick("EDIT")}
        css={styles.preview(value)}
        type='button'
      >
        Edit
      </button>
    </div>
  );
};
const styles = {
  container: css({
    display: "flex",
  }),
  memo: (isEdit: boolean) =>
    css({
      fontWeight: "bold",
      letterSpacing: 1.5,
      width: "90px",
      padding: "6px 0",
      borderRadius: isEdit ? "6px 0 0 6px" : "6px",
      color: COLORS.white,
      background: isEdit ? COLORS.lightGray : COLORS.green,
      transition: "all 0.3s",
    }),
  preview: (isEdit: boolean) =>
    css({
      fontWeight: "bold",
      letterSpacing: 1.5,
      width: "90px",
      padding: "6px 0",
      borderRadius: isEdit ? "6px" : "0 6px 6px 0",
      color: COLORS.white,
      background: isEdit ? COLORS.orange : COLORS.lightGray,
      transition: "all 0.3s",
    }),
};
