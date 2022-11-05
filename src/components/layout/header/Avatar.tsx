import { COLORS } from "@/styles/config/utils";
import { css } from "@emotion/react";
import Image from "next/image";
import { memo } from "react";

type Props = {
  imageUrl: string;
};

export const Avatar: React.FC<Props> = memo(({ imageUrl }) => {
  return (
    <div css={styles.container}>
      <Image
        css={styles.avatar}
        src={imageUrl}
        width={38}
        height={38}
        alt='プロフィール画像'
      />
    </div>
  );
});

const styles = {
  container: css({
    display: "grid",
    alignContent: "center",
    cursor: "pointer",
    border: `2px solid ${COLORS.lightGray}`,
    borderRadius: "1000px",
  }),
  avatar: css({
    borderRadius: "1000px",
  }),
};
