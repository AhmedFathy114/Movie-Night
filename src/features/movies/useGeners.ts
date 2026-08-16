import { getAllGenres } from "@/services/Genres";
import type { GenresResponse } from "@/types/MovieResponse";
import { useQuery } from "@tanstack/react-query";

export function useGenres() {
  const { data: genres, isPending } = useQuery<GenresResponse>({
    queryKey: ["genres"],
    queryFn: getAllGenres,
  });

  return { genres, isPending };
}
