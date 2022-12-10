import { CategoryComponent } from "@/components/util-parts/category/CategoryComponent";
import { css } from "@emotion/react";
import { Category } from "@prisma/client";

type Props = {
  categories?: Category[];
};

export const Categories: React.FC<Props> = ({ categories }) => {
  return (
    <div css={styles.container}>
      {categories?.map((category) => (
        <CategoryComponent
          key={category.id}
          name={category.name}
          size='large'
        />
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
