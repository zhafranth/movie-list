import { MovieItem } from "@/network/interface";
import { CircularProgress } from "@heroui/react";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IMovieCard {
  data: MovieItem;
}

const MovieCard: React.FC<IMovieCard> = ({ data }) => {
  const { title, backdrop_path, vote_average, release_date, id } = data ?? {};
  return (
    <Link
      href={`/movie/${id}`}
      className="h-full w-[30%] rounded-2xl bg-red-100 flex-shrink-0 overflow-hidden relative cursor-pointer"
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
        width={2000}
        height={2000}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="flex gap-x-2 absolute bottom-0 left-0 bg-neutral-500 bg-opacity-35 backdrop-blur-sm overflow-hidden h-[30%] w-full p-2 rounded-b-2xl">
        <div className="w-9/12">
          <p className="text-sm font-semibold line-clamp-1">{title}</p>
          <p className="font-extralight text-xs">
            {dayjs(release_date).format("MMM DD, YYYY")}
          </p>
        </div>
        <CircularProgress
          aria-label="Loading..."
          color={vote_average < 7 ? "warning" : "success"}
          showValueLabel={true}
          size="md"
          value={(vote_average / 10) * 100}
        />
      </div>
    </Link>
  );
};

export default MovieCard;
