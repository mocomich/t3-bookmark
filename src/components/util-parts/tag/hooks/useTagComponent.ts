import { BOX_SHADOW, COLORS, HOVERED_COLORS } from "@/styles/config/utils";
import { PATH_LIST } from "@/utils/const";
import { css } from "@emotion/react";
import { useRouter } from "next/router";

export const useTagComponent = (size: "medium" | "large") => {
  const router = useRouter();

  const isMedium = size === "medium";

  const baseStyle = css({
    display: "grid",
    placeItems: "center",
    color: "white",
    // height: "29px",
    background: COLORS.orange,
    boxShadow: BOX_SHADOW.md,
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: isMedium ? "12px" : "16px",
    padding: isMedium ? "4px 8px" : "6px 12px",
    ":hover": {
      background: HOVERED_COLORS.orange,
      transition: "background 0.3s ease",
    },
  });

  const mediumStyle = css({
    ...baseStyle,
    maxHeight: "30px",
  });
  const onClickHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    name: string
  ) => {
    e.preventDefault();
    router.push(`${PATH_LIST.tags}/${name}`);
  };
  return { isMedium, baseStyle, mediumStyle, onClickHandler };
};
