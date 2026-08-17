import { backDropUrl } from "@/lib/Variables";
import type { TMDBItem } from "@/types/Movies";

function MovieMiniCard({ movie }: { movie: TMDBItem }) {
  const isMovie = movie.media_type === "movie";
  const isTV = movie.media_type === "tv";

  const title = isMovie ? movie.title : isTV ? movie.name : undefined;

  const imagePath =
    isMovie || isTV ? movie.poster_path || movie.backdrop_path : undefined;

  const year = isMovie
    ? movie.release_date?.slice(0, 4)
    : "first_air_date" in movie
      ? movie.first_air_date?.slice(0, 4)
      : undefined;

  const type = isMovie ? "Movie" : "TV Show";

  return (
    <div className="group flex min-h-20 cursor-pointer items-center gap-3 px-3 py-2.5 hover:bg-neutral-800">
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
          {type}
          <span className="mx-1.5 text-red-600">•</span>
          {year || "N/A"}
        </p>
      </div>
    </div>
  );
}

export default MovieMiniCard;
