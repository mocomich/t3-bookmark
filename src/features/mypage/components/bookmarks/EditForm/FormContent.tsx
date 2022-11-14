import { TypoGraphy } from "@/components/util-elements/TypoGraphy";
import { css } from "@emotion/react";
import React, { memo } from "react";

import { ErrorMessage } from "./ErrorMessage";

type Props = {
  title: string;
  children: React.ReactNode;
  errorMessage?: string;
};

export const FormContent: React.FC<Props> = memo(
  ({ title, children, errorMessage }) => {
    return (
      <div css={styles.container}>
        <TypoGraphy variant='large'>{title}</TypoGraphy>
        {children}
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </div>
    );
  }
);

const styles = {
  container: css({
    display: "grid",
    gap: "20px",
  }),
};
