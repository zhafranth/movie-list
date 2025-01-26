"use client";

import { Card, Skeleton } from "@heroui/react";
import React from "react";

interface ILoadingCard {
  direction?: "horizontal" | "vertical";
}

const LoadingCard: React.FC<ILoadingCard> = ({ direction = "horizontal" }) => {
  const totalLoading = [1, 2, 3, 4];
  return (
    <div
      className={`flex ${
        direction === "horizontal" ? "flex-row" : "flex-col"
      } gap-28 w-full`}
    >
      {totalLoading.map((item) => (
        <Card className="flex-1 space-y-5 p-4" radius="lg" key={item}>
          <Skeleton className="rounded-lg">
            <div className="h-24 rounded-lg bg-default-300" />
          </Skeleton>
          <div className="space-y-3">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200" />
            </Skeleton>
            <Skeleton className=" w-4/5 rounded-lg">
              <div className="h-3 w-4/5 rounded-lg bg-default-200" />
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg">
              <div className="h-3 w-2/5 rounded-lg bg-default-300" />
            </Skeleton>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default LoadingCard;
