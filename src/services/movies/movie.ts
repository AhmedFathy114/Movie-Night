import { api } from "@/apis/Axios";
import type {
  MovieCollection,
  MovieResponse,
} from "@/types/AllTypes";

interface TmdbSearchResult {
  id: number;
  media_type: "movie" | "tv" | "person";
  title?: string;
  name?: string;
  poster_path: string | null;
}

interface TmdbSearchResponse {
  results: TmdbSearchResult[];
}


export async function getWeeklyMovies(): Promise<MovieResponse> {
  const res = await api.get("/trending/movie/week");
  return res.data;
}


export async function getMovieCollection(id: number): Promise<MovieCollection> {
  const res = await api.get(`/collection//${id}`);
  return res.data;
}

export async function searchAlooyPoster(title: string) {
  const { data } = await api.get<TmdbSearchResponse>("/search/multi", {
    params: {
      query: title,
      language: "ar",
      page: 1,
      include_adult: false,
    },
  });

  return (
    data.results.find(
      (item) =>
        (item.media_type === "movie" || item.media_type === "tv") &&
        item.poster_path,
    ) ?? null
  );
}

