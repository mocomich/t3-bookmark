import { BOX_SHADOW, COLORS } from "@/styles/config/utils";
import { css } from "@emotion/react";
import { memo } from "react";

type Props = {
  children: React.ReactNode;
  size: "small" | "medium" | "large";
  color?: "gray" | "blue" | "green" | "red" | "offWhite";
  onClick?: () => void;
};

export const Button: React.FC<Props> = memo(
  ({ children, size, color = "green", onClick }) => {
    const baseStyle = css({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      borderRadius: "6px",
      color: color === "offWhite" ? "black" : COLORS.white,
      background: COLORS[color],
      border: color === "offWhite" ? `1px solid ${COLORS.lightGray}` : "",
      boxShadow: BOX_SHADOW.md,
    });

    const styles = {
      small: css(baseStyle, {
        padding: "2px 0px",
      }),
      medium: css(baseStyle, {
        padding: "6px 0px",
      }),
      large: css(baseStyle, {
        padding: "8px 0px",
      }),
    };

    return (
      <button css={styles[size]} onClick={onClick}>
        {children}
      </button>
    );
  }
);
