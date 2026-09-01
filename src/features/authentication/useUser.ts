import { getCurrentUser } from "@/services/supabase/auth/apiAuth";
import { useQuery } from "@tanstack/react-query";

export function useUser(){
    const {data : user,isPending} = useQuery({
        queryKey:['user'],
        queryFn:getCurrentUser
    })

    return {user,isPending,isAuthenticated : user?.role === 'authenticated'}
}