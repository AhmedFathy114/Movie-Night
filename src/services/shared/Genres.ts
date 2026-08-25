import { api } from "@/apis/Axios";
import { language } from "@/lib/Variables";
import type { GenresResponse } from "@/types/AllTypes";

export async function getAllGenres(): Promise<GenresResponse> {
  const res = await api.get("/genre/movie/list", {
    params: {
      language,
    },
  });

  return res.data;
}
