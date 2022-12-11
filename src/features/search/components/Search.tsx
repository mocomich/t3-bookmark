import { Space } from "@/components/util-elements/Space";
import { BOX_SHADOW, COLORS } from "@/styles/config/utils";
import { sp } from "@/styles/mixin";
import { css } from "@emotion/react";

import { useSearchBookmark } from "../hooks/useSearchBookmark";
import { SearchInput } from "./SearchInput";
import { SearchTopics } from "./SearchTopics";
import { SearchResult } from "./result/SearchResult";

export const Search = () => {
  const { keyword, keywordQuery, isEmptyQuery, onSubmitHandler, register } =
    useSearchBookmark();

  return (
    <div css={styles.container}>
      <SearchInput
        value={keyword}
        onSubmit={onSubmitHandler}
        register={register("keyword")}
      />
      <Space axis='VERTICAL' size={20} isResponsive />
      {isEmptyQuery && keywordQuery !== "" ? (
        <SearchResult />
      ) : (
        <SearchTopics keyword={keyword} />
      )}
    </div>
  );
};

const styles = {
  container: css({
    maxWidth: "1120px",
    width: "100%",
    margin: "0 auto",
    height: "100%",
    padding: "40px",
    borderRadius: "6px",
    background: COLORS.white,
    boxShadow: BOX_SHADOW.md,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "28px",
    [sp]: {
      width: "95%",
      padding: "20px",
    },
  }),
};
