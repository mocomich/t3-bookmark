import { Space } from "@/components/util-elements/Space";
import { TypoGraphy } from "@/components/util-elements/TypoGraphy";
import { memo } from "react";

import { useSearchTopics } from "../../hooks/useSearchTopics";
import { TagLink } from "../utils/TagLink";
import { Categories } from "./Categories";
import { Tags } from "./Tags";

type Props = {
  keyword: string;
};

export const SearchTopics: React.FC<Props> = memo(({ keyword }) => {
  const { filteredCategories, filteredTags } = useSearchTopics(keyword);
  return (
    <>
      <TypoGraphy variant='h3'>カテゴリー検索</TypoGraphy>
      <Categories categories={filteredCategories} />
      <TypoGraphy variant='h3'>タグ検索</TypoGraphy>
      <Tags tags={filteredTags} />
      <Space axis='HORIZONTAL' size={20} />
      <TagLink />
    </>
  );
});
