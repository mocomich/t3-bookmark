import { COLORS } from "@/styles/config/utils";
import { css } from "@emotion/react";
import Link from "next/link";

export const TagLink = () => {
  return (
    <div className='ml-auto'>
      <Link href='/mypage/settings'>
        <span css={styles.link}>タグを作成する場合はこちら</span>
      </Link>
    </div>
  );
};

const styles = {
  link: css({
    color: COLORS.gray,
    fontWeight: "bold",
    cursor: "pointer",
    textDecoration: "underline",
  }),
};
