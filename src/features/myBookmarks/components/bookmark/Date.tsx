import { TypoGraphy } from "@/components/util-elements/TypoGraphy";
import { getDateMMdd } from "@/utils/libs";
import { css } from "@emotion/react";
import { memo } from "react";

type Props = {
  updatedAt: Date;
};
export const Date: React.FC<Props> = memo(({ updatedAt }) => {
  return (
    <div css={styles.date}>
      <TypoGraphy variant='small'>{getDateMMdd(updatedAt)}</TypoGraphy>
    </div>
  );
});

const styles = {
  date: css({
    justifySelf: "flex-end",
    alignSelf: "flex-end",
  }),
};
