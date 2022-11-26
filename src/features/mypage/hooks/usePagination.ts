import { NextRouter, useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

import { DEFAULT_LIMIT } from "../const";
import { BookmarkLinkPathsType } from "../types";

export const usePagination = (path: BookmarkLinkPathsType, count?: number) => {
  const router = useRouter();

  const _getPage = useCallback(
    (page?: string) => {
      return page ? Number(router.query.page) : 1;
    },
    [router.query.page]
  );

  const initialPage = _getPage(_getQueryPage(router.query.page));
  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    const page = _getPage(_getQueryPage(router.query.page));
    setPage(page);
  }, [router.query, _getPage]);

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

  function _getQueryPage(page?: string | string[]) {
    if (page === undefined) return;
    if (typeof page !== "string") return;

    return page;
  }

  function _updatePage(value: "PREV" | "NEXT") {
    setPage((prev) => {
      if (value === "PREV") {
        return prev - 1;
      }
      return prev + 1;
    });
  }

  function _transitionPath(
    path: BookmarkLinkPathsType,
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
