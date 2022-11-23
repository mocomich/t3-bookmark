import { TypoGraphy } from "@/components/util-elements/TypoGraphy";
import { UtilLink } from "@/components/util-elements/UtilLink";
import { BOX_SHADOW } from "@/styles/config/utils";
import { getDateMMdd } from "@/utils/libs";
import { css } from "@emotion/react";
import { Bookmark } from "@prisma/client";
import Image from "next/image";
import { memo } from "react";

type MyBookmarkProps = Pick<Bookmark, "id" | "url" | "title" | "updatedAt">;

type Props = {
  imageId: number;
  categories: { id: string; name: string }[];
} & MyBookmarkProps;

export const MyBookmark: React.FC<Props> = memo(
  ({ id, imageId, url, title, updatedAt, categories }) => {
    // TODO: 詳細ページ（メモ）のリンク設置
    return (
      <article css={styles.container}>
        <UtilLink style={styles.head} href={url}>
          <div css={styles.headImage}>
            <Image
              src={`/assets/dogs/dog${imageId}.png`}
              layout='fill'
              objectFit='contain'
              alt='犬のアイコン画像'
            />
          </div>
        </UtilLink>
        <UtilLink style={styles.content} href={url}>
          <TypoGraphy variant='h4' isResponsive>
            {title}
          </TypoGraphy>
        </UtilLink>
        <div css={styles.bottom}>
          <TypoGraphy variant='small'>{getDateMMdd(updatedAt)}</TypoGraphy>
        </div>
      </article>
    );
  }
);

const styles = {
  container: css({
    width: "100%",
    background: "white",
    boxShadow: BOX_SHADOW.lg,
    display: "grid",
    gridTemplateRows: "140px 2fr 1fr",
    minHeight: "280px",
    borderRadius: "12px",
  }),
  head: css({
    background: "#71abb3",
    position: "relative",
    borderRadius: "6px 6px 0 0",
  }),
  headImage: css({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50px",
    height: "50px",
  }),
  content: css({
    padding: "12px",
  }),
  bottom: css({
    padding: "12px",
    justifySelf: "flex-end",
  }),
};
