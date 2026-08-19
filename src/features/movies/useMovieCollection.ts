import { getMovieCollection } from "@/services/movies/movie";
import type { MovieCollection } from "@/types/Movies";
import { useQuery } from "@tanstack/react-query";

export function useMovieCollection(id: number) {
  const { data: collections, isPending: isCollectionLoading } =
    useQuery<MovieCollection>({
      queryKey: ["movie-collections", id],
      queryFn: () => getMovieCollection(id),
      enabled: !!id,
    });

  return { collections, isCollectionLoading };
}
