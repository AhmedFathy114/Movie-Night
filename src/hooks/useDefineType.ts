import type { TMDBItem } from "@/types/Movies";

export function useDefineType(movie: TMDBItem) {
  if ("profile_path" in movie) {
    return { type: "actor" as const, data: movie };
  }

  if ("release_date" in movie) {
    return { type: "movie" as const, data: movie };
  }

  if ("first_air_date" in movie) {
    return { type: "tv" as const, data: movie };
  }

  return { type: "unknown" as const, data: movie };
}
