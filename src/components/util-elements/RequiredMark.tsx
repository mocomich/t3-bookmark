import { COLORS } from "@/styles/config/utils";
import { css } from "@emotion/react";

export const RequiredMark = () => {
  return <span css={styles.required}>*</span>;
};

const styles = {
  required: css({
    color: COLORS.red,
    marginLeft: "2px",
  }),
};
