import { api } from "@/apis/Axios";
import type {
  Movie,
  MovieCollection,
  MovieCredits,
  MovieResponse,
  MovieVideos,
} from "@/types/Movies";

export async function getWeeklyMovies(): Promise<MovieResponse> {
  const res = await api.get("/trending/movie/week");
  return res.data;
}

export async function getMovieDetails(id: number): Promise<Movie> {
  const res = await api.get(`/movie/${id}`);
  return res.data;
}

export async function getMovieVideos(id: number): Promise<MovieVideos> {
  const res = await api.get(`/movie/${id}/videos`);
  return res.data;
}

export async function getMovieCredits(id: number): Promise<MovieCredits> {
  const res = await api.get(`/movie/${id}/credits`);
  return res.data;
}

export async function getMovieCollection(id: number): Promise<MovieCollection> {
  const res = await api.get(`/collection//${id}`);
  return res.data;
}

export async function getMovieRecommended(id: number): Promise<MovieResponse> {
  const res = await api.get(`/movie/${id}/recommendations`);
  return res.data;
}

export async function getMovieSimilar(id: number): Promise<MovieResponse> {
  const res = await api.get(`/movie/${id}/similar`);
  return res.data;
}
