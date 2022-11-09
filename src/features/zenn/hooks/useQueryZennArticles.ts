import { env } from "@/env/client.mjs";
import { ZennArticle } from "@/features/zenn/types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useQueryZennArticles = () => {
  const getArticles = async () => {
    const url = `${env.NEXT_PUBLIC_ENDPOINT}/api/zenn/getArticles`;

    const { data } = await axios.get<ZennArticle[]>(url);
    if (!data) throw new Error();

    return data;
  };

  return useQuery<ZennArticle[], Error>({
    queryKey: ["zenn"],
    queryFn: getArticles,
    refetchOnWindowFocus: true,
    staleTime: 0,
    suspense: true,
  });
};