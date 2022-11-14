import { TypoGraphy } from "@/components/util-elements/TypoGraphy";
import { BOX_SHADOW } from "@/styles/config/utils";
import { css } from "@emotion/react";
import { memo, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

import { Markdown } from "./MarkDown";
import { PreviewSwitch } from "./PreviewSwitch";

type Props = {
  memo: string;
  register: UseFormRegisterReturn;
};

export const MemoForm: React.FC<Props> = memo(({ register, memo }) => {
  const [isPreview, setIsPreview] = useState(false);

  const onClickSwitchPreview = (target: "WRITE" | "PREVIEW") => {
    if (target === "WRITE") {
      setIsPreview(false);
      return;
    }
    setIsPreview(true);
  };

  return (
    <div css={styles.container}>
      <div css={styles.header}>
        <TypoGraphy variant='large'>Memo</TypoGraphy>
        <PreviewSwitch isPreview={isPreview} onClick={onClickSwitchPreview} />
      </div>
      {isPreview ? (
        <Markdown markdown={memo} />
      ) : (
        <div>
          <textarea
            css={styles.textarea}
            placeholder='マークダウン形式で記載できます'
            {...register}
          />
        </div>
      )}
    </div>
  );
});

const styles = {
  container: css({
    display: "grid",
    gap: "20px",
  }),
  header: css({
    display: "flex",
    justifyContent: "space-between",
  }),
  textarea: css({
    width: "100%",
    display: "block",
    minHeight: "300px",
    boxShadow: BOX_SHADOW.lg,
    borderRadius: "6px",
    padding: "16px 12px",
    outline: "none",
    resize: "vertical",
  }),
};
