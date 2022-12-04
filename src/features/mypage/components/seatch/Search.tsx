import { Space } from "@/components/util-elements/Space";
import { TypoGraphy } from "@/components/util-elements/TypoGraphy";
import { BOX_SHADOW, COLORS } from "@/styles/config/utils";
import { sp } from "@/styles/mixin";
import { trpc } from "@/utils/trpc";
import { css } from "@emotion/react";
import { Category, Tag } from "@prisma/client";
import { useState } from "react";

import { TagLink } from "../utils/TagLink";
import { Categories } from "./Categories";
import { SearchInput } from "./SearchInput";
import { Tags } from "./Tags";

export const Search = () => {
  const [keyword, setKeyword] = useState("");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const { data: categories } = trpc.category.getAllCategories.useQuery();
  const { data: tags } = trpc.tag.getAllTags.useQuery();

  const filteredCategories = getFilteredCategory(keyword, categories);
  const filteredTags = getFilteredTag(keyword, tags);

  function getFilteredCategory(
    keyword: string,
    categories: Category[] | undefined
  ) {
    if (categories === undefined) return;
    return categories.filter((category) => category.name.includes(keyword));
  }

  function getFilteredTag(keyword: string, Tags: Tag[] | undefined) {
    if (Tags === undefined) return;
    return Tags.filter((tag) => tag.name.includes(keyword));
  }

  return (
    <div css={styles.container}>
      <SearchInput keyword={keyword} onChangeHandler={onChangeHandler} />
      <Space axis='HORIZONTAL' size={40} />
      <TypoGraphy variant='h3'>カテゴリー</TypoGraphy>
      <Categories categories={filteredCategories} />
      <TypoGraphy variant='h3'>タグ</TypoGraphy>
      <Tags tags={filteredTags} />
      <Space axis='HORIZONTAL' size={20} />
      <TagLink />
    </div>
  );
};

const styles = {
  container: css({
    width: "80%",
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
