import { getMovieRecommended } from "@/services/movies/movie";
import type { MovieResponse } from "@/types/Movies";
import { useQuery } from "@tanstack/react-query";

export function useMovieRecommended(id: number) {
  const { data: Recommended, isPending: isRecommendedLoading } =
    useQuery<MovieResponse>({
      queryKey: ["movie-recommends", id],
      queryFn: () => getMovieRecommended(id),
      enabled: !!id,
    });

  return { Recommended, isRecommendedLoading };
}
