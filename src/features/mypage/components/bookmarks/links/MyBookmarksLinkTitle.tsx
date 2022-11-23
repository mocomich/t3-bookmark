import { TypoGraphy } from "@/components/util-elements/TypoGraphy";
import { LinkPathsType } from "@/features/mypage/types";
import { COLORS } from "@/styles/config/utils";
import { sp } from "@/styles/mixin";
import { isInPath } from "@/utils/libs";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { memo } from "react";

type Props = {
  title: string;
  path: LinkPathsType;
};

export const MyBookmarksLinkTitle: React.FC<Props> = memo(({ title, path }) => {
  const router = useRouter();
  const currentPath = router.pathname;
  const isSamePath = isInPath<LinkPathsType>(path, currentPath);

  const onClickHandler = (path: LinkPathsType) => {
    router.push(path);
  };

  return (
    <div css={styles.container} data-state={isSamePath ? "active" : "normal"}>
      <TypoGraphy variant='h4' isResponsive>
        <button onClick={() => onClickHandler(path)}>{title}</button>
      </TypoGraphy>
    </div>
  );
});

const styles = {
  container: css({
    position: "relative",
    padding: "0 12px",
    [sp]: {
      padding: "0 4px",
    },
    color: COLORS.gray,
    ":hover": {
      opacity: 0.7,
      transition: "opacity 0.3s ease",
      color: "black",
    },
    "&[data-state=active]": {
      color: "black",
      h4: {
        "&:after": {
          position: "absolute",
          content: "''",
          width: "100%",
          height: "2px",
          display: "inline-block",
          backgroundColor: COLORS.green,
          bottom: 0,
          left: 0,
        },
      },
    },
  }),
};
