import { PATH_LIST } from "@/utils/const";
import { useNavigation } from "@/utils/hooks/useNavigation";
import { css } from "@emotion/react";
import Image from "next/image";

export const Logo = () => {
  const { navigate } = useNavigation();

  return (
    <button onClick={() => navigate(PATH_LIST["home"])}>
      <Image
        css={styles.image}
        src={`/assets/logo.png`}
        width={124}
        height={36}
        alt='ロゴ'
      />
    </button>
  );
};

const styles = {
  image: css({
    cursor: "pointer",
    ":hover": {
      opacity: "0.7",
    },
  }),
};
