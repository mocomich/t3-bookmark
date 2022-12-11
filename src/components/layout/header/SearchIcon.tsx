import { css } from "@emotion/react";
import { GrSearch } from "react-icons/gr";

type Props = {
  onClick: () => void;
};

export const SearchIcon: React.FC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <GrSearch css={styles.icon} size={28} />
    </button>
  );
};

const styles = {
  icon: css({
    cursor: "pointer",
    padding: "2px",
  }),
};
