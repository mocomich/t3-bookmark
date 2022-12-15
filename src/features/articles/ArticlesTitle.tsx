import { TypoGraphy } from "@/components/util-elements/TypoGraphy";
import { UtilLink } from "@/components/util-elements/UtilLink";
import { css } from "@emotion/react";
import { BiLink } from "react-icons/bi";

type Props = {
  path: string;
  children: React.ReactNode;
};

export const ArticlesTitle: React.FC<Props> = ({ path, children }) => {
  return (
    <TypoGraphy variant='h2' isResponsive>
      <UtilLink href={path} style={styles.title}>
        {children}
        <BiLink size={24} />
      </UtilLink>
    </TypoGraphy>
  );
};

const styles = {
  title: css({
    display: "flex",
    gap: "8px",
    alignItems: "center",
    ":hover": {
      opacity: 0.7,
      transition: "opacity .3s ease",
    },
  }),
};
