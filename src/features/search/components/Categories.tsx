import { BOX_SHADOW, COLORS } from "@/styles/config/utils";
import { css } from "@emotion/react";
import { Category } from "@prisma/client";
import { useRouter } from "next/router";

type Props = {
  categories?: Category[];
};

export const Categories: React.FC<Props> = ({ categories }) => {
  const router = useRouter();

  return (
    <div css={styles.container}>
      {categories?.map((category) => (
        <button
          css={styles.category}
          key={category.id}
          onClick={() => router.push(`/mypage/categories/${category.name}`)}
        >
          {category.name}
        </button>
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
    background: COLORS.blue,
    cursor: "pointer",
    boxShadow: BOX_SHADOW.md,
  }),
};
