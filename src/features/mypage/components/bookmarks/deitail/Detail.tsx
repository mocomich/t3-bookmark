import { Space } from "@/components/util-elements/Space";
import { Switch } from "@/components/util-parts/toggle/Switch";
import { sp } from "@/styles/mixin";
import { trpc } from "@/utils/trpc";
import { css } from "@emotion/react";
import { memo, useState } from "react";

import { Form } from "../editForm/Form";
import { Memo } from "./Memo";

type Props = {
  id: string;
};

export const Detail: React.FC<Props> = memo(({ id }) => {
  const [isEdit, setIsEdit] = useState(false);
  const { data: bookmark } = trpc.bookmark.getSingleBookmarkById.useQuery({
    id,
  });

  const onClickHandler = (target: "MEMO" | "EDIT") => {
    if (target === "MEMO") {
      setIsEdit(false);
      return;
    }
    setIsEdit(true);
  };

  const memo = bookmark?.memo ? bookmark.memo : "";

  return (
    <>
      <Space axis='VERTICAL' size={40} />
      <div css={styles.head}>
        <Switch value={isEdit} onClick={onClickHandler} />
        <Space axis='VERTICAL' size={10} />
      </div>
      {isEdit ? bookmark && <Form bookmark={bookmark} /> : <Memo memo={memo} />}
      <Space axis='VERTICAL' size={40} />
    </>
  );
});

const styles = {
  head: css({
    width: "70%",
    margin: "0 auto",
    height: "100%",
    display: "grid",
    justifyContent: "flex-end",
    gap: "28px",
    [sp]: {
      width: "95%",
      padding: "20px",
    },
  }),
};
