import { memo } from "react";

import { useTagComponent } from "./hooks/useTagComponent";

type Props = {
  size: "medium" | "large";
  name: string;
};

export const TagComponent: React.FC<Props> = memo(({ size, name }) => {
  const { isMedium, mediumStyle, baseStyle, onClickHandler } =
    useTagComponent(size);
  return (
    <button
      css={isMedium ? mediumStyle : baseStyle}
      onClick={(e) => onClickHandler(e, name)}
    >
      {name}
    </button>
  );
});
