import { getSeasons } from "@/services/tv/tvShows";
import { useQuery } from "@tanstack/react-query";

export function useSessions(id: number, seasonNumber: number) {
  const { data: season, isPending: isSessionLoading } = useQuery({
    queryKey: ["tv-session", id, seasonNumber],
    queryFn: () => getSeasons(id, seasonNumber),
    enabled: !!id && seasonNumber !== undefined,
  });

  return { season, isSessionLoading };
}
