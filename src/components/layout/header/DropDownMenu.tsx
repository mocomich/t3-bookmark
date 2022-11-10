import { COLORS } from "@/styles/config/utils";
import { css } from "@emotion/react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { memo } from "react";

import { DropDownMenuContent } from "./DropDownMenuContent";

type Props = {
  triggerComponent: React.ReactNode;
};

export const DropdownMenu: React.FC<Props> = memo(({ triggerComponent }) => {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger css={styles.trigger}>
        {triggerComponent}
      </DropdownMenuPrimitive.Trigger>
      <DropDownMenuContent />
    </DropdownMenuPrimitive.Root>
  );
});

const styles = {
  trigger: css({
    ":focus": {
      outline: "none",
    },
  }),
  item: css({
    ":hover": {
      outline: "none",
      cursor: "pointer",
      color: COLORS.white,
      backgroundColor: "rgba(0,0,0,0.4)",
    },
  }),
};
