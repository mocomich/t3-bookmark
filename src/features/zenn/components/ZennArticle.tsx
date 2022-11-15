import { TypoGraphy } from "@/components/util-elements/TypoGraphy";
import { ZennArticleType } from "@/features/zenn/types";
import { BOX_SHADOW, COLORS } from "@/styles/config/utils";
import { sp } from "@/styles/mixin";
import { css } from "@emotion/react";
import { format, parseISO } from "date-fns";
import { memo } from "react";

type Props = Pick<ZennArticleType, "title" | "path" | "emoji" | "publishedAt">;

export const ZennArticle: React.FC<Props> = memo(
  ({ title, path, emoji, publishedAt }) => {
    return (
      <article css={styles.container}>
        <a
          css={styles.left}
          href={`https://zenn.dev/${path}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          {emoji}
        </a>
        <a
          css={styles.right}
          href={`https://zenn.dev/${path}`}
          target='_blank'
          rel='noopener noreferrer'
        >
          <div css={styles.title}>
            <TypoGraphy variant='h3' isResponsive>
              {title}
            </TypoGraphy>
          </div>
          <div css={styles.bottom}>
            <TypoGraphy variant='small'>
              {format(parseISO(publishedAt), "MM月dd日")}
            </TypoGraphy>
          </div>
        </a>
      </article>
    );
  }
);

const styles = {
  container: css({
    background: COLORS.white,
    borderRadius: "6px",
    width: "100%",
    minHeight: "130px",
    boxShadow: BOX_SHADOW.md,
    display: "grid",
    gridTemplateColumns: "110px auto",
    [sp]: {
      gridTemplateColumns: "80px auto",
    },
    alignItems: "center",
    columnGap: "20px",
    padding: "12px 20px",
  }),
  left: {
    background: COLORS.offWhite,
    boxShadow: BOX_SHADOW.md,
    borderRadius: "1000px",
    aspectRatio: "1/1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "40px",
    [sp]: {
      fontSize: "30px",
    },
    cursor: "pointer",
    width: "100%",
  },
  right: css({
    width: "100%",
    height: "100%",
    display: "grid",
    alignContent: "space-between",
  }),
  title: css({
    fontSize: "20px",
    fontWeight: "bold",
    textDecoration: "underLine",
  }),
  bottom: css({
    justifySelf: "flex-end",
  }),
};
