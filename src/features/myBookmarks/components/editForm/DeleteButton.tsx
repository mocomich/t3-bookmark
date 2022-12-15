import { Button } from "@/components/util-elements/Button";
import { css } from "@emotion/react";
import { MdDeleteForever } from "react-icons/md";

type Props = {
  onClick: () => void;
};

export const DeleteButton: React.FC<Props> = ({ onClick }) => {
  return (
    <div className='w-24' css={styles.delete}>
      <Button size='medium' color='red' type='button' onClick={onClick}>
        <MdDeleteForever />
      </Button>
    </div>
  );
};

const styles = {
  delete: css({
    position: "absolute",
    right: 10,
    top: 10,
  }),
};
