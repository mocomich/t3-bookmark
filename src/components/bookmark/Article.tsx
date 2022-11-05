import { TypoGraphy } from "@/components/util-elements/TypoGraphy";
import { BOX_SHADOW, COLORS } from "@/styles/config/utils";
import { vwCalcFn } from "@/styles/mixin";
import { css } from "@emotion/react";
import Image from "next/image";
import { memo } from "react";

import { Link } from "../util-elements/Link";

type Props = {
  id: string;
  title: string;
  url: string;
  imageId: number;
};

export const Article: React.FC<Props> = memo(({ id, title, url, imageId }) => {
  return (
    <article css={styles.container}>
      <div css={styles.top}>
        <TypoGraphy variant='h3'>
          <a href={url} target='_blank' rel='noopener noreferrer'>
            {title}
          </a>
        </TypoGraphy>
      </div>
      <div css={styles.bottom}>
        <Link href={`mypage/${id}`}>
          <div css={styles.memo}>
            <TypoGraphy variant='medium'>Memo...</TypoGraphy>
          </div>
        </Link>
      </div>
      <div css={styles.left}>
        <a
          className='mt-2'
          href={url}
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            src={`/assets/dogs/dog${imageId}.png`}
            width={50}
            height={50}
            alt='dog-image'
          />
        </a>
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
    gridTemplateRows: "auto 70%",
    alignItems: "center",
    columnGap: vwCalcFn(20),
    padding: "12px 20px",
  }),
  top: css({
    fontSize: "20px",
    fontWeight: "bold",
    textDecoration: "underLine",
    gridArea: "1 / 2 / 2 / 3",
  }),
  bottom: css({
    textAlign: "right",
    gridArea: "2 / 2 / 3 / 3",
    alignSelf: "flex-end",
  }),
  left: css({
    width: "100%",
    background: COLORS.offWhite,
    boxShadow: BOX_SHADOW.md,
    aspectRatio: "1/1",
    gridArea: "1 / 1 / 3 / 2",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    borderRadius: "1000px",
  }),
  memo: css({
    display: "inline-block",
    background: COLORS.green,
    color: COLORS.white,
    padding: "4px 6px",
    borderRadius: "6px",
    cursor: "pointer",
  }),
};
