import { backDropUrl } from "@/lib/Variables";
import type { TMDBItem } from "@/types/Movies";
import Stars from "../Stars";

function MovieCard({ movie }: { movie: TMDBItem }) {
  const imagePath =
    "profile_path" in movie ? movie.profile_path : movie.poster_path;

  const title =
    "title" in movie ? movie.title || movie.original_title : movie.name;

  return (
    <div
      className="
        group
        mt-3 md:mt-0
        w-55 md:w-58
        shrink-0
        cursor-pointer
        transition-all duration-300 ease-out
        hover:scale-105
        ms-1
        relative
      "
    >
      <div className="overflow-hidden rounded-2xl">
        <div
          className="
            absolute inset-0 z-10
            bg-neutral-900/15
            transition-colors duration-300
            group-hover:bg-transparent
          "
        />

        <img
          src={imagePath ? `${backDropUrl}${imagePath}` : "/NoPoster.png"}
          alt={title || "Poster"}
          className="
            h-70 md:h-90
            w-full
            rounded-2xl
            object-cover
            ring-1 ring-white/10
            transition-transform duration-300 ease-out
            group-hover:scale-[1.04]
          "
        />
      </div>

      <h3
        className="
          px-1 pt-3
          text-base md:text-lg
          font-roboto font-semibold leading-tight
          text-white line-clamp-2
          transition-colors duration-200
          group-hover:text-red-500
        "
      >
        {title || "N/A"}
      </h3>

      <div className="pt-1 text-sm font-extrabold font-roboto text-neutral-400">
        {"release_date" in movie ? (
          <p>Release Date: {movie.release_date || "N/A"}</p>
        ) : "first_air_date" in movie ? (
          <p>First Air Date: {movie.first_air_date || "N/A"}</p>
        ) : "known_for_department" in movie ? (
          <p>Known For: {movie.known_for_department || "N/A"}</p>
        ) : (
          <p>N/A</p>
        )}
      </div>

      {"vote_average" in movie && movie.vote_average > 0 ? (
        <div className="mt-1 -ms-1.25">
          <Stars vote_average={movie.vote_average} size={20} />
        </div>
      ) : "known_for_department" in movie ? (
        ""
      ) : (
        <div className="mt-1 -ms-1.25">
          <Stars vote_average={0} size={20} />
        </div>
      )}
    </div>
  );
}

export default MovieCard;
