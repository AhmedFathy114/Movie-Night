import { useDefineType } from "@/hooks/useDefineType";
import { slugify } from "@/lib/utils";
import type { TMDBItem } from "@/types/AllTypes";
import { useNavigate } from "react-router-dom";

export function useNavigateDetails(movie: TMDBItem) {
  const navigate = useNavigate();
  const { type, data } = useDefineType(movie);
  function handleSubmit() {
    if (type === "movie") {
      navigate(
        `/movie/${movie.id}/${slugify(`${data.title}-${data.release_date.slice(0, 4)}`)}`,
      );
    }
    if (type === "tv") {
      navigate(
        `/tv/${movie.id}/${slugify(`${data.name}-${data.first_air_date.slice(0, 4)}`)}`,
      );
    }
    if (type === "actor") {
      navigate(`/actor/${movie.id}/${slugify(data.name)}`);
    }
  }

  return { handleSubmit };
}
