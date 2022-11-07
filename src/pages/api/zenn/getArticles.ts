import axios from "axios";
import cheerio from "cheerio";
import type { NextApiRequest, NextApiResponse } from "next";

const url = "https://zenn.dev/";

const getTechArticles = (html: string) => {
  const $ = cheerio.load(html);
  const raw = $("script[id=__NEXT_DATA__]").html() ?? "";
  if (raw === undefined) return {};
  const rawData = JSON.parse(raw).props.pageProps.dailyTechArticles;

  return rawData;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  await axios.get(url).then(({ data }) => {
    res.status(200).json(getTechArticles(data));
  });
}
