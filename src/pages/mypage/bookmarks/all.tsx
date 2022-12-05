import { Space } from "@/components/util-elements/Space";
import { AllMyBookmarks } from "@/features/myBookmarks/components/all/AllMyBookmarks";
import { MyBookmarkLinks } from "@/features/myBookmarks/components/links/MyBookmarkLinks";
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

const AllBookmarks: NextPage = () => {
  return (
    <div>
      <MyBookmarkLinks />
      <Space axis='VERTICAL' size={80} />
      <AllMyBookmarks />
      <Space axis='VERTICAL' size={40} />
    </div>
  );
};

export default AllBookmarks;
