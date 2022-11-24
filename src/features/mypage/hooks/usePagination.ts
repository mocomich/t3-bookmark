import { NextRouter, useRouter } from "next/router";
import React, { useState } from "react";

import { DEFAULT_LIMIT } from "../const";
import { LinkPathsType } from "../types";

export const usePagination = (path: LinkPathsType, count?: number) => {
  const router = useRouter();

  const initialPage = router.query.page ? Number(router.query.page) : 1;
  const [page, setPage] = useState(initialPage);

  const handlePaginationChange = (
    e: React.FormEvent<HTMLButtonElement>,
    page: number,
    value: "PREV" | "NEXT"
  ) => {
    _updatePage(value);

    const currentPage = value === "PREV" ? page - 1 : page + 1;
    _transitionPath(path, currentPage, router);
    window.scrollTo(0, 0);
  };

  function _updatePage(value: "PREV" | "NEXT") {
    setPage((prev) => {
      if (value === "PREV") {
        return prev - 1;
      }
      return prev + 1;
    });
  }

  function _transitionPath(
    path: LinkPathsType,
    currentPage: number,
    router: NextRouter
  ) {
    router.push(`${path}/?page=${currentPage}`, undefined, {
      shallow: true,
    });
  }

  const isDisplayButton = (page: number) => {
    const isDisplay = {
      prev: false,
      next: false,
    };
    const BookmarksCount = count ?? 0;

    if (_isDisplayPrevButton(page)) {
      isDisplay.prev = true;
    }
    if (_isDisplayNextButton(page, BookmarksCount, DEFAULT_LIMIT)) {
      isDisplay.next = true;
    }

    return isDisplay;
  };

  function _isDisplayPrevButton(page: number) {
    if (page === 1) {
      return false;
    }
    return true;
  }

  function _isDisplayNextButton(page: number, count: number, limit: number) {
    const offset = count / (limit * page);

    if (offset <= 1) {
      return false;
    }
    return true;
  }

  return { page, handlePaginationChange, isDisplayButton };
};
