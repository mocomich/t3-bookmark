import { BOX_SHADOW, COLORS } from "@/styles/config/utils";
import { css } from "@emotion/react";
import { Category } from "@prisma/client";

type Props = {
  categories?: Category[];
};

export const Categories: React.FC<Props> = ({ categories }) => {
  // TODO: SSGする
  return (
    <div css={styles.container}>
      {categories?.map((category) => (
        <span css={styles.category} key={category.id}>
          {category.name}
        </span>
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
  category: css({
    fontWeight: "bold",
    padding: "6px 12px",
    borderRadius: "6px",
    color: "white",
    background: COLORS.green,
    cursor: "pointer",
    boxShadow: BOX_SHADOW.md,
  }),
};
