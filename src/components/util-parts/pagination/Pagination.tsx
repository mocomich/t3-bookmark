import { COLORS, HOVERED_COLORS } from "@/styles/config/utils";
import { css } from "@emotion/react";
import { memo } from "react";

type Props = {
  isDisplayButtonPrev: boolean;
  isDisplayButtonNext: boolean;
  page: number;
  onClick: (
    e: React.FormEvent<HTMLButtonElement>,
    page: number,
    value: "PREV" | "NEXT"
  ) => void;
};

export const Pagination: React.FC<Props> = memo(
  ({ isDisplayButtonPrev, isDisplayButtonNext, page, onClick }) => {
    return (
      <div css={styles.container}>
        <button
          css={{
            visibility: isDisplayButtonPrev ? "visible" : "hidden",
          }}
          onClick={(e) => onClick(e, page, "PREV")}
        >
          {page - 1}ページ目
        </button>

        <button
          css={{
            visibility: isDisplayButtonNext ? "visible" : "hidden",
          }}
          onClick={(e) => onClick(e, page, "NEXT")}
        >
          次へ
        </button>
      </div>
    );
  }
);

const styles = {
  container: css({
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: "40px",
    justifyItems: "center",
    button: {
      maxWidth: "200px",
      width: "100%",
      background: COLORS.green,
      padding: "6px 0",
      color: "white",
      borderRadius: "6px",
      ":hover": {
        background: HOVERED_COLORS.green,
        transition: "background 0.3s ease",
      },
    },
  }),
};
