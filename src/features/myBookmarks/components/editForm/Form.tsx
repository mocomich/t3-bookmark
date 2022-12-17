import { Button } from "@/components/util-elements/Button";
import { Space } from "@/components/util-elements/Space";
import { TypoGraphy } from "@/components/util-elements/TypoGraphy";
import { TagLink } from "@/components/util-parts/TagLink";
import { BOX_SHADOW, COLORS } from "@/styles/config/utils";
import { sp } from "@/styles/mixin";
import { css } from "@emotion/react";
import { Bookmark, Category, Tag } from "@prisma/client";
import { memo } from "react";
import { FormProvider } from "react-hook-form";

import { useEditForm } from "../../hooks/useEditForm";
import { DeleteButton } from "./DeleteButton";
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
  const { id, methods, onSubmit, onClickHandler } = useEditForm({ bookmark });
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} css={styles.container}>
        {id && <DeleteButton onClick={onClickHandler} />}
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
    position: "relative",
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
  delete: css({
    position: "absolute",
    right: 10,
    top: 10,
  }),
};
