import { useMutateTag } from "@/features/mypage/hooks/useMutateTag";
import { BOX_SHADOW, COLORS } from "@/styles/config/utils";
import { css } from "@emotion/react";
import { Tag } from "@prisma/client";
import { memo } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

type Props = Pick<Tag, "name" | "id"> & { isDelete?: boolean };

export const TagLabel: React.FC<Props> = memo(({ id, name, isDelete }) => {
  const { deleteTagMutation } = useMutateTag();

  const deleteLabel = (id: string) => {
    const isConfirm = window.confirm("本当に削除しても宜しいですか？");
    if (!isConfirm) return;

    deleteTagMutation.mutate({ id });
  };
  return (
    <div css={styles.tag}>
      {name}
      {!isDelete && (
        <button onClick={() => deleteLabel(id)}>
          <AiOutlineCloseCircle size={18} />
        </button>
      )}
    </div>
  );
});

const styles = {
  tag: css({
    display: "flex",
    gap: "8px",
    alignItems: "center",
    fontWeight: "bold",
    padding: "6px 12px",
    borderRadius: "6px",
    color: "white",
    background: COLORS.orange,
    boxShadow: BOX_SHADOW.md,
  }),
};
