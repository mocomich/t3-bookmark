import { isInPath } from "@/utils/libs";
import { useRouter } from "next/router";

export const useLinks = <T,>(path: T) => {
  const router = useRouter();
  const currentPath = router.pathname;
  const isSamePath = isInPath<T>(path, currentPath);

  const onClickTransitionPage = (path: T) => {
    if (typeof path !== "string") return;
    if (isSamePath) return;
    router.push(path);
  };

  return { isSamePath, onClickTransitionPage };
};
