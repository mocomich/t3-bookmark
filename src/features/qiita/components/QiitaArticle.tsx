import { TypoGraphy } from "@/components/util-elements/TypoGraphy";
import { BOX_SHADOW, COLORS } from "@/styles/config/utils";
import { sp } from "@/styles/mixin";
import { css } from "@emotion/react";
import { format, parseISO } from "date-fns";
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
        <a
          href={url}
          target='_blank'
          rel='noopener noreferrer'
          css={styles.right}
        >
          <div css={styles.title}>
            <TypoGraphy variant='h3' isResponsive>
              {title}
            </TypoGraphy>
          </div>
          <div css={styles.bottom}>
            <TypoGraphy variant='small'>
              {format(parseISO(updated_at), "MM月dd日")}
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
