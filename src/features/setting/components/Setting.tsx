import { TypoGraphy } from "@/components/util-elements/TypoGraphy";
import { BOX_SHADOW, COLORS } from "@/styles/config/utils";
import { sp } from "@/styles/mixin";
import { trpc } from "@/utils/trpc";
import { css } from "@emotion/react";

import { CreateTagForm } from "./tag/CreateTagForm";
import { TagLabel } from "./tag/TagLabel";

export const Setting = () => {
  const { data: tags } = trpc.tag.getAllTags.useQuery();

  return (
    <div css={styles.container}>
      <TypoGraphy variant='h3' isResponsive>
        カスタムタグを追加
      </TypoGraphy>
      <CreateTagForm />
      <div css={styles.tags}>
        {tags?.map((tag) => (
          <TagLabel key={tag.id} id={tag.id} name={tag.name} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: css({
    width: "80%",
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
  tags: css({
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
  }),
  link: css({
    color: COLORS.gray,
    fontWeight: "bold",
    cursor: "pointer",
  }),
};
