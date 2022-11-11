import { TypoGraphy } from "@/components/util-elements/TypoGraphy";
import { ZennArticleType } from "@/features/zenn/types";
import { BOX_SHADOW, COLORS } from "@/styles/config/utils";
import { vwCalcFn } from "@/styles/mixin";
import { css } from "@emotion/react";
import { memo } from "react";

type Props = Pick<ZennArticleType, "title" | "path" | "emoji">;

export const ZennArticle: React.FC<Props> = memo(({ title, path, emoji }) => {
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
      <div css={styles.right}>
        <TypoGraphy variant='h3'>
          <a
            href={`https://zenn.dev/${path}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            {title}
          </a>
        </TypoGraphy>
      </div>
    </article>
  );
});

const styles = {
  container: css({
    background: COLORS.white,
    borderRadius: "6px",
    width: "100%",
    height: "150px",
    boxShadow: BOX_SHADOW.md,
    display: "grid",
    gridTemplateColumns: "110px auto",
    alignItems: "center",
    columnGap: vwCalcFn(20),
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
    cursor: "pointer",
    width: "100%",
  },
  right: css({
    fontSize: "20px",
    fontWeight: "bold",
    textDecoration: "underLine",
  }),
};
