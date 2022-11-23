import { Space } from "@/components/util-elements/Space";
import { MyBookmarkLinks } from "@/features/mypage/components/bookmarks/links/MyBookmarkLinks";
import { UnReadMyBookmarks } from "@/features/mypage/components/bookmarks/unRead/UnReadMyBookmarks";
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

const UnReadBookmarks: NextPage = () => {
  return (
    <div>
      <MyBookmarkLinks />
      <Space axis='VERTICAL' size={80} />
      <UnReadMyBookmarks />
      <Space axis='VERTICAL' size={40} />
    </div>
  );
};

export default UnReadBookmarks;
