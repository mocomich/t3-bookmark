import { NextPage } from "next";
import { useRouter } from "next/router";

const ArticleMemoPage: NextPage = () => {
  const query = useRouter().query;

  return <div>{query.id}</div>;
};

export default ArticleMemoPage;
