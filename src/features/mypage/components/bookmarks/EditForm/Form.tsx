import { Button } from "@/components/util-elements/Button";
import { TypoGraphy } from "@/components/util-elements/TypoGraphy";
import { createBookmarkSchema } from "@/features/mypage/schema";
import { FormDataType } from "@/features/mypage/types";
import { BOX_SHADOW, COLORS } from "@/styles/config/utils";
import { sp } from "@/styles/mixin";
import { trpc } from "@/utils/trpc";
import { css } from "@emotion/react";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useRouter } from "next/router";
import { memo } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { FormContent } from "./FormContent";
import { TextInput } from "./TextInput";
import { CategorySelect } from "./category/CategorySelect";
import { ToggleSwitch } from "./isRead/ToogleSwitch";
import { MemoForm } from "./memo/MemoForm";
import { Comprehension } from "./understanding/Comprehension";
import { RangeInput } from "./understanding/RangeInput";

export const Form: React.FC = memo(() => {
  // ビジネスロジックをcustomHooksに切り出す
  // const router = useRouter();

  const { data: options } = trpc.category.getAllCategories.useQuery();

  const defaultValues: FormDataType = {
    url: "",
    title: "",
    comprehension: "1",
    categories: [],
    isRead: false,
    memo: "",
  };

  const methods = useForm<FormDataType>({
    defaultValues,
    resolver: zodResolver(createBookmarkSchema),
  });

  // TODO:API
  const onSubmit = (data: FormDataType) => {
    console.log(data);
    console.log("送信成功");
    // const submitData = {
    //   ...data,
    // };
    // if (!data.isRead && data.comprehension - 1 >= 1) {
    //   alert("未読の記事は理解度を0以外に設定出来ません");
    //   return;
    // }
    // // createBookmarkMutate.mutate(submitData);
    // router.push("/mypage/bookmarks");
  };

  const selectOptions = options?.map((option) => ({
    value: option.id,
    label: option.name,
  }));

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} css={styles.container}>
        <FormContent
          title={methods.watch("isRead") ? "Read" : "UnRead"}
          errorMessage={methods.formState.errors["isRead"]?.message}
        >
          <ToggleSwitch
            name={"isRead"}
            register={methods.register("isRead")}
            isRead={methods.getValues("isRead")}
          />
        </FormContent>
        <FormContent
          title={"Understanding"}
          errorMessage={methods.formState.errors["comprehension"]?.message}
        >
          <div css={styles.comprehension}>
            <Comprehension />
            <RangeInput
              register={methods.register("comprehension")}
              min={1}
              max={5}
              step={1}
            />
          </div>
        </FormContent>
        <FormContent
          title={"URL"}
          errorMessage={methods.formState.errors["url"]?.message}
        >
          <TextInput
            placeholder='https://hoge.com'
            register={methods.register("url")}
          />
        </FormContent>
        <FormContent
          title={"Title"}
          errorMessage={methods.formState.errors["title"]?.message}
        >
          <TextInput
            placeholder='TypeScriptの初心者向け記事'
            register={methods.register("title")}
          />
        </FormContent>
        <FormContent
          title={"Categories"}
          errorMessage={methods.formState.errors["categories"]?.message}
        >
          <CategorySelect formName='categories' options={selectOptions} />
        </FormContent>
        <MemoForm
          memo={methods.watch("memo")}
          register={methods.register("memo")}
        />
        <Button size='large'>
          <TypoGraphy variant='large'>登録する</TypoGraphy>
        </Button>
      </form>
    </FormProvider>
  );
});

const styles = {
  container: css({
    width: "70%",
    margin: "0 auto",
    height: "100%",
    padding: "40px",
    borderRadius: "6px",
    background: COLORS.white,
    boxShadow: BOX_SHADOW.md,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "28px",
    [sp]: {
      width: "95%",
      padding: "20px",
    },
  }),
  comprehension: {
    width: "40%",
    minWidth: "370px",
    display: "grid",
    gap: "20px",
  },
};
