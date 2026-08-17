import { fetchMovies } from "@/services/movies";
import { useQuery } from "@tanstack/react-query";

export function useMovieEndPoint<T>(
  endpoint: string,
  params?: Record<string, string | number | boolean>,
  enabled: boolean = true,
) {
  const { data, isPending } = useQuery<T>({
    queryKey: ["movies", endpoint, params],
    queryFn: () => fetchMovies(endpoint, params),
    enabled,
  });

  return { data, isPending };
}
