import { getFavorite } from "@/services/supabase/playList/list";
import { useQuery } from "@tanstack/react-query";

export function useFavorites(userId: string,type:string) {
  const {data:favorites , isPending:isLoadingFavorites} =  useQuery({
    queryKey: ["favorites", userId,type],
    queryFn: () => getFavorite(userId,type),
    enabled: !!userId || !! type,
  });

  return {favorites,isLoadingFavorites}
}