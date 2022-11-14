import { Space } from "@/components/util-elements/Space";
import { Articles } from "@/features/articles/Articles";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <section>
      <Articles />
      <Space axis='VERTICAL' size={40} />
    </section>
  );
};

export default Home;
