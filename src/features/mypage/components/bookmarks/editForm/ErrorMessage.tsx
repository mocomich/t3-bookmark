import { TypoGraphy } from "@/components/util-elements/TypoGraphy";
import { memo } from "react";

type Props = {
  children: React.ReactNode;
};

export const ErrorMessage: React.FC<Props> = memo(({ children }) => {
  return <TypoGraphy variant='error'>{children}</TypoGraphy>;
});
