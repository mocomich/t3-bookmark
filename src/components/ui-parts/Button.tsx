import { COLORS } from "@/styles/config/colors";
import { css } from "@emotion/react";

type Props = {
  children: React.ReactNode;
  size: "small" | "medium" | "large";
  color?: "gray" | "blue" | "green" | "red";
};

export const Button: React.FC<Props> = ({
  children,
  size,
  color = "green",
}) => {
  const baseStyle = css({
    width: "100%",
    borderRadius: "6px",
    color: COLORS.white,
    background: COLORS[color],
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

  return <button css={styles[size]}>{children}</button>;
};
