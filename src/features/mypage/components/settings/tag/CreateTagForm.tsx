import { Button } from "@/components/util-elements/Button";
import { TypoGraphy } from "@/components/util-elements/TypoGraphy";
import { useMutateTag } from "@/features/mypage/hooks/useMutateTag";
import { createTagSchema } from "@/features/mypage/schema";
import { CreateTagType } from "@/features/mypage/types";
import { BOX_SHADOW } from "@/styles/config/utils";
import { css } from "@emotion/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const CreateTagForm = () => {
  const { createTagMutation } = useMutateTag();

  const defaultValues: CreateTagType = {
    name: "",
  };

  const methods = useForm<CreateTagType>({
    defaultValues,
    resolver: zodResolver(createTagSchema),
  });

  const onSubmit = (input: CreateTagType) => {
    createTagMutation.mutate(input);
  };
  return (
    <form onSubmit={methods.handleSubmit(onSubmit)} css={styles.container}>
      <input
        css={styles.input}
        type='text'
        placeholder='8文字以内'
        {...methods.register("name")}
      />
      <Button size='small'>
        <TypoGraphy variant='large'>Add</TypoGraphy>
      </Button>
    </form>
  );
};

const styles = {
  container: css({
    display: "grid",
    gridTemplateColumns: "auto 100px",
    gap: "12px",
  }),
  input: css({
    width: "100%",
    boxShadow: BOX_SHADOW.lg,
    borderRadius: "6px",
    outline: "none",
    padding: "12px 12px",
  }),
};
