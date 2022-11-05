import { BOX_SHADOW, COLORS } from "@/styles/config/utils";
import { css, keyframes } from "@emotion/react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { memo } from "react";

const LinkRoot = [
  { href: "/mypage", title: "My Page", index: 1 },
  { href: "/mypage/settings", title: "Setting", index: 2 },
] as const;

type LinkHref = typeof LinkRoot[number]["href"];

export const DropDownMenuContent: React.FC = memo(() => {
  const router = useRouter();
  const onClickToLinkMenu = (href: LinkHref) => {
    router.push(href);
  };

  return (
    <DropdownMenuPrimitive.Content css={styles.content}>
      {LinkRoot.map((root) => (
        <DropdownMenuPrimitive.Item
          css={styles.item}
          key={root.index}
          onClick={() => onClickToLinkMenu(root.href)}
        >
          {root.title}
        </DropdownMenuPrimitive.Item>
      ))}
      <DropdownMenuPrimitive.Item onClick={() => signOut()} css={styles.item}>
        ログアウト
      </DropdownMenuPrimitive.Item>
    </DropdownMenuPrimitive.Content>
  );
});

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const styles = {
  content: css({
    background: "white",
    minWidth: "160px",
    borderRadius: 6,
    boxShadow: BOX_SHADOW.lg,
    "@media (prefers-reduced-motion: no-preference)": {
      animationDuration: "400ms",
      animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      willChange: "transform, opacity",
      '&[data-state="open"]': {
        '&[data-side="top"]': { animationName: slideDownAndFade },
        '&[data-side="right"]': { animationName: slideLeftAndFade },
        '&[data-side="bottom"]': { animationName: slideUpAndFade },
        '&[data-side="left"]': { animationName: slideRightAndFade },
      },
    },
  }),
  item: css({
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
    padding: "8px",
    ":hover": {
      outline: "none",
      cursor: "pointer",
      color: COLORS.white,
      borderRadius: "4px",
      backgroundColor: "rgba(0,0,0,0.4)",
    },
  }),
};
