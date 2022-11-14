import { COLORS } from "@/styles/config/utils";
import { css } from "@emotion/react";

type Props = {
  isPreview: boolean;
  onClick: (target: "WRITE" | "PREVIEW") => void;
};

export const PreviewSwitch: React.FC<Props> = ({ isPreview, onClick }) => {
  return (
    <div css={styles.container}>
      <button
        onClick={() => onClick("WRITE")}
        css={styles.write(isPreview)}
        type='button'
      >
        Write
      </button>
      <button
        onClick={() => onClick("PREVIEW")}
        css={styles.preview(isPreview)}
        type='button'
      >
        Preview
      </button>
    </div>
  );
};

const styles = {
  container: css({
    display: "flex",
  }),
  write: (isPreview: boolean) =>
    css({
      width: "90px",
      padding: "6px 0",
      borderRadius: isPreview ? "6px 0 0 6px" : "6px",
      color: COLORS.white,
      background: isPreview ? COLORS.lightGray : COLORS.green,
      transition: "all 0.3s",
    }),
  preview: (isPreview: boolean) =>
    css({
      width: "90px",
      padding: "6px 0",
      borderRadius: isPreview ? "6px" : "0 6px 6px 0",
      color: COLORS.white,
      background: isPreview ? COLORS.orange : COLORS.lightGray,
      transition: "all 0.3s",
    }),
};
