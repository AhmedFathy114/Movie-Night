import { getSeasonsVideos } from "@/services/tv/tvShows";
import { useQuery } from "@tanstack/react-query";

export function useSeasonVideos(id: number, seasonNumber: number) {
  const { data: videos, isPending: isVideosLoading } = useQuery({
    queryKey: ["season-video", id],
    queryFn: () => getSeasonsVideos(id, seasonNumber),
    enabled: !!id && seasonNumber !== undefined,
  });

  return { videos, isVideosLoading };
}
