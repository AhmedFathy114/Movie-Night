import { api } from "@/apis/Axios";
import type { MovieResponse } from "@/types/MovieResponse";

export async function getWeeklyMovies(): Promise<MovieResponse> {
  const res = await api.get("/trending/movie/week");

  return res.data;
}

export async function fetchMovies(
  endpoint: string,
  language: string,
  page: number,
): Promise<MovieResponse> {
  const response = await api.get(endpoint, {
    params: {
      language,
      page,
    },
  });
  return response.data;
}
