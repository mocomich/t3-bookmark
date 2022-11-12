import { TypoGraphy } from "@/components/util-elements/TypoGraphy";

type Props = {
  children: React.ReactNode;
};

export const ErrorMessage: React.FC<Props> = ({ children }) => {
  return <TypoGraphy variant='error'>{children}</TypoGraphy>;
};
