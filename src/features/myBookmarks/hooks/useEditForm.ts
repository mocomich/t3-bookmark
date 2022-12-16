import { createBookmarkSchema } from "@/schema";
import { FormDataType } from "@/types";
import { PATH_LIST } from "@/utils/const";
import { zodResolver } from "@hookform/resolvers/zod";
import { Bookmark, Category, Tag } from "@prisma/client";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { useForm } from "react-hook-form";

import { useMutateBookmark } from "./useMutateBookmark";

type Props = {
  bookmark?: Bookmark & { categories: Category[] } & { tags: Tag[] };
};

export const useEditForm = ({ bookmark }: Props) => {
  const { id, url, title, comprehension, categories, tags, isRead, memo } = {
    ...bookmark,
  };

  const {
    createBookmarkMutation,
    updateBookmarkMutation,
    deleteBookmarkMutation,
  } = useMutateBookmark();
  const router = useRouter();

  const defaultValues: FormDataType = {
    url: url ? url : "",
    title: title ? title : "",
    comprehension: comprehension ? comprehension : 0,
    categories: categories ? _convert(categories) : [],
    tags: tags ? _convert(tags) : [],
    isRead: isRead ? true : false,
    memo: memo ? memo : "",
  };

  const methods = useForm<FormDataType>({
    defaultValues,
    resolver: zodResolver(createBookmarkSchema),
  });

  const onSubmit = useCallback(
    (formData: FormDataType) => {
      const id = bookmark ? bookmark.id : null;
      const { isRead, comprehension } = formData;
      if (!_validateComprehension(isRead, comprehension)) {
        return;
      }

      if (id) {
        updateBookmarkMutation.mutate({ id, ...formData });
      } else {
        createBookmarkMutation.mutate(formData);
      }

      router.push(PATH_LIST["allBookmarks"]);
    },
    [bookmark, router, createBookmarkMutation, updateBookmarkMutation]
  );

  const onClickHandler = useCallback(() => {
    if (typeof id === "undefined") {
      return;
    }
    const isConfirm = window.confirm("本当に削除しても宜しいですか？");
    if (!isConfirm) return;

    deleteBookmarkMutation.mutate({ id });

    router.push(PATH_LIST["allBookmarks"]);
  }, [router, deleteBookmarkMutation, id]);

  function _validateComprehension(isRead: boolean, comprehension: number) {
    if (comprehension !== 0 && !isRead) {
      alert("未読の記事は理解度を0%以外に設定出来ません");
      return false;
    }
    return true;
  }

  function _convert<T extends { id: string; name: string }>(array: T[]) {
    if (!array) {
      return [];
    }
    return array.map((category) => ({
      label: category.name,
      value: category.id,
    }));
  }

  return { id, methods, onSubmit, onClickHandler };
};
