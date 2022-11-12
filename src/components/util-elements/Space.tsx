type Props = {
  size: number;
  axis: "VERTICAL" | "HORIZONTAL";
};
export const Space: React.FC<Props> = ({ size, axis }) => {
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
      }}
    />
  );
};
