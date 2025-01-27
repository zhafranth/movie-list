"use client";

import { useGetMovieDetail } from "@/network/hooks";
import { Button } from "@heroui/react";
import { useParams, useRouter } from "next/navigation";
import React, { useCallback } from "react";
import SimilarList from "./components/SimilarList";
import { FaArrowLeftLong } from "react-icons/fa6";
import MovieDetailHero from "./components/MovieDetailHero";
import CastList from "./components/CastList";

const MovieDetail = () => {
  const { id } = useParams();
  const { data: detail, isPending } = useGetMovieDetail(Number(id));

  const router = useRouter();

  const handleBack = useCallback(() => router.back(), []);

  return (
    <main>
      <Button
        variant="light"
        onPress={handleBack}
        startContent={<FaArrowLeftLong />}
        className="mb-4"
      >
        Back
      </Button>
      <MovieDetailHero data={detail} loading={isPending} />
      <CastList data={detail?.credits.cast || []} loading={isPending} />
      <SimilarList />
    </main>
  );
};

export default MovieDetail;
