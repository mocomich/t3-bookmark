import axios from "axios";
import { formatISO } from "date-fns";
import type { NextApiRequest, NextApiResponse } from "next";

const getArticles = async (req: NextApiRequest, res: NextApiResponse) => {
  const QIITA_URL = process.env.QIITA_API_ENDPOINT;
  const QIITA_API_KEY = process.env.QIITA_API_TOKEN;

  const nowDate = new Date();
  const limitDate = formatISO(nowDate.setDate(nowDate.getDate() - 10), {
    representation: "date",
  });

  const response = await axios
    .get(
      `${QIITA_URL}items?page=1&per_page=20&query=created%3A%3E${limitDate}+stocks%3A%3E20`,
      {
        headers: {
          Authorization: `Bearer ${QIITA_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => res.data);

  if (response.message) {
    console.error(response.message);
    return res.status(500).json("Failed to fetch API");
  }
  return res.status(200).json(response);
};

export default getArticles;
