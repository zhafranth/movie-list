"use client";

import { useGetMovieDetail } from "@/network/hooks";
import { Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPlay } from "react-icons/fa";

const HomeMovie = () => {
  const { data } = useGetMovieDetail(634649);
  const { title, overview, backdrop_path, genres } = data ?? {};
  return (
    <div className="w-full h-[60%] bg-neutral-800 rounded-2xl overflow-hidden relative">
      <div className="relative h-full z-10 p-6 flex flex-col">
        <div className="flex gap-x-4">
          {genres?.map(({ name, id }) => (
            <Chip key={id}>{name}</Chip>
          ))}
        </div>
        <div className="w-3/6 mt-auto flex flex-col gap-y-2 bg-neutral-500 bg-opacity-35 backdrop-blur-sm px-4 py-2 rounded-xl">
          <p className="font-semibold text-xl">{title}</p>
          <p className="font-extralight text-sm text-slate-300 line-clamp-3">
            {overview}
          </p>
          <Link href={`/movie/634649`}>
            <Button
              className="bg-white text-slate-950 self-baseline"
              radius="full"
              startContent={<FaPlay />}
              size="sm"
            >
              Detail
            </Button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-full z-0">
        {backdrop_path && (
          <Image
            src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            width={2000}
            height={2000}
            alt={title as string}
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </div>
  );
};

export default HomeMovie;
