import { getMovieSimilar } from "@/services/movies/movie";
import type { MovieResponse } from "@/types/Movies";
import { useQuery } from "@tanstack/react-query";

export function useMovieSimilar(id: number) {
  const { data: Similar, isPending: isSimilarLoading } =
    useQuery<MovieResponse>({
      queryKey: ["movie-similar", id],
      queryFn: () => getMovieSimilar(id),
      enabled: !!id,
    });

  return { Similar, isSimilarLoading };
}
