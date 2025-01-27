"use client";

import { useGetMovieDetail } from "@/network/hooks";
import { formatTime } from "@/utils/format";
import { Chip, CircularProgress } from "@heroui/react";
import dayjs from "dayjs";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaClock } from "react-icons/fa";
import LoadingCardDetail from "./components/LoadingCardDetail";
import SimilarList from "./components/SimilarList";

const MovieDetail = () => {
  const { id } = useParams();
  const { data: detail, isPending } = useGetMovieDetail(Number(id));

  const {
    title,
    poster_path,
    backdrop_path,
    release_date,
    genres = [],
    vote_average = 0,
    vote_count = 0,
    tagline,
    overview,
    runtime,
  } = detail ?? {};

  return (
    <main>
      {isPending ? (
        <LoadingCardDetail />
      ) : (
        <div className="h-[70vh] w-full rounded-xl bg-neutral-900 px-10 py-8 flex gap-x-12 relative overflow-hidden">
          <div className="w-[400px] rounded-lg bg-neutral-800  overflow-hidden relative z-50">
            <Image
              src={`https://image.tmdb.org/t/p/w780${poster_path}`}
              width={2000}
              height={2000}
              alt={title as string}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 relative z-30">
            <p className="text-4xl font-semibold">
              {title}{" "}
              <span className="font-light">
                ({dayjs(release_date).format("YYYY")})
              </span>
            </p>
            <div className="flex gap-x-3 mt-4">
              {genres?.map(({ name, id }) => (
                <Chip key={id}>{name}</Chip>
              ))}
            </div>

            <div className="flex gap-x-4 mt-4 items-center">
              <CircularProgress
                size="lg"
                value={(vote_average / 10) * 100}
                aria-label="Loading..."
                color="warning"
                showValueLabel={true}
                classNames={{
                  svg: "w-24 h-24",
                  value: "text-2xl font-semibold text-white",
                }}
              />
              <div>
                <p className="font-extralight text-sm">Total Voters</p>
                <p className="font-semibold text-xl">
                  {vote_count.toLocaleString("id-ID")}
                </p>
              </div>
            </div>

            <div className="flex gap-x-6 mt-4">
              <div className="flex gap-x-2 items-center font-light">
                <FaClock /> {formatTime(runtime || 0)}
              </div>
              <div className="flex gap-x-2 items-center font-light">
                <BsFillCalendarDateFill />{" "}
                {dayjs(release_date).format("MM/DD/YYYY")}
              </div>
            </div>

            <div className="mt-8">
              <p className="italic text-slate-500 font-light">{tagline}</p>
              <p className="mt-4 mb-2">Overview</p>
              <p className="font-light text-slate-400">{overview}</p>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-full h-full z-0">
            <Image
              src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
              width={2000}
              height={2000}
              alt={title as string}
              className="w-full h-full object-cover  bg-cover  bg-opacity-15"
              style={{
                opacity: 0.1,
              }}
            />
          </div>
        </div>
      )}
      <SimilarList />
    </main>
  );
};

export default MovieDetail;
