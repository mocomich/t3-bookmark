import { Space } from "@/components/util-elements/Space";
import { Form } from "@/features/mypage/components/bookmarks/editForm/Form";
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

const EditBookMarkPage: NextPage = () => {
  return (
    <section>
      <Space axis='VERTICAL' size={40} />
      <Form />
      <Space axis='VERTICAL' size={40} />
    </section>
  );
};

export default EditBookMarkPage;
