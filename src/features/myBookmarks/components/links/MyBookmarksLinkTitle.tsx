import { TypoGraphy } from "@/components/util-elements/TypoGraphy";
import { COLORS } from "@/styles/config/utils";
import { sp, vwCalcFn } from "@/styles/mixin";
import { BookmarkLinkPathsType, BookmarkTitlesType } from "@/types";
import { useLinks } from "@/utils/hooks/useLinks";
import { css } from "@emotion/react";
import { memo } from "react";

type Props = {
  title: BookmarkTitlesType;
  path: BookmarkLinkPathsType;
  counts: number;
};

export const MyBookmarksLinkTitle: React.FC<Props> = memo(
  ({ title, path, counts }) => {
    const { isSamePath, onClickTransitionPage } =
      useLinks<BookmarkLinkPathsType>(path);
    const unReadStyle = title === "UnRead" ? { color: COLORS.red } : {};

    return (
      <div css={styles.container} data-state={isSamePath ? "active" : "normal"}>
        <TypoGraphy variant='h4' isResponsive>
          <button
            css={styles.button}
            onClick={() => onClickTransitionPage(path)}
          >
            {title}
            <span css={unReadStyle}>{counts}</span>
          </button>
        </TypoGraphy>
      </div>
    );
  }
);

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
  button: css({
    display: "flex",
    gap: vwCalcFn(8),
  }),
};
