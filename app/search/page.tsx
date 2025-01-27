"use client";

import { useSearchParams } from "next/navigation";
import React from "react";
import MovieCard from "./components/MovieCard";
import { useSearchMovie } from "@/network/hooks";
import LoadingSearch from "./components/LoadingSearch";
import Pagination from "./components/Pagination";

const SearchPage = () => {
  const searchParams = useSearchParams();

  const title = searchParams.get("title");
  const page = searchParams.get("page");

  const { data, isPending } = useSearchMovie({
    query: title as string,
    page: Number(page || 1),
  });

  const {
    results: list = [],
    total_results = 0,
    total_pages = 1,
    page: current_page,
  } = data ?? {};

  return (
    <div>
      <div className="mb-6">
        <h2 className="font-extralight text-2xl">
          Result : <span className="font-semibold italic">{title}</span>
        </h2>
        <p className="text-slate-400">
          Total <span>{total_results}</span>
        </p>
      </div>
      <div className="flex flex-col gap-y-6">
        {list.length === 0 && isPending && <LoadingSearch />}
        {list?.map((item, index) => (
          <MovieCard key={index} data={item} />
        ))}
      </div>
      <Pagination total_pages={total_pages} current_page={current_page || 1} />
    </div>
  );
};

export default SearchPage;
