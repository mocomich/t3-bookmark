import { useRouter } from "next/router";
import { useCallback } from "react";

export const useNavigation = () => {
  const router = useRouter();

  const navigate = useCallback(
    // TODO:pathのtypeを定数から作る
    (path: string) => {
      router.push(path);
    },
    [router]
  );

  return { navigate };
};
