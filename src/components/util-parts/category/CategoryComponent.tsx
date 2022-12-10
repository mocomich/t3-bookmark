import { memo } from "react";

import { useCategoryComponent } from "./hooks/useCategoryComponent";

type Props = {
  name: string;
  size: "medium" | "large";
};
export const CategoryComponent: React.FC<Props> = memo(({ name, size }) => {
  const { isMedium, mediumStyle, baseStyle, onClickHandler } =
    useCategoryComponent(size);

  return (
    <button
      css={isMedium ? mediumStyle : baseStyle}
      onClick={() => onClickHandler(name)}
    >
      {name}
    </button>
  );
});
