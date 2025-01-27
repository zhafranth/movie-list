import { useQuery } from "@tanstack/react-query";
import { getMovieDetail, getMovieList, getMovieSimilarList } from ".";

export const useGetMovieList = (type: string) => {
  return useQuery({
    queryKey: ["movies", type],
    queryFn: () => getMovieList(type),
  });
};

export const useGetMovieDetail = (id: number) => {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: () => getMovieDetail(id),
  });
};

export const useGetMovieSimilarList = (id: number) => {
  return useQuery({
    queryKey: ["movie", "similar", id],
    queryFn: () => getMovieSimilarList(id),
  });
};
