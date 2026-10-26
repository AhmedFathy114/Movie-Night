import { api } from "@/apis/Axios";
import type {
  MovieCollection,
  MovieResponse,
} from "@/types/AllTypes";


export async function getWeeklyMovies(): Promise<MovieResponse> {
  const res = await api.get("/trending/movie/week");
  return res.data;
}


export async function getMovieCollection(id: number): Promise<MovieCollection> {
  const res = await api.get(`/collection//${id}`);
  return res.data;
}

