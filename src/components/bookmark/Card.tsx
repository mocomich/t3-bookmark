import { TypoGraphy } from "@/components/util-elements/TypoGraphy";
import { vwCalcFn } from "@/styles/mixin";
import { css } from "@emotion/react";
import Image from "next/image";

type Props = {
  title: string;
  url: string;
  imageId: number;
};

export const Card: React.FC<Props> = ({ title, url, imageId }) => {
  return (
    <article css={styles.container}>
      <div css={styles.top}>
        <TypoGraphy variant='h3'>
          <a href={url} target='_blank' rel='noopener noreferrer'>
            {title}
          </a>
        </TypoGraphy>
      </div>
      <div css={styles.bottom}>{title}</div>
      <div css={styles.right}>
        <a href={url} target='_blank' rel='noopener noreferrer'>
          <Image
            src={`/assets/dogs/dog${imageId}.png`}
            width={50}
            height={50}
            alt='dog'
          />
        </a>
      </div>
    </article>
  );
};

const styles = {
  container: css({
    background: "white",
    borderRadius: "6px",
    width: "100%",
    height: "180px",
    boxShadow:
      "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    display: "grid",
    gridTemplateColumns: "auto 100px",
    gridTemplateRows: "70% auto",
    columnGap: vwCalcFn(20),
    alignItems: "center",
    padding: "12px",
  }),
  top: css({
    fontSize: "20px",
    fontWeight: "bold",
    textDecoration: "underLine",
    gridArea: " 1 / 1 / 2 / 2",
  }),
  bottom: css({
    textAlign: "right",
    gridArea: "2 / 1 / 3 / 2",
  }),
  right: css({
    width: "100%",
    aspectRatio: "1/1",
    gridArea: "1 / 2 / 3 / 3",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  }),
};
