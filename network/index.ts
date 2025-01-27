"use server";

import apiRequest, { ApiResponse } from "@/config/axios";
import { MovideDetail, MovieItem } from "./interface";

export const getMovieList = async (type: string) => {
  const response: ApiResponse<{ results: MovieItem[] }> = await apiRequest(
    `/movie/${type}`
  );

  return response.data?.results;
};

export const getMovieDetail = async (id: number) => {
  const response: ApiResponse<MovideDetail> = await apiRequest(`/movie/${id}`);

  return response.data;
};

export const getMovieSimilarList = async (id: number) => {
  const response: ApiResponse<{ results: MovieItem[] }> = await apiRequest(
    `/movie/${id}/similar`
  );

  return response.data?.results;
};
