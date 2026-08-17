import { api } from "@/apis/Axios";
import type { MovieResponse } from "@/types/Movies";

export async function getWeeklyMovies(): Promise<MovieResponse> {
  const res = await api.get("/trending/movie/week");
  return res.data;
}

export async function fetchMovies<T>(
  endpoint: string,
  params?: Record<string, string | number | boolean>,
): Promise<T> {
  const response = await api.get<T>(endpoint, {
    params,
  });
  return response.data;
}
