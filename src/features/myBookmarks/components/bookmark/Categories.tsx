import { CategoryComponent } from "@/components/util-parts/category/CategoryComponent";
import { css } from "@emotion/react";
import { Category } from "@prisma/client";
import { memo } from "react";

type Props = {
  categories: Category[];
};

export const Categories: React.FC<Props> = memo(({ categories }) => {
  return (
    <div css={styles.categories}>
      {categories.map((category) => (
        <CategoryComponent
          key={category.id}
          name={category.name}
          size='medium'
        />
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
};
