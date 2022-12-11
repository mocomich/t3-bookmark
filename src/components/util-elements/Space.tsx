import { sp } from "@/styles/mixin";

type Props = {
  size: number;
  axis: "VERTICAL" | "HORIZONTAL";
  isResponsive?: boolean;
};
export const Space: React.FC<Props> = ({ size, axis, isResponsive }) => {
  const width = axis === "VERTICAL" ? 1 : size;
  const height = axis === "HORIZONTAL" ? 1 : size;
  return (
    <span
      css={{
        display: "block",
        width,
        minWidth: width,
        height,
        minHeight: height,
        [sp]: {
          width: isResponsive ? width / 2 : width,
          minWidth: isResponsive ? width / 2 : width,
          height: isResponsive ? height / 2 : height,
          minHeight: isResponsive ? height / 2 : height,
        },
      }}
    />
  );
};
