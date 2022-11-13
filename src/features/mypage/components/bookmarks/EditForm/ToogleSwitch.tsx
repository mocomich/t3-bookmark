import { COLORS } from "@/styles/config/utils";
import { css } from "@emotion/react";
import { memo } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  name: string;
  register: UseFormRegisterReturn;
  isRead: boolean;
};

export const ToggleSwitch: React.FC<Props> = memo(
  ({ name, register, isRead }) => {
    return (
      <div css={styles.root}>
        <input css={styles.switch} id={name} type='checkbox' {...register} />
        <label css={styles.label(isRead)} htmlFor={name} />
      </div>
    );
  }
);

const styles = {
  root: css({
    position: "relative",
  }),
  label: (isRead: boolean) =>
    css({
      position: "absolute",
      top: 0,
      left: 0,
      width: "52px",
      height: "28px",
      borderRadius: "1000px",
      cursor: "pointer",
      background: isRead ? COLORS.green : COLORS.lightGray,
      "&::after": {
        content: "''",
        display: "block",
        borderRadius: "50%",
        width: "19px",
        aspectRatio: "1/1",
        background: COLORS.white,
        transition: "0.2s",
        marginLeft: isRead ? "29px" : "4px",
        marginTop: "4px",
      },
    }),
  switch: css({
    opacity: 0,
    zIndex: 1,
    borderRadius: "15px",
    width: "52px",
    height: "28px",
  }),
};
