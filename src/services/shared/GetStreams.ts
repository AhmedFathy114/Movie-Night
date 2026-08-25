import { supabase } from "@/lib/supabase";
import type { StreamButtons } from "@/types/AllTypes";

export async function GetStreams() : Promise<StreamButtons[]>{
    const {data,error} = await supabase.from('stream_providers').select('*');

    if(error)  {
        console.error(error.message)
        throw new Error(error.message)
    }

    return data
}
