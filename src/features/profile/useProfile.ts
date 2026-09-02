import { getProfile } from "@/services/supabase/auth/apiAuth";
import { useQuery } from "@tanstack/react-query";

export function useProfile(userId:string){
    const {data : profile,isPending} = useQuery({
        queryKey:['profile',userId],
        queryFn:() => getProfile(userId),
        enabled: !!userId,
    })

    return {profile,isPending}
}