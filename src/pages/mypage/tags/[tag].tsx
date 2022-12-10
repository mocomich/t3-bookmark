import { Space } from "@/components/util-elements/Space";
import { TopicTitle } from "@/components/util-parts/TopicTitle";
import { TagSearchResult } from "@/features/tags/components/tags/TagSearchResult";
import { useQueryBookmarks } from "@/features/tags/hooks/useQueryBookmarks";
import { NextPage } from "next";

const TagPage: NextPage = () => {
  const { query } = useQueryBookmarks();

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
