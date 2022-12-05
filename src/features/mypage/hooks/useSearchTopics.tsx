import { trpc } from "@/utils/trpc";
import { Category, Tag } from "@prisma/client";
import { useMemo } from "react";

export const useSearchTopics = (keyword: string) => {
  const { data: categories } = trpc.category.getAllCategories.useQuery();
  const { data: tags } = trpc.tag.getAllTags.useQuery();

  const filteredCategories = useMemo(
    () => _filter<Category>(keyword, categories),
    [categories, keyword]
  );

  const filteredTags = useMemo(
    () => _filter<Tag>(keyword, tags),
    [tags, keyword]
  );

  function _filter<T extends { id: string; name: string }>(
    keyword: string,
    items: T[] | undefined
  ) {
    if (items === undefined) return;
    return items.filter((item) => item.name.includes(keyword));
  }

  return { filteredCategories, filteredTags };
};
