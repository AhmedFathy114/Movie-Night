import { api } from "@/apis/Axios";
import type { MovieVideos, TVSeasonDetails } from "@/types/Movies";

export async function getSeasons(
  id: number,
  seasonNumber: number,
): Promise<TVSeasonDetails> {
  const res = await api.get(`/tv/${id}/season/${seasonNumber}`);

  return res.data;
}
export async function getSeasonsVideos(
  id: number,
  seasonNumber: number,
): Promise<MovieVideos> {
  const res = await api.get(`/tv/${id}/season/${seasonNumber}/videos`);
  return res.data;
}
