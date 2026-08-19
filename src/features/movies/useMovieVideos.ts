import { getMovieVideos } from "@/services/movies/movie";
import type { MovieVideos } from "@/types/Movies";
import { useQuery } from "@tanstack/react-query";

export function useMovieVideos(id: number) {
  const { data: videos, isPending } = useQuery<MovieVideos>({
    queryKey: ["movie-videos", id],
    queryFn: () => getMovieVideos(id),
  });

  return { videos, isPending };
}
