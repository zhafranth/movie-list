import { Skeleton } from "@heroui/react";
import React from "react";

const LoadingCardDetail = () => {
  return (
    <div className="h-[70vh] w-full rounded-xl bg-neutral-900 px-10 py-8 flex gap-x-12 relative overflow-hidden">
      <Skeleton className="w-[400px] dark rounded-lg"></Skeleton>
      <div className="flex-1 flex flex-col gap-y-4">
        <Skeleton className="rounded-xl">
          <div className="h-7"></div>
        </Skeleton>
        <Skeleton className="rounded-xl w-1/2">
          <div className="h-7"></div>
        </Skeleton>
        <Skeleton className="rounded-full w-24">
          <div className="h-24"></div>
        </Skeleton>
        <Skeleton className="rounded-xl mt-16">
          <div className="h-5"></div>
        </Skeleton>
        <Skeleton className="rounded-xl w-4/6">
          <div className="h-5"></div>
        </Skeleton>
        <Skeleton className="rounded-xl w-4/6">
          <div className="h-5"></div>
        </Skeleton>
      </div>
    </div>
  );
};

export default LoadingCardDetail;
