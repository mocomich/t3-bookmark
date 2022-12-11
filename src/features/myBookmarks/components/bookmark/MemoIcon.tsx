import { BOX_SHADOW, COLORS, HOVERED_COLORS } from "@/styles/config/utils";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
import { memo } from "react";
import { FiFileText } from "react-icons/fi";

type Props = {
  id: string;
};
export const MemoIcon: React.FC<Props> = memo(({ id }) => {
  const router = useRouter();
  const onClickTransitionPage = (
    e: React.FormEvent<HTMLButtonElement>,
    id: string
  ) => {
    e.preventDefault();
    router.push(`/mypage/${id}`);
  };
  return (
    <button css={styles.detail} onClick={(e) => onClickTransitionPage(e, id)}>
      <FiFileText css={styles.icon} />
    </button>
  );
});

const styles = {
  detail: css({
    padding: "8px",
    borderRadius: "6px",
    background: COLORS.green,
    display: "inline-block",
    boxShadow: BOX_SHADOW.md,
    ":hover": {
      background: HOVERED_COLORS.green,
      transition: "backGround 0.3s ease",
    },
  }),
  icon: css({
    fontSize: "24px",
    color: "white",
  }),
};
