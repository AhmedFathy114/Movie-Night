import { fetchMovies } from "@/services/movies";
import type { MovieResponse } from "@/types/MovieResponse";
import { useQuery } from "@tanstack/react-query";

export function useMovieEndPoint(
  endpoint: string,
  language: string,
  page: number,
) {
  const { data, isPending } = useQuery<MovieResponse>({
    queryKey: ["movies", endpoint],
    queryFn: () => fetchMovies(endpoint, language, page),
  });

  return {data , isPending}
}
