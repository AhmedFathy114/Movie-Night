import { fetchMovies } from "@/services/shared/allWithEndPoint";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export function useMovieEndPoint<T>(
  endpoint: string,
  params?: Record<string, string | number | boolean>,
  shouldFetch: boolean = false,
) {
  const { data, isPending } = useQuery<T>({
    queryKey: ["movies", endpoint, params],
    queryFn: () => fetchMovies(endpoint, params),
    enabled: shouldFetch,
    placeholderData: keepPreviousData,
  });

  return { data, isPending };
}
