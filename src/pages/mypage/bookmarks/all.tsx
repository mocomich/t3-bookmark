import { MyBookmarkLinks } from "@/features/mypage/components/bookmarks/links/MyBookmarkLinks";
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
    </div>
  );
};

export default AllBookmarks;
