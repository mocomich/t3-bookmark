import { css } from "@emotion/react";
import Image from "next/image";
import { memo } from "react";

type Props = {
  imageId: number;
};
export const HeadImage: React.FC<Props> = memo(({ imageId }) => {
  return (
    <div css={styles.headImage}>
      <Image
        src={`/assets/dogs/dog${imageId}.png`}
        layout='fill'
        objectFit='contain'
        alt='犬のアイコン画像'
      />
    </div>
  );
});

const styles = {
  headImage: css({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50px",
    height: "50px",
  }),
};
