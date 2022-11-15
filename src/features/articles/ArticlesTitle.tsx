import { TypoGraphy } from "@/components/util-elements/TypoGraphy";

type Props = {
  path: string;
  children: React.ReactNode;
};

export const ArticlesTitle: React.FC<Props> = ({ path, children }) => {
  return (
    <TypoGraphy variant='h2' isResponsive>
      <a href={path} target='_blank' rel='noopener noreferrer'>
        {children}
      </a>
    </TypoGraphy>
  );
};
