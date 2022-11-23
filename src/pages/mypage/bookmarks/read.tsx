import { Space } from "@/components/util-elements/Space";
import { MyBookmarkLinks } from "@/features/mypage/components/bookmarks/links/MyBookmarkLinks";
import { ReadMyBookmarkList } from "@/features/mypage/components/bookmarks/read/ReadMyBookmarkList";
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

const ReadBookmarks: NextPage = () => {
  return (
    <div>
      <MyBookmarkLinks />
      <Space axis='VERTICAL' size={80} />
      <ReadMyBookmarkList />
      <Space axis='VERTICAL' size={40} />
    </div>
  );
};

export default ReadBookmarks;
