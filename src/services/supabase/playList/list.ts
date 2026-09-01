import { supabase } from "@/lib/supabase";
import type { Media } from "@/types/AllTypes";


export async function addFavorite({id,media_type}:Media) {
    const {data,error} = await supabase.from('favorites').insert({
      media_id: id,
      media_type: media_type,
    }).select().single();

    if(error){
        throw new Error(error.message)
    }

    return data;
}

export async function isFavorite({id,media_type}:Media) {
  const { data, error } = await supabase
    .from("favorites")
    .select("id")
    .eq("media_id", id)
    .eq("media_type", media_type)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }
  
  return !!data;
}

export async function removeFavorite({id,media_type}:Media){
    const {data,error} = await supabase.from('favorites').delete().eq('media_id',id).eq('media_type',media_type).select();

    if (error) {
      throw new Error(error.message);
    }

    return data
}

export async function addWatchlist({id,media_type}:Media) {
    const {data,error} = await supabase.from('watchlist').insert({
      media_id: id,
      media_type: media_type,
    }).select().single();

    if(error){
        throw new Error(error.message)
    }

    return data;
}

export async function isWatchlist({id,media_type}:Media) {
  const { data, error } = await supabase
    .from("watchlist")
    .select("id")
    .eq("media_id", id)
    .eq("media_type", media_type)
    .maybeSingle();

  if (error) {
    throw new Error(error.message);
  }
  
  return !!data;
}

export async function removeWatchlist({id,media_type}:Media){
    const {data,error} = await supabase.from('watchlist').delete().eq('media_id',id).eq('media_type',media_type).select();

    if (error) {
      throw new Error(error.message);
    }

    return data
}

