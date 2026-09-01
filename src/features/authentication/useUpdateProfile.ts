import { updateProfile as updateProfileApi} from "@/services/supabase/auth/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useUpdateProfile(){
    const queryClient = useQueryClient();
const {mutate : updateProfile,isPending:isUpdateProfile} = useMutation({
    mutationFn:({image,full_name,userId}:{image:File|null,full_name:string,userId:string}) => updateProfileApi({image,full_name,userId}),
    onSuccess:(data) => {
        queryClient.invalidateQueries({
            queryKey :['profile',data.id]
        })
        toast.success('successfully update profile')
    },
    onError : (error) => {
        toast.error(error.message)
    }
})

    return {updateProfile,isUpdateProfile}
}