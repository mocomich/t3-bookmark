import { env } from "@/env/client.mjs";
import { ZennArticleType } from "@/features/articles/zenn/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useQueryZennArticles = () => {
  const getArticles = async () => {
    const url = `${env.NEXT_PUBLIC_ENDPOINT}/api/zenn/getArticles`;

    const { data } = await axios.get<ZennArticleType[]>(url);
    if (!data) throw new Error();

    return data;
  };

  return useQuery<ZennArticleType[], Error>({
    queryKey: ["zenn"],
    queryFn: getArticles,
    suspense: true,
  });
};
