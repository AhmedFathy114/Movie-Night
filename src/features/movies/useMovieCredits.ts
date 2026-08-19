import { getMovieCredits } from "@/services/movies/movie";
import type { MovieCredits } from "@/types/Movies";
import { useQuery } from "@tanstack/react-query";

export function useMovieCredits(id: number) {
  const { data: credits, isPending: isCreditLoading } = useQuery<MovieCredits>({
    queryKey: ["movie-credits", id],
    queryFn: () => getMovieCredits(id),
    enabled: !!id,
  });

  return { credits, isCreditLoading };
}
