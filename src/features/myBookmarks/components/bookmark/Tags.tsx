import { TagComponent } from "@/components/util-parts/tag/TagComponent";
import { css } from "@emotion/react";
import { Tag } from "@prisma/client";

type Props = {
  tags?: Tag[];
};

export const Tags: React.FC<Props> = ({ tags }) => {
  return (
    <div css={styles.tags}>
      {tags?.map((tag) => (
        <TagComponent key={tag.id} name={tag.name} size='medium' />
      ))}
    </div>
  );
};

const styles = {
  tags: css({
    display: "flex",
    gap: "4px",
    maxHeight: "30px",
  }),
};
