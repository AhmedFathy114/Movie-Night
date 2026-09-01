import {addWatchlist as addWatchlistFApi} from "@/services/supabase/playList/list";
import type { Media } from "@/types/AllTypes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useAddWatchlist(){
    const queryClient = useQueryClient();

    const {mutate : addWatchlist,isPending:isAddWatchlist} = useMutation({
        mutationFn : ({id,media_type}:Media) => addWatchlistFApi({id,media_type}),
        onSuccess:(data) => {
            queryClient.invalidateQueries({
                queryKey:["watchlist",data.media_id, data.media_type]
            })
            toast.success(`successfully added to Watchlist ${data?.media_type}`)
        },
        onError:(error) => {
            toast.error(error.message)
        }
    })

    return {addWatchlist,isAddWatchlist}
    
}
