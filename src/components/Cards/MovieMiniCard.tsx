import { useNavigateDetails } from "@/hooks/useNavigateDetails";
import { useDefineType } from "@/hooks/useDefineType";
import { backDropUrl } from "@/lib/Variables";
import type { TMDBItem } from "@/types/Movies";

function MovieMiniCard({ movie }: { movie: TMDBItem }) {
  // const isMovie = movie.media_type === "movie";
  // const isTv = movie.media_type === "tv";

  const { type, data } = useDefineType(movie);
  const { handleSubmit } = useNavigateDetails(movie);

  const title =
    type === "movie" ? data.title : type === "tv" ? data.name : undefined;

  const imagePath =
    type === "movie"
      ? data.poster_path || data.backdrop_path
      : type === "tv"
        ? data.poster_path || data.backdrop_path
        : undefined;

  const year =
    type === "movie"
      ? data.release_date?.slice(0, 4)
      : type === "tv"
        ? data.first_air_date?.slice(0, 4)
        : undefined;

  const types = type === "movie" ? "Movie" : "TV Show";

  return (
    <div
      className="group flex min-h-20 cursor-pointer items-center gap-3 px-3 py-2.5 hover:bg-neutral-800"
      onClick={handleSubmit}
    >
      <img
        src={imagePath ? `${backDropUrl}${imagePath}` : "/NoPoster.png"}
        alt={title}
        className="h-16 w-11 shrink-0 rounded-md object-cover"
      />

      <div className="min-w-0">
        <p className="truncate text-sm font-semibold text-white group-hover:text-red-500">
          {title || "Untitled"}
        </p>

        <p className="mt-1 text-xs text-neutral-500">
          {types}
          <span className="mx-1.5 text-red-600">•</span>
          {year || "N/A"}
        </p>
      </div>
    </div>
  );
}

export default MovieMiniCard;
