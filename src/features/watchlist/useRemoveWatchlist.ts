import { removeWatchlist as removeWatchlistApi} from "@/services/supabase/playList/list";
import type { Media } from "@/types/AllTypes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useRemoveWatchlist(){
    const queryClient = useQueryClient();
    const {mutate : removeWatchlist , isPending : isRemoveWatchlist} = useMutation({
        mutationFn:({id,media_type}:Media) => removeWatchlistApi({id,media_type}),
        onSuccess:(_,variables)=>{
            queryClient.invalidateQueries({
                queryKey:['watchlist',variables.id ,variables.media_type ]
            })
            toast.success('successfully delete from watchlist')
        },
        onError:(error) => {
            toast.error(error.message)
        }
    })

    return {removeWatchlist,isRemoveWatchlist}
}