import { getWeeklyMovies } from "@/services/movies/movie";
import type { MovieResponse } from "@/types/Movies";
import { useQuery } from "@tanstack/react-query";

export function useWeeklyMovies() {
  const { data: weekMovies, isPending } = useQuery<MovieResponse>({
    queryKey: ["weekly-movies"],
    queryFn: getWeeklyMovies,
  });

  return { weekMovies, isPending };
}
