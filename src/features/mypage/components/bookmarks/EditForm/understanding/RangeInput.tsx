import { COLORS } from "@/styles/config/utils";
import { css } from "@emotion/react";
import { memo } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

type Props = {
  register: UseFormRegisterReturn;
  min: number;
  max: number;
  step: number;
  value?: number;
};

export const RangeInput: React.FC<Props> = memo(
  ({ register, min, max, step, value }) => {
    return (
      <input
        type='range'
        {...register}
        defaultValue={value}
        min={min}
        max={max}
        step={step}
        css={styles.input}
      />
    );
  }
);

const styles = {
  input: css({
    width: "100%",
    cursor: "pointer",
    appearance: "none",
    height: "4px",
    background: COLORS.lightGray,
    "::-webkit-slider-thumb": {
      WebkitAppearance: "none",
      background: COLORS.green,
      width: "20px",
      aspectRatio: "1/1",
      borderRadius: "1000px",
    },
  }),
};
