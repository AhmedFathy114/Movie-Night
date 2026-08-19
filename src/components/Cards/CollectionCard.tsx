import { slugify } from "@/lib/utils";
import { backDropUrl } from "@/lib/Variables";
import type { CollectionMovie } from "@/types/Movies";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

function CollectionCard({ movie }: { movie: CollectionMovie }) {
  const navigate = useNavigate();
  function handleSubmit() {
    navigate(`/movie/${movie.id}/${slugify(movie.title)}`);
  }

  return (
    <div
      onClick={handleSubmit}
      className="
        group
        mt-3 md:mt-0
        shrink-0
        cursor-pointer
        transition-all duration-300 ease-out
        hover:scale-102
        relative
        rounded-2xl
        flex flex-col text-center gap-3
        aspect-2/3
        w-full
        h-85
      "
    >
      <div className="overflow-hidden rounded-t-2xl ">
        <img
          src={
            movie.poster_path
              ? `${backDropUrl}${movie.poster_path}`
              : "/NoPoster.png"
          }
          alt={movie.title || movie.original_title || "Poster"}
          className="
            h-75
            w-full
            rounded-t-2xl
            object-cover
            ring-1 ring-white/10
          "
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-center bg-linear-to-t from-black via-black/70 to-transparent px-3 pb-3 pt-10 text-center">
        <p className="min-w-0 w-full truncate text-sm font-semibold text-white">
          {movie.title || movie.original_title || "Poster"}
        </p>

        <div className="mt-1 flex items-center justify-center gap-1">
          <Star
            size={16}
            fill="currentColor"
            className="shrink-0 text-red-600"
          />

          <span className="font-roboto text-sm font-bold text-red-600">
            {movie.vote_average?.toFixed(1) ?? "N/A"}/10
          </span>
        </div>
      </div>
    </div>
  );
}

export default CollectionCard;
