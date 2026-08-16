import { getWeeklyMovies } from "@/services/movies";
import type { MovieResponse } from "@/types/MovieResponse";
import { useQuery } from "@tanstack/react-query";

export function useWeeklyMovies() {
  const { data: weekMovies, isPending } = useQuery<MovieResponse>({
    queryKey: ["weekly-movies"],
    queryFn: getWeeklyMovies,
  });

  return { weekMovies, isPending };
}
