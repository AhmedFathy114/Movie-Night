import { updateUser } from "@/services/supabase/auth/apiAuth";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useUpdateUser(){
    const navigate = useNavigate();
    const { mutate: updatePassword, isPending : isUpdating} = useMutation({
        mutationFn:updateUser,
        onSuccess:() => {
            toast.success("Password updated successfully");
            navigate("/login");
        },
         onError: (error) => {
            toast.error(error.message);
        },
    })

    return {updatePassword,isUpdating}
}