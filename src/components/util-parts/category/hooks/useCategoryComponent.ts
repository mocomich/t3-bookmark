import { BOX_SHADOW, COLORS } from "@/styles/config/utils";
import { PATH_LIST } from "@/utils/const";
import { css } from "@emotion/react";
import { useRouter } from "next/router";

export const useCategoryComponent = (size: "medium" | "large") => {
  const router = useRouter();
  const isMedium = size === "medium";

  const baseStyle = css({
    borderRadius: "6px",
    color: "white",
    background: COLORS.blue,
    cursor: "pointer",
    boxShadow: BOX_SHADOW.md,
    fontSize: isMedium ? "14px" : "16px",
    padding: isMedium ? "4px 6px" : "6px 12px",
  });

  const mediumStyle = css({
    ...baseStyle,
    maxHeight: "30px",
  });

  const onClickHandler = (name: string) => {
    router.push(`${PATH_LIST.categories}/${name}`);
  };

  return { isMedium, baseStyle, mediumStyle, onClickHandler };
};
