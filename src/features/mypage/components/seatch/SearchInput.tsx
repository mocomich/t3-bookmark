import { BOX_SHADOW, COLORS } from "@/styles/config/utils";
import { css } from "@emotion/react";
import { memo, useState } from "react";
import { GrSearch } from "react-icons/gr";

type Props = {
  keyword: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchInput: React.FC<Props> = memo(({ onChangeHandler }) => {
  const [isFocus, setIsFocus] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit} css={styles.container(isFocus)}>
      <label htmlFor='search'>
        <GrSearch size={20} />
      </label>
      <input
        css={styles.input}
        type='text'
        id='search'
        name='search'
        placeholder='キーワードを入力してください...'
        autoComplete='off'
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={onChangeHandler}
      />
      {isFocus && <button css={styles.button}>Enterで検索</button>}
    </form>
  );
});

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
  button: css({
    fontSize: "12px",
    width: "100px",
    justifyContent: "flex-end",
    color: "#6e7b85",
    background: COLORS.lightGray,
    padding: "2px",
    borderRadius: "6px",
  }),
};
