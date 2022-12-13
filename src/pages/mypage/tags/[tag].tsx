import { Space } from "@/components/util-elements/Space";
import { TopicTitle } from "@/components/util-parts/TopicTitle";
import { TagSearchResult } from "@/features/tags/components/tags/TagSearchResult";
import { useQueryBookmarksByTag } from "@/features/tags/hooks/useQueryBookmarksByTag";
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

const TagPage: NextPage = () => {
  const { query } = useQueryBookmarksByTag();

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
