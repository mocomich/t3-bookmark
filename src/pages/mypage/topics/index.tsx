import { NextPage } from "next";
import { useRouter } from "next/router";

const TopicsPage: NextPage = () => {
  const router = useRouter();
  console.log(router);

  return <div>[query]</div>;
};

export default TopicsPage;
