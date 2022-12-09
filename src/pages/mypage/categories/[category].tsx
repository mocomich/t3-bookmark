import { Space } from "@/components/util-elements/Space";
import { CategorySearchResult } from "@/features/categories/components/category/CategorySearchResult";
import { TopicTitle } from "@/features/categories/components/category/TopicTitle";
import { useQueryBookmarks } from "@/features/categories/hooks/useQueryBookmarks";
import { NextPage } from "next";

const CategoryPage: NextPage = () => {
  const { query } = useQueryBookmarks();

  return (
    <section>
      <TopicTitle title={query} />
      <Space axis='VERTICAL' size={40} />
      <CategorySearchResult />
      <Space axis='VERTICAL' size={40} />
    </section>
  );
};

export default CategoryPage;