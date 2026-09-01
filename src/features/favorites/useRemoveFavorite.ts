import { removeFavorite as removeFavoriteApi} from "@/services/supabase/playList/list";
import type { Media } from "@/types/AllTypes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useRemoveFavorite(){
    const queryClient = useQueryClient();
    const {mutate : removeFavorite , isPending : isRemoveFavorite} = useMutation({
        mutationFn:({id,media_type}:Media) => removeFavoriteApi({id,media_type}),
        onSuccess:(_,variables)=>{
            queryClient.invalidateQueries({
                queryKey:['favorite',variables.id ,variables.media_type ]
            })
            toast.success('successfully delete from favorites')
        },
        onError:(error) => {
            toast.error(error.message)
        }
    })

    return {removeFavorite,isRemoveFavorite}
}