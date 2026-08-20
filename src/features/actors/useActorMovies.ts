import { getActorMovies } from "@/services/actors/actors";
import { useQuery } from "@tanstack/react-query";

export function useActorMovies(id: number) {
  const { data: movies, isPending: isActorMoviesLoading } = useQuery({
    queryKey: ["actor-movies", id],
    queryFn: () => getActorMovies(id),
  });

  return { movies, isActorMoviesLoading };
}
