import { Space } from "@/components/util-elements/Space";
import { Setting } from "@/features/mypage/components/settings/Setting";
import { SettingLinks } from "@/features/mypage/components/settings/links/SettingLinks";
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

const SettingsPage: NextPage = () => {
  return (
    <div>
      <SettingLinks />
      <Space axis='VERTICAL' size={80} />
      <Setting />
      <Space axis='VERTICAL' size={40} />
    </div>
  );
};

export default SettingsPage;
