"use client";

import { useGetMovieList } from "@/network/hooks";
import { CircularProgress } from "@heroui/react";
import Image from "next/image";
import React from "react";
import PopularCard from "./PopularCard";
import LoadingCard from "../LoadingCard/LoadingCard";

const PopularList = () => {
  const { data: list = [], isLoading } = useGetMovieList("popular");
  return (
    <>
      <h2>Popular Now</h2>
      <div className="flex-1 h-[30%] rounded-2xl">
        <div className="flex h-full w-[100%] gap-x-6 overflow-x-scroll scrollbar-hide">
          {isLoading && list.length < 1 && <LoadingCard />}
          {list?.map((item, index) => (
            <PopularCard key={index} data={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularList;
