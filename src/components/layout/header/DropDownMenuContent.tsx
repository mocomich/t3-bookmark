import { TypoGraphy } from "@/components/util-elements/TypoGraphy";
import { BOX_SHADOW, COLORS } from "@/styles/config/utils";
import { css, keyframes } from "@emotion/react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { memo } from "react";
import { AiFillSetting } from "react-icons/ai";
import { IoBook } from "react-icons/io5";
import { RiLogoutBoxRFill } from "react-icons/ri";

const LinkRoot = [
  {
    href: "/mypage/bookmarks/all",
    title: "My Bookmarks",
    icon: <IoBook size={18} className='mr-2 mt-1' />,
    index: 1,
  },
  {
    href: "/mypage/settings",
    title: "Setting",
    icon: <AiFillSetting size={18} className='mr-2' />,
    index: 2,
  },
] as const;

type LinkHref = typeof LinkRoot[number]["href"];

export const DropDownMenuContent: React.FC = memo(() => {
  const router = useRouter();
  const onClickToLinkMenu = (href: LinkHref) => {
    router.push(href);
  };

  return (
    <DropdownMenuPrimitive.Content
      css={styles.content}
      align={"start"}
      sideOffset={30}
    >
      {LinkRoot.map((root) => (
        <DropdownMenuPrimitive.Item
          css={styles.item}
          key={root.index}
          onClick={() => onClickToLinkMenu(root.href)}
        >
          {root.icon}
          <TypoGraphy variant='medium'>{root.title}</TypoGraphy>
        </DropdownMenuPrimitive.Item>
      ))}
      <DropdownMenuPrimitive.Item onClick={() => signOut()} css={styles.item}>
        <RiLogoutBoxRFill size={18} className='mr-2' />
        <TypoGraphy variant='medium'>ログアウト</TypoGraphy>
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
    alignItems: "center",
    width: "100%",
    padding: "8px 12px",
    ":hover": {
      outline: "none",
      cursor: "pointer",
      color: COLORS.white,
      borderRadius: "4px",
      backgroundColor: "rgba(0,0,0,0.4)",
    },
  }),
};
