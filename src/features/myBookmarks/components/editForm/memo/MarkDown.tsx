import { BOX_SHADOW } from "@/styles/config/utils";
import { css } from "@emotion/react";
import ReactMarkdown from "react-markdown";

import { CodeBlock } from "./CodeBlock";

type Props = {
  markdown: string;
};

export const Markdown: React.FC<Props> = ({ markdown }) => {
  const components = {
    code: CodeBlock,
  };

  return (
    <ReactMarkdown
      css={styles.container}
      className='prose'
      components={components}
    >
      {markdown}
    </ReactMarkdown>
  );
};

const styles = {
  container: css({
    width: "100%",
    minHeight: "300px",
    boxShadow: BOX_SHADOW.lg,
    borderRadius: "6px",
    padding: "16px 12px",
    outline: "none",
    maxWidth: "100%",
    wordBreak: "break-word",
  }),
};
