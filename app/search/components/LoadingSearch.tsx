import { Skeleton } from "@heroui/react";
import React from "react";

const LoadingSearch = () => {
  const data = [1, 2, 3, 4];
  return (
    <>
      {data.map((item) => (
        <div
          key={item}
          className="w-full h-[170px] rounded-xl px-6 py-4 bg-neutral-900  flex gap-x-6"
        >
          <Skeleton className="w-[250px] h-full rounded-lg" />
          <div className="flex-1">
            <Skeleton className="w-1/3 h-5 rounded-lg " />
            <Skeleton className="w-1/3 h-5 rounded-lg my-6" />
            <Skeleton className="w-2/3 h-5 rounded-lg" />
          </div>
        </div>
      ))}
    </>
  );
};

export default LoadingSearch;
