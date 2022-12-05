import { BOX_SHADOW } from "@/styles/config/utils";
import { css } from "@emotion/react";
import { memo } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  placeholder?: string;
  register: UseFormRegisterReturn;
};
export const TextInput: React.FC<Props> = memo(({ register, placeholder }) => {
  return (
    <input
      css={styles.input}
      type='text'
      placeholder={placeholder}
      {...register}
    />
  );
});

const styles = {
  input: css({
    width: "100%",
    boxShadow: BOX_SHADOW.lg,
    borderRadius: "6px",
    outline: "none",
    padding: "16px 12px",
  }),
};
