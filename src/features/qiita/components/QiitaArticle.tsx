import { TypoGraphy } from "@/components/util-elements/TypoGraphy";
import { BOX_SHADOW, COLORS } from "@/styles/config/utils";
import { vwCalcFn } from "@/styles/mixin";
import { css } from "@emotion/react";
import Image from "next/image";
import { memo } from "react";

import { QiitaArticleType } from "../types";

type Props = Pick<QiitaArticleType, "title" | "url" | "updated_at">;

export const QiitaArticle: React.FC<Props> = memo(
  ({ title, url, updated_at }) => {
    return (
      <article css={styles.container}>
        <a
          css={styles.left}
          href={url}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            width={40}
            height={40}
            src={"/assets/qiita.png"}
            alt='Qiita LOGO'
          />
        </a>
        <div css={styles.right}>
          <TypoGraphy variant='h3'>
            <a href={url} target='_blank' rel='noopener noreferrer'>
              {title}
            </a>
          </TypoGraphy>
        </div>
      </article>
    );
  }
);

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
