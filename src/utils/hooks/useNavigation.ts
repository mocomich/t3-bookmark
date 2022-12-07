import { useRouter } from "next/router";
import { useCallback } from "react";

import { PATH_LIST } from "../const";

type PathType = typeof PATH_LIST[keyof typeof PATH_LIST];

export const useNavigation = () => {
  const router = useRouter();

  const navigate = useCallback(
    (path: PathType) => {
      router.push(path);
    },
    [router]
  );

  return { navigate };
};
