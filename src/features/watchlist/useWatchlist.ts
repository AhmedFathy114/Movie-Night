import { getWatchlist } from "@/services/supabase/playList/list";
import { useQuery } from "@tanstack/react-query";

export function useWatchlist(userId: string,type:string){
    const {data:Watchlist , isPending:isLoadingWatchlist} =  useQuery({
    queryKey: ["watchlist", userId,type],
    queryFn: () => getWatchlist(userId,type),
    enabled: !!userId || !! type,
  });

  return {Watchlist,isLoadingWatchlist}
}