"use server";

import apiRequest, { ApiResponse } from "@/config/axios";
import { MovieItem } from "./interface";

export const getMovieList = async (type: string) => {
  const response: ApiResponse<{ results: MovieItem[] }> = await apiRequest(
    `/movie/${type}`
  );

  return response.data?.results;
};
