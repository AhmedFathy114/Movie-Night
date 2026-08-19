import { getAllGenres } from "@/services/shared/Genres";
import type { genres, GenresResponse } from "@/types/Movies";
import { useQuery } from "@tanstack/react-query";

export function useGenres(movieIds: number[]) {
  const { data: genres, isPending } = useQuery<GenresResponse>({
    queryKey: ["genres"],
    queryFn: getAllGenres,
  });

  const movieGenres = genres?.genres?.filter((genre: genres) =>
    movieIds.includes(genre.id),
  );

  return { genres, isPending, movieGenres };
}
