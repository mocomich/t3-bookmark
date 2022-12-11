import { BOX_SHADOW, COLORS } from "@/styles/config/utils";
import { sp } from "@/styles/mixin";
import { css } from "@emotion/react";
import { memo, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { GrSearch } from "react-icons/gr";

type Props = {
  value: string;
  onSubmit: (e: React.FocusEvent<HTMLFormElement>) => void;
  register: UseFormRegisterReturn;
};

export const SearchInput: React.FC<Props> = memo(
  ({ value, onSubmit, register }) => {
    const [isFocus, setIsFocus] = useState(false);

    return (
      <form onSubmit={onSubmit} css={styles.container(isFocus)}>
        <label htmlFor='search'>
          <GrSearch css={styles.icon} size={20} />
        </label>
        <input
          css={styles.input}
          type='text'
          id='search'
          placeholder='キーワードを入力してください...'
          autoComplete='off'
          {...register}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          value={value}
        />
        <button css={styles.button(isFocus)} type='submit'>
          Enterで検索
        </button>
      </form>
    );
  }
);

const styles = {
  container: (isFocus: boolean) =>
    css({
      width: "100%",
      height: "100%",
      borderRadius: "1000px",
      padding: "12px 24px",
      boxShadow: BOX_SHADOW.lg,
      display: "flex",
      alignItems: "center",
      gap: "6px",
      outline: isFocus ? `2px solid ${COLORS.green}` : "none",
    }),
  input: css({
    width: "100%",
    height: "32px",
    padding: "12px",
    outline: "none",
  }),
  icon: css({
    color: COLORS.green,
  }),
  button: (isFocus: boolean) =>
    css({
      transition: "opacity 1s ease-out",
      opacity: isFocus ? 1 : 0,
      fontSize: "12px",
      width: "100px",
      justifyContent: "flex-end",
      color: "#6e7b85",
      background: COLORS.lightGray,
      padding: "2px",
      borderRadius: "6px",

      [sp]: {
        display: "none",
      },
    }),
};
