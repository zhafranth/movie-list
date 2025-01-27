"use client";

import React, { useCallback } from "react";

import { Pagination as PaginationHeroUI } from "@heroui/react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

interface IPagination {
  total_pages: number;
  current_page: number;
}

const Pagination: React.FC<IPagination> = ({
  total_pages,
  current_page = 1,
}) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleChangePage = useCallback((value: number) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", value as unknown as string);

    replace(`${pathname}?${params.toString()}`);
  }, []);
  return (
    <div className="my-12 flex justify-end">
      <PaginationHeroUI
        total={total_pages}
        onChange={handleChangePage}
        page={current_page}
      />
    </div>
  );
};

export default Pagination;
