import { getMovieVideos } from "@/services/movies/movie";
import { useQuery } from "@tanstack/react-query";

export function useMovieVideos(id: number) {
  const { data : videos, isPending } = useQuery({
    queryKey: ["movie-videos", id],
    queryFn: () => getMovieVideos(id),
  });

  return { videos, isPending };
}
