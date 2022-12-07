import { format } from "date-fns";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { ja } from "date-fns/locale";

export const isInPath = <T>(path: T, currentPath: string): boolean => {
  return path === currentPath;
};

export const getDateMMdd = (targetDate: Date) => {
  return format(targetDate, "MM月dd日");
};

export const getDateFromNow = (targetDate: Date) => {
  return formatDistanceToNow(targetDate, { addSuffix: true, locale: ja });
};

export const getQuery = (query: string | string[] | undefined) => {
  if (query === undefined) {
    return "";
  }
  if (typeof query !== "string") {
    throw new TypeError("正しい値を送信して下さい");
  }
  return query;
};
