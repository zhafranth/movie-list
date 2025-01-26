import { useQuery } from "@tanstack/react-query";
import { getMovieList } from ".";

export const useGetMovieList = (type: string) => {
  return useQuery({
    queryKey: ["movies", type],
    queryFn: () => getMovieList(type),
  });
};
