import { Space } from "@/components/util-elements/Space";
import { Search } from "@/features/search/components/Search";
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

const SearchPage: NextPage = () => {
  return (
    <section>
      <Space axis='VERTICAL' size={40} />
      <Search />
      <Space axis='VERTICAL' size={40} />
    </section>
  );
};

export default SearchPage;
