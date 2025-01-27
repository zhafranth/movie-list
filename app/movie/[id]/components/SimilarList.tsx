import React from "react";
import SimilarCard from "./SimilarCard";
import { useParams } from "next/navigation";
import { useGetMovieSimilarList } from "@/network/hooks";
import { Skeleton } from "@heroui/react";

const SimilarList = () => {
  const { id } = useParams();
  const { data: list = [], isPending } = useGetMovieSimilarList(Number(id));
  const loadingCard = [1, 2, 3, 4];
  return (
    <div className="mt-8">
      <h2 className="mb-6 text-2xl font-semibold">Similar Movie</h2>
      <div className="w-full flex gap-x-6 overflow-x-scroll scrollbar-hide">
        {list.length === 0 &&
          isPending &&
          loadingCard?.map((item) => (
            <div className="w-[15%] h-[350px] flex-shrink-0" key={item}>
              <Skeleton className="w-full h-[250px] rounded-xl" />
              <Skeleton className="mt-2 w-full h-4 rounded-xl" />
              <Skeleton className="mt-2 w-1/2 h-4 rounded-xl" />
            </div>
          ))}
        {list.map((item, index) => (
          <SimilarCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default SimilarList;
