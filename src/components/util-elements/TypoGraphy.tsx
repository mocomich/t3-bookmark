import { SerializedStyles, css } from "@emotion/react";
import { memo } from "react";

type Map = {
  key: string;
  class: SerializedStyles;
};

type Props = {
  variant: "h1" | "h2" | "h3" | "h4" | "large" | "medium" | "small";
  children: React.ReactNode;
};

export const TypoGraphy: React.FC<Props> = memo(({ variant, children }) => {
  const variantSetting: Map[] = [
    { key: "h1", class: css({ fontSize: "32px", fontWeight: "bold" }) },
    { key: "h2", class: css({ fontSize: "28px", fontWeight: "bold" }) },
    { key: "h3", class: css({ fontSize: "20px", fontWeight: "bold" }) },
    { key: "h4", class: css({ fontSize: "18px", fontWeight: "bold" }) },
    { key: "large", class: css({ fontSize: "20px" }) },
    { key: "medium", class: css({ fontSize: "16px" }) },
    { key: "small", class: css({ fontSize: "12px" }) },
  ];

  const variantStyle = variantSetting.find(
    (setting) => setting.key === variant
  )?.class;

  return (
    <>
      {variant === "h1" ? (
        <h1 css={variantStyle}>{children}</h1>
      ) : variant === "h2" ? (
        <h2 css={variantStyle}>{children}</h2>
      ) : variant === "h3" ? (
        <h3 css={variantStyle}>{children}</h3>
      ) : variant === "h4" ? (
        <h4 css={variantStyle}>{children}</h4>
      ) : (
        <div css={variantStyle}>{children}</div>
      )}
    </>
  );
});
