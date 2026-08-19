import { api } from "@/apis/Axios";
import type { MovieDetails, MovieResponse, MovieVideos } from "@/types/Movies";

export async function getWeeklyMovies(): Promise<MovieResponse> {
  const res = await api.get("/trending/movie/week");
  return res.data;
}

export async function getMovieDetails(id: number): Promise<MovieDetails> {
  const res = await api.get(`/movie/${id}`);
  return res.data;
}

export async function getMovieVideos(id: number): Promise<MovieVideos> {
  const res = await api.get(`/movie/${id}/videos`);
  return res.data;
}
