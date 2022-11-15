import { Space } from "@/components/util-elements/Space";
import { TypoGraphy } from "@/components/util-elements/TypoGraphy";
import { Modal } from "@/components/util-parts/Modal";
import { COLORS } from "@/styles/config/utils";
import { css } from "@emotion/react";
import { memo } from "react";

import { HeaderMenu } from "./HeaderMenu";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const LoginModal: React.FC<Props> = memo(({ open, setOpen }) => {
  return (
    <Modal open={open} setOpen={setOpen}>
      <TypoGraphy variant='h2'>Login</TypoGraphy>
      <Space size={10} axis='VERTICAL' />
      <div css={styles.line} />
      <Space size={30} axis='VERTICAL' />
      <HeaderMenu />
    </Modal>
  );
});

const styles = {
  line: css({
    height: "2px",
    width: "100%",
    background: COLORS.lightGray,
  }),
};
