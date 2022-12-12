import { KeywordSearchType } from "@/types";
import { PATH_LIST } from "@/utils/const";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";

export const useSearchBookmark = () => {
  const router = useRouter();

  const defaultValues: KeywordSearchType = {
    keyword: "",
  };

  const { register, reset, watch } = useForm<KeywordSearchType>({
    defaultValues,
  });

  const keyword = watch("keyword");

  const isEmptyQuery = useMemo(
    () => Boolean(Object.keys(router.query).length),
    [router.query]
  );

  const onSubmitHandler = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      router.push({ pathname: `${PATH_LIST["search"]}/`, query: { keyword } });
    },
    [router, keyword]
  );

  useEffect(() => {
    // ブラウザバッグでかつ、クエリが無い時にinputを空にする
    const isEmpty = Boolean(_getKeyword(router.query.keyword));
    if (!isEmpty) {
      reset();
    }
  }, [router.query, reset]);

  function _getKeyword(keyword: string | string[] | undefined) {
    if (keyword === undefined) {
      return "";
    }
    if (typeof keyword !== "string") {
      throw new TypeError("正しい値を送信して下さい");
    }
    return keyword;
  }

  return {
    keyword,
    isEmptyQuery,
    onSubmitHandler,
    register,
  };
};
