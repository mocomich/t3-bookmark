import { BOX_SHADOW, COLORS } from "@/styles/config/utils";
import { css } from "@emotion/react";
import { memo } from "react";

type Props = {
  categories: { id: string; name: string }[];
};

export const Categories: React.FC<Props> = memo(({ categories }) => {
  return (
    <div css={styles.categories}>
      {categories.map((category) => (
        <div key={category.id} css={styles.category}>
          {category.name}
        </div>
      ))}
    </div>
  );
});

const styles = {
  categories: css({
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
  }),
  category: css({
    fontSize: "14px",
    padding: "4px 6px",
    color: "white",
    background: COLORS.blue,
    borderRadius: "6px",
    boxShadow: BOX_SHADOW.md,
    maxHeight: "30px",
  }),
};
