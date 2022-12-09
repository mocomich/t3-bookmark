import { css } from "@emotion/react";

import { Tag } from "./Tag";

type Props = {
  tags?: { id: string; name: string }[];
};

export const Tags: React.FC<Props> = ({ tags }) => {
  return (
    <div css={styles.tags}>
      {tags?.map((tag) => (
        <Tag key={tag.id} name={tag.name} />
      ))}
    </div>
  );
};

const styles = {
  tags: css({
    display: "flex",
    gap: "4px",
  }),
};
