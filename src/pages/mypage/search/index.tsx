import { Space } from "@/components/util-elements/Space";
import { Search } from "@/features/mypage/components/seatch/Search";
import { NextPage } from "next";

const SearchPage: NextPage = () => {
  return (
    <section>
      <Space axis='VERTICAL' size={40} />
      <Search />
      <Space axis='VERTICAL' size={40} />
    </section>
  );
};

export default SearchPage;