import { RequiredMark } from "@/components/util-elements/RequiredMark";
import { TypoGraphy } from "@/components/util-elements/TypoGraphy";
import { css } from "@emotion/react";
import React, { memo } from "react";

import { ErrorMessage } from "./ErrorMessage";

type Props = {
  title: string;
  children: React.ReactNode;
  errorMessage?: string;
  isRequired?: boolean;
};

export const FormContent: React.FC<Props> = memo(
  ({ title, children, errorMessage, isRequired = false }) => {
    return (
      <div css={styles.container}>
        <TypoGraphy variant='large'>
          {title}
          {isRequired && <RequiredMark />}
        </TypoGraphy>
        <div css={styles.content}>{children}</div>
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </div>
    );
  }
);

const styles = {
  container: css({
    width: "100%",
    margin: "0 auto",
    display: "grid",
    gap: "20px",
  }),
  content: css({
    width: "100%",
    margin: "0 auto",
  }),
};
