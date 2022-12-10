import { TagComponent } from "@/components/util-parts/tag/TagComponent";
import { css } from "@emotion/react";
import { Tag } from "@prisma/client";

type Props = {
  tags?: Tag[];
};

export const Tags: React.FC<Props> = ({ tags }) => {
  return (
    <div css={styles.container}>
      {tags?.map((tag) => (
        <TagComponent key={tag.id} name={tag.name} size='large' />
      ))}
    </div>
  );
};

const styles = {
  container: css({
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
  }),
};
