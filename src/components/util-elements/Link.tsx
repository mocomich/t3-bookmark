import NextLink from "next/link";
import { memo } from "react";

type Props = {
  href: string;
  children: React.ReactNode;
};
export const Link: React.FC<Props> = memo(({ href, children }) => {
  return <NextLink href={href}>{children}</NextLink>;
});
