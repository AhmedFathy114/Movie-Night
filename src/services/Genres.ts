import { api } from "@/apis/Axios";
import { language } from "@/lib/constants";
import type { GenresResponse } from "@/types/MovieResponse";

export async function getAllGenres(): Promise<GenresResponse> {
  const res = await api.get("/genre/movie/list", {
    params: {
      language,
    },
  });

  return res.data;
}
