import { TypoGraphy } from "@/components/util-elements/TypoGraphy";
import { UtilLink } from "@/components/util-elements/UtilLink";
import { BOX_SHADOW } from "@/styles/config/utils";
import { css } from "@emotion/react";
import { Bookmark } from "@prisma/client";
import { memo } from "react";

import { Categories } from "./Categories";
import { Date } from "./Date";
import { HeadImage } from "./HeadImage";
import { MemoIcon } from "./MemoIcon";
import { Tags } from "./Tags";

type MyBookmarkProps = Pick<Bookmark, "id" | "url" | "title" | "updatedAt">;

type Props = {
  imageId: number;
  categories: { id: string; name: string }[];
  tags?: { id: string; name: string }[];
} & MyBookmarkProps;

export const MyBookmark: React.FC<Props> = memo(
  ({ id, imageId, url, title, updatedAt, categories, tags }) => {
    return (
      <article css={styles.container}>
        <UtilLink style={styles.head} href={url}>
          <div css={styles.top}>
            <Tags tags={tags} />
            <MemoIcon id={id} />
          </div>
          <HeadImage imageId={imageId} />
        </UtilLink>
        <UtilLink style={styles.content} href={url}>
          <TypoGraphy variant='h4' isResponsive>
            {title}
          </TypoGraphy>
        </UtilLink>
        <div css={styles.bottom}>
          <Categories categories={categories} />
          <Date updatedAt={updatedAt} />
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
    gridTemplateRows: "140px auto auto",
    minHeight: "280px",
    borderRadius: "12px",
  }),
  head: css({
    background: "#71abb3",
    position: "relative",
    borderRadius: "6px 6px 0 0",
    padding: "8px",
  }),
  top: css({
    display: "flex",
    justifyContent: "space-between",
    alignContent: "flex-start",
  }),
  tags: css({
    display: "flex",
    gap: "4px",
  }),
  content: css({
    padding: "12px",
  }),
  bottom: css({
    display: "grid",
    alignItems: "flex-end",
    gridTemplateColumns: "auto 56px",
    justifyContent: "space-between",
    padding: "8px",
  }),
};
