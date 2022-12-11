import { Space } from "@/components/util-elements/Space";
import { TopicTitle } from "@/components/util-parts/TopicTitle";
import { CategorySearchResult } from "@/features/categories/components/category/CategorySearchResult";
import { useQueryBookmarksByCategory } from "@/features/categories/hooks/useQueryBookmarksByCategory";
import { GetServerSidePropsContext, NextPage } from "next";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { user: session.user },
  };
}
const CategoryPage: NextPage = () => {
  const { query } = useQueryBookmarksByCategory();

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
