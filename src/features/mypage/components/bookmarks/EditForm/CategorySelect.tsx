import { FormDataType } from "@/features/mypage/types";
import { BOX_SHADOW, COLORS } from "@/styles/config/utils";
import { memo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import ReactSelect, {
  CSSObjectWithLabel,
  SingleValueProps,
} from "react-select";

type Props = {
  formName: keyof FormDataType;
};

//TODO:APIから取得する・propsで渡す
const options = [
  { value: 1, label: "フロントエンド" },
  { value: 2, label: "バックエンド" },
];

export const CategorySelect: React.FC<Props> = memo(({ formName }) => {
  const customStyles = {
    option: (base: CSSObjectWithLabel) => ({
      ...base,
      cursor: "pointer",
    }),
    control: () => ({
      border: "none",
      backgroundColor: "white",
      width: "100%",
      display: "flex",
      padding: "12px 4px",
      borderRadius: "6px",
      boxShadow: BOX_SHADOW.lg,
    }),
    singleValue: (base: CSSObjectWithLabel, state: SingleValueProps) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";
      return { ...base, opacity, transition };
    },
    multiValue: (base: CSSObjectWithLabel) => {
      return {
        ...base,
        backgroundColor: COLORS.green,
        padding: "2px",
        borderRadius: "6px",
      };
    },
    multiValueLabel: (base: CSSObjectWithLabel) => ({
      ...base,
      color: "white",
      fontWeight: "bold",
    }),
    multiValueRemove: (base: CSSObjectWithLabel) => ({
      ...base,
      color: "white",
      ":hover": {
        color: "black",
      },
    }),
  };

  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={formName}
      render={({ field: { onChange, name, value, onBlur } }) => (
        <ReactSelect
          id='select'
          instanceId='select'
          options={options}
          styles={customStyles}
          placeholder='複数選択できます'
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          value={value}
          isMulti
        />
      )}
    />
  );
});
