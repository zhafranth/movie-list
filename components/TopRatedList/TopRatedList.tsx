"use client";

import React from "react";
import CardTopRated from "./CardTopRated";
import { useGetMovieList } from "@/network/hooks";
import LoadingCard from "../LoadingCard/LoadingCard";

const TopRatedList = () => {
  const { data: list = [], isPending } = useGetMovieList("top_rated");

  return (
    <div className="w-[300px] h-[80vh] rounded-3xl overflow-y-scroll scrollbar-hide bg-neutral-800 bg-opacity-80 p-6 ">
      <h2 className="mb-4 font-semibold">🔥 Top Rated</h2>
      <div className="flex flex-col gap-y-5  w-full h-full">
        {isPending && list.length < 1 && <LoadingCard direction="vertical" />}
        {list?.map((item) => (
          <CardTopRated key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default TopRatedList;
