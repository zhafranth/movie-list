import { Skeleton } from "@heroui/react";
import React from "react";
import CastCard from "./CastCard";
import { CastProperties } from "@/network/interface";

interface ICastList {
  data?: CastProperties[];
  loading: boolean;
}

const CastList: React.FC<ICastList> = ({ data, loading }) => {
  const loadingCard = [1, 2, 3, 4];
  return (
    <div className="mt-8">
      <h2 className="mb-6 text-2xl font-semibold">Top Billed Cast</h2>
      <div className="w-full flex gap-x-6 overflow-x-scroll scrollbar-hide">
        {data?.length === 0 &&
          loading &&
          loadingCard?.map((item) => (
            <div className="w-[15%] h-[350px] flex-shrink-0" key={item}>
              <Skeleton className="w-full h-[250px] rounded-xl" />
              <Skeleton className="mt-2 w-full h-4 rounded-xl" />
              <Skeleton className="mt-2 w-1/2 h-4 rounded-xl" />
            </div>
          ))}
        {data?.map((item, index) => (
          <CastCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default CastList;
