import { env } from "@/env/client.mjs";
import { QiitaArticleType } from "@/features/qiita/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useQueryQiitaArticles = () => {
  const url = `${env.NEXT_PUBLIC_ENDPOINT}/api/qiita/getArticles`;

  const getArticles = async () => {
    const { data } = await axios.get<QiitaArticleType[]>(url);
    if (!data) throw new Error();

    return data;
  };

  return useQuery<QiitaArticleType[], Error>({
    queryKey: ["qiita"],
    queryFn: getArticles,
    suspense: true,
  });
};
