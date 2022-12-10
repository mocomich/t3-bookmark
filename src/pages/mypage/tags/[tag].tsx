import { Space } from "@/components/util-elements/Space";
import { TopicTitle } from "@/components/util-parts/TopicTitle";
import { TagSearchResult } from "@/features/tags/components/tags/TagSearchResult";
import { useQueryBookmarksByTags } from "@/features/tags/hooks/useQueryBookmarksByTags";
import { NextPage } from "next";

const TagPage: NextPage = () => {
  const { query } = useQueryBookmarksByTags();

  return (
    <section>
      <TopicTitle title={query} />
      <Space axis='VERTICAL' size={40} />
      <TagSearchResult />
      <Space axis='VERTICAL' size={40} />
    </section>
  );
};

export default TagPage;
