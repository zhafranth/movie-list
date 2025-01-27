"use client";

import { useGetMovieList } from "@/network/hooks";
import { Tab, Tabs } from "@heroui/react";
import React, { Key, useCallback, useState } from "react";
import MovieCard from "./MovieCard";
import LoadingCard from "../LoadingCard/LoadingCard";

const MovieList = () => {
  const [activeKey, setActiveKey] = useState("now_playing");

  const { data: list = [], isPending } = useGetMovieList(activeKey);

  const handleChangeTab = useCallback(
    (key: Key) => setActiveKey(key as string),
    []
  );

  return (
    <>
      <Tabs
        aria-label="Tabs colors"
        color="primary"
        onSelectionChange={handleChangeTab}
        radius="full"
        size="sm"
        selectedKey={activeKey}
      >
        <Tab key="now_playing" title="Now Playing" />
        <Tab key="popular" title="Popular" />
        <Tab key="upcoming" title="Upcoming" />
      </Tabs>
      <div className="flex-1 h-[30%] rounded-2xl">
        <div className="flex h-full w-[100%] gap-x-6 overflow-x-scroll scrollbar-hide">
          {isPending && list.length < 1 && <LoadingCard />}
          {!isPending &&
            list?.map((item, index) => <MovieCard key={index} data={item} />)}
        </div>
      </div>
    </>
  );
};

export default MovieList;
