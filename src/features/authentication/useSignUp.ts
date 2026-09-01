import { signUp as SignUpApi} from "@/services/supabase/auth/apiAuth";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
type SignUpProps = {
    email:string;
    password : string
    fullName:string
}
export function useSignUp(){
    const {mutate : signUp,isPending:isSigning} = useMutation({
        mutationFn:({email,password,fullName}:SignUpProps) => SignUpApi({email,password,fullName})
        ,
        onSuccess:() => {
            toast.success('check confirm email')
        }
        ,
        onError:(error) => {
            toast.error(error.message)
        }
    })

    return {signUp,isSigning}
}