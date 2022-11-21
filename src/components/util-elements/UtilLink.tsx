import { SerializedStyles } from "@emotion/react";
import { memo } from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  style?: SerializedStyles;
};

export const UtilLink: React.FC<Props> = memo(
  ({ href, children, style = {} }) => {
    return (
      <a css={style} href={href} target='_blank' rel='noopener noreferrer'>
        {children}
      </a>
    );
  }
);
