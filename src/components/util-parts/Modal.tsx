import { BOX_SHADOW, COLORS } from "@/styles/config/utils";
import { css, keyframes } from "@emotion/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { memo } from "react";

type Props = {
  children: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const Modal: React.FC<Props> = memo(({ children, open, setOpen }) => (
  <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
    <DialogPrimitive.Portal>
      <div css={styles.overlay} onClick={(prev) => setOpen(!prev)} />
      <div css={styles.content}>{children}</div>
    </DialogPrimitive.Portal>
  </DialogPrimitive.Root>
));

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});
const styles = {
  overlay: css({
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.6)",
    "@media (prefers-reduced-motion: no-preference)": {
      animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
  }),
  content: css({
    display: "grid",
    justifyItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: "6px",
    boxShadow: BOX_SHADOW.md,
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40vw",
    margin: "0 auto",
    padding: "16px",
    "@media (prefers-reduced-motion: no-preference)": {
      animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    "&:focus": { outline: "none" },
  }),
};
