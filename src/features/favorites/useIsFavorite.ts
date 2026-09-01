import { useQuery } from "@tanstack/react-query";
import { isFavorite as isFavoriteApi } from "@/services/supabase/playList/list";
import type { Media } from "@/types/AllTypes";

export function useIsFavorite({id, media_type} : Media) {
  const {
    data: isFavorite,
    isLoading: isFavoriteLoading,
  } = useQuery({
    queryKey: ["favorite", id, media_type],
    queryFn: () => isFavoriteApi({id, media_type}),
  });

  return {
    isFavorite,
    isFavoriteLoading,
  };
}