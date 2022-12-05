import { Detail } from "@/features/myBookmarks/components/deitail/Detail";
import { GetServerSidePropsContext, NextPage } from "next";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";

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

const ArticleMemoPage: NextPage = () => {
  const query = useRouter().query;
  const userId = _getUserId(query.id);

  function _getUserId(id: string | string[] | undefined) {
    if (id === undefined) {
      throw new Error("データが取得できません");
    }
    if (typeof id !== "string") {
      throw new Error("正しいidを送信して下さい");
    }
    return id;
  }

  return (
    <section>
      <Detail id={userId} />
    </section>
  );
};

export default ArticleMemoPage;
