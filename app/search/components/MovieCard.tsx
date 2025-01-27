import { MovieItem } from "@/network/interface";
import { CircularProgress } from "@heroui/react";
import dayjs from "dayjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaImage } from "react-icons/fa";

interface IMovieCard {
  data: MovieItem;
}

const MovieCard: React.FC<IMovieCard> = ({ data }) => {
  const { title, overview, release_date, backdrop_path, vote_average, id } =
    data ?? {};
  return (
    <Link
      href={`/movie/${id}`}
      className="w-full h-[170px] rounded-xl px-6 py-4 bg-neutral-900 hover:bg-neutral-800 transition-all cursor-pointer flex gap-x-6 items-center"
    >
      <div className="w-[250px] h-full rounded-lg overflow-hidden bg-neutral-800">
        {backdrop_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
            width={2000}
            height={2000}
            alt={title as string}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex justify-center items-center bg-neutral-700">
            <FaImage size={32} />
          </div>
        )}
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-semibold">
          {title}{" "}
          <span className="font-light">
            ({dayjs(release_date).format("YYYY")})
          </span>
        </h2>
        <p>{dayjs(release_date).format("MMM DD, YYYY")}</p>
        <p className="line-clamp-4 text-slate-400 font-light">{overview}</p>
      </div>
      <CircularProgress
        size="lg"
        value={(vote_average / 10) * 100}
        aria-label="Loading..."
        color={vote_average < 7 ? "warning" : "success"}
        showValueLabel={true}
        classNames={{
          svg: "w-24 h-24",
          value: "text-2xl font-semibold text-white",
        }}
      />
    </Link>
  );
};

export default MovieCard;
