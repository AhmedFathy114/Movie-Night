import { getMovieDetails } from "@/services/movies/movie";
import type { Movie } from "@/types/Movies";
import { useQuery } from "@tanstack/react-query";

export function useMovieDetails(id: number) {
  const { data: movie, isPending: isMovieLoading } = useQuery<Movie>({
    queryKey: ["movie-details", id],
    queryFn: () => getMovieDetails(id),
    enabled: !!id,
  });

  return { movie, isMovieLoading };
}
