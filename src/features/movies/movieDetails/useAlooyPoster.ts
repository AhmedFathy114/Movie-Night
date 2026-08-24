import { backDropUrl } from "@/lib/Variables";
import { searchAlooyPoster } from "@/services/movies/movie";
import { useQuery } from "@tanstack/react-query";

export function useAlooyPoster(title?: string) {
  const { data, isLoading } = useQuery({
    queryKey: ["alooy-poster", title],

    queryFn: () => searchAlooyPoster(title!),

    enabled: !!title,

    staleTime: 1000 * 60 * 60 * 24,
  });

  return {
    posterUrl: data?.poster_path
      ? `${backDropUrl}${data.poster_path}`
      : "/NoPoster.png",

    mediaType: data?.media_type ?? null,
    tmdbId: data?.id ?? null,
    isPosterLoading: isLoading,
  };
}