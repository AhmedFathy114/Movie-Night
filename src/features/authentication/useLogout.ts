import { logout as logoutApi} from "@/services/supabase/auth/apiAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogout(){
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const {mutate : logout , isPending:isLogout} = useMutation({
        mutationFn : logoutApi,
        onSuccess:() =>{
            navigate('/home');
            queryClient.setQueryData(["user"],null);
            queryClient.removeQueries({ queryKey: ["profile"] });
             toast.success("Successfully logged out");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    })

    return {logout,isLogout}
}