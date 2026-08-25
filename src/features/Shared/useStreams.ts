import { GetStreams } from "@/services/shared/GetStreams";
import { useQuery } from "@tanstack/react-query";

export function useStreams(type:string){
    const {data,isPending : isStreamsLoading} = useQuery({
        queryKey:['streams'],
        queryFn : GetStreams
    })

    const streams = data?.filter(stream => stream.media_type === type) ?? [];

    return {streams,isStreamsLoading}
}