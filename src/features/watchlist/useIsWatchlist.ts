import { isWatchlist  as isWatchlistApi} from "@/services/supabase/playList/list";
import type { Media } from "@/types/AllTypes";
import { useQuery } from "@tanstack/react-query";

export function useIsWatchlist({id, media_type} : Media) {
    const {
    data: isWatchlist,
    isLoading: isWatchlistLoading,
  } = useQuery({
    queryKey: ["watchlist", id, media_type],
    queryFn: () => isWatchlistApi({id, media_type}),
  });

  return {
    isWatchlist,
    isWatchlistLoading,
  };
}

