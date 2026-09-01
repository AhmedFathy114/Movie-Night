import { addFavorite as addFavoriteApi} from "@/services/supabase/playList/list";
import type { Media } from "@/types/AllTypes";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useAddFavorite(){
    const queryClient = useQueryClient();

    const {mutate : addFavorite,isPending:isAddFavorite} = useMutation({
        mutationFn : ({id,media_type}:Media) => addFavoriteApi({id,media_type}),
        onSuccess:(data) => {
            queryClient.invalidateQueries({
                queryKey:["favorite",data.media_id, data.media_type]
            })
            toast.success(`successfully added to favorites ${data?.media_type}`)
        },
        onError:(error) => {
            toast.error(error.message)
        }
    })

    return {addFavorite,isAddFavorite}
}