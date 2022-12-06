import { Button } from "@/components/util-elements/Button";
import { Space } from "@/components/util-elements/Space";
import { TypoGraphy } from "@/components/util-elements/TypoGraphy";
import { TagLink } from "@/components/util-parts/TagLink";
import { createBookmarkSchema } from "@/schema";
import { BOX_SHADOW, COLORS } from "@/styles/config/utils";
import { sp } from "@/styles/mixin";
import { FormDataType } from "@/types";
import { PATH_LIST } from "@/utils/const";
import { css } from "@emotion/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Bookmark, Category, Tag } from "@prisma/client";
import { useRouter } from "next/router";
import { memo } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { useMutateBookmark } from "../../hooks/useMutateBookmark";
import { FormContent } from "./FormContent";
import { TextInput } from "./TextInput";
import { CategorySelect } from "./category/CategorySelect";
import { ToggleSwitch } from "./isRead/ToogleSwitch";
import { MemoForm } from "./memo/MemoForm";
import { TagSelect } from "./tag/TagSelect";
import { Comprehension } from "./understanding/Comprehension";
import { RangeInput } from "./understanding/RangeInput";

type Props = {
  bookmark?: Bookmark & { categories: Category[] } & { tags: Tag[] };
};

export const Form: React.FC<Props> = memo(({ bookmark }) => {
  const { url, title, comprehension, categories, tags, isRead, memo } = {
    ...bookmark,
  };
  // ビジネスロジックをcustomHooksに切り出す
  const router = useRouter();

  const { createBookmarkMutation, updateBookmarkMutation } =
    useMutateBookmark();

  const defaultValues: FormDataType = {
    url: url ? url : "",
    title: title ? title : "",
    comprehension: comprehension ? comprehension : 0,
    categories: categories ? _convert(categories) : [],
    tags: tags ? _convert(tags) : [],
    isRead: isRead ? true : false,
    memo: memo ? memo : "",
  };

  const methods = useForm<FormDataType>({
    defaultValues,
    resolver: zodResolver(createBookmarkSchema),
  });

  const onSubmit = (formData: FormDataType) => {
    const id = bookmark ? bookmark.id : null;
    const { isRead, comprehension } = formData;
    if (!_validateComprehension(isRead, comprehension)) {
      return;
    }

    if (id) {
      updateBookmarkMutation.mutate({ id, ...formData });
    } else {
      createBookmarkMutation.mutate(formData);
    }

    router.push(PATH_LIST["allBookmarks"]);
  };

  function _validateComprehension(isRead: boolean, comprehension: number) {
    if (comprehension !== 0 && !isRead) {
      alert("未読の記事は理解度を0%以外に設定出来ません");
      return false;
    }
    return true;
  }

  function _convert<T extends { id: string; name: string }>(array: T[]) {
    if (!array) {
      return [];
    }
    return array.map((category) => ({
      label: category.name,
      value: category.id,
    }));
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} css={styles.container}>
        <FormContent
          title={methods.watch("isRead") ? "Read" : "UnRead"}
          errorMessage={methods.formState.errors["isRead"]?.message}
          isRequired
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
          isRequired
        >
          <div css={styles.comprehension}>
            <Comprehension />
            <RangeInput
              register={methods.register("comprehension", {
                valueAsNumber: true,
              })}
              min={1}
              max={5}
              step={1}
            />
          </div>
        </FormContent>
        <FormContent
          title={"URL"}
          errorMessage={methods.formState.errors["url"]?.message}
          isRequired
        >
          <TextInput
            placeholder='https://hoge.com'
            register={methods.register("url")}
          />
        </FormContent>
        <FormContent
          title={"Title"}
          errorMessage={methods.formState.errors["title"]?.message}
          isRequired
        >
          <TextInput
            placeholder='TypeScriptの初心者向け記事'
            register={methods.register("title")}
          />
        </FormContent>
        <FormContent
          title={"Categories"}
          errorMessage={methods.formState.errors["categories"]?.message}
          isRequired
        >
          <CategorySelect formName='categories' />
        </FormContent>
        <FormContent
          title={"Custom Tags"}
          errorMessage={methods.formState.errors["tags"]?.message}
        >
          <TagSelect formName='tags' />
        </FormContent>
        <TagLink />
        <Space axis='VERTICAL' size={20} />
        <MemoForm
          memo={methods.watch("memo")}
          register={methods.register("memo")}
        />
        <Button size='large'>
          <TypoGraphy variant='large'>
            {bookmark ? "Update" : "Register"}
          </TypoGraphy>
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
