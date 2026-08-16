import { backDropUrl } from "@/lib/constants";
import type { Movie } from "@/types/MovieResponse";
import Stars from "./Stars";

function MovieCard({ movie }: { movie: Movie }) {
  return (
    <div
      className="
        group
        mt-5
        w-55
        md:w-58
        shrink-0
        cursor-pointer
        transition-transform
        duration-300
        ease-out
        hover:scale-105
        ms-1
        
      "
    >
      <div className="overflow-hidden rounded-2xl">
        <img
          src={
            movie.backdrop_path
              ? `${backDropUrl}${movie.backdrop_path}`
              : "/NoPoster.png"
          }
          alt={movie.title}
          className="
            aspect-2/2.5
            md:h-100
            h-70
            w-full
            object-cover
            rounded-2xl
            ring-1
            ring-white/10
            transition-transform
            duration-300
            ease-out
            group-hover:scale-[1.04]
          "
        />
      </div>

      <h3
        className="
          px-1
          pt-3
          md:text-lg
          font-roboto
          font-semibold
          leading-tight
          text-white
          line-clamp-2
          transition-colors
          duration-200
          group-hover:text-red-500
          text-base
        "
      >
        {movie.title || movie.original_title || movie.name}
      </h3>

      <p className="text-neutral-400 text-sm font-extrabold font-roboto pt-1">
        {movie.release_date ? `Release Date : ${movie.release_date}` : `First Air Date : ${movie.first_air_date}`}
      </p>

      <div className="mt-1 -ms-1.25"> 
        <Stars vote_average={movie.vote_average} key={movie.id} size={20} />
      </div>
    </div>
  );
}

export default MovieCard;
