import { Space } from "@/components/util-elements/Space";
import { Form } from "@/features/mypage/components/bookmarks/EditForm/Form";
import { NextPage } from "next";

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
