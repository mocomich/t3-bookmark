import { TypoGraphy } from "@/components/util-elements/TypoGraphy";
import { COLORS } from "@/styles/config/utils";
import { css } from "@emotion/react";

type Props = {
  searchQuery: string;
};
export const NoDataMessage: React.FC<Props> = ({ searchQuery }) => {
  return (
    <div css={styles.container}>
      <TypoGraphy variant='medium'>
        「{searchQuery}」の検索結果が見つかりませんでした
      </TypoGraphy>
    </div>
  );
};

const styles = {
  container: css({
    height: "40px",
    textAlign: "center",
    fontWeight: "bold",
    display: "grid",
    placeItems: "center",
    color: COLORS.gray,
  }),
};
