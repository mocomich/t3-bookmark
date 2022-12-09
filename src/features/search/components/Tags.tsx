import { BOX_SHADOW, COLORS } from "@/styles/config/utils";
import { css } from "@emotion/react";
import { Tag } from "@prisma/client";
import { useRouter } from "next/router";

type Props = {
  tags?: Tag[];
};

export const Tags: React.FC<Props> = ({ tags }) => {
  const router = useRouter();
  return (
    <div css={styles.container}>
      {tags?.map((tag) => (
        <button
          css={styles.category}
          key={tag.id}
          onClick={() => router.push(`/mypage/tags/${tag.name}`)}
        >
          {tag.name}
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
    background: COLORS.orange,
    cursor: "pointer",
    boxShadow: BOX_SHADOW.md,
  }),
};
