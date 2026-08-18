import { fetchMovies } from "@/services/movies";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export function useMovieEndPoint<T>(
  endpoint: string,
  params?: Record<string, string | number | boolean>,
  enabled = true,
) {
  const { data, isPending } = useQuery<T>({
    queryKey: ["movies", endpoint, params],
    queryFn: () => fetchMovies(endpoint, params),
    enabled,
    placeholderData: keepPreviousData,
  });

  return { data, isPending };
}
