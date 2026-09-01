import { login as loginApi} from "@/services/supabase/auth/apiAuth";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type loginProps = {
    email:string;
    password : string
}

export function useLogin(){
    const navigate = useNavigate();
    const {mutate : login,isPending : isLogin} = useMutation({
        mutationFn : ({email,password} : loginProps) => loginApi({email,password})
        ,
        onSuccess : () => {
            toast.success('successfully login');
            navigate('/home',{replace:true})
        }
        ,
        onError : () => {
            toast.error('Enter a valid Email or Password');
        }
    })

    return {login , isLogin}
}