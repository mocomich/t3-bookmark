import { TypoGraphy } from "@/components/util-elements/TypoGraphy";
import { COLORS } from "@/styles/config/utils";
import { css } from "@emotion/react";

type Props = {
  title: string;
};
export const TopicTitle: React.FC<Props> = ({ title }) => {
  return (
    <div css={styles.container}>
      <TypoGraphy variant='h2'>{title}</TypoGraphy>
    </div>
  );
};

const styles = {
  container: css({
    height: "100px",
    borderBottom: `2px solid ${COLORS.lightGray}`,
    background: COLORS.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
};
