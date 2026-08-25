import Stars from "@/components/Stars";
import { backDropUrl } from "@/lib/Variables";
import type { genres, Movie } from "@/types/AllTypes";
import { useGenres } from "../../Shared/useGeners";
import { useNavigate } from "react-router-dom";
import { slugify } from "@/lib/utils";

function CarouselSwiperSlide({ movie }: { movie: Movie }) {
  const { movieGenres } = useGenres(movie.genre_ids);
  const navigate = useNavigate();

  function handleSubmit() {
    navigate(`/movie/${movie.id}/${slugify(movie.title)}`);
  }

  return (
    <>
      <div className="relative h-[75vh]  w-full md:h-screen md:min-h-0 pt-10">
        <img
          src={`${backDropUrl}${movie.backdrop_path}`}
          alt={movie.title}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div
          className="
                  absolute inset-0
                  bg-linear-to-t
                  from-black to-black/20
                "
        />

        <div className="relative z-10 flex h-full items-end md:items-center">
          <div
            className="
                    w-full
                    px-5 pb-16
                    sm:px-8
                    md:ml-16 md:max-w-2xl md:px-0 md:pb-0
                    lg:ml-24
                  "
          >
            <h1
              className="
                    font-bebas
                    text-4xl
                    leading-none
                    tracking-wide
                    text-white
                    sm:text-5xl
                    md:text-7xl
                    whitespace-nowrap
                  "
            >
              {movie.title}
            </h1>

            <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
              <span className="carousal-inf flex items-center">
                {movie.vote_average.toFixed(1)}/10
                <Stars vote_average={movie.vote_average} size={17} />
              </span>

              <span className="carousal-inf">({movie.vote_count} Votes)</span>

              <span className="carousal-inf">
                <span className="hidden md:inline">{movie.release_date}</span>

                <span className="inline md:hidden">
                  {movie.release_date.slice(0, 4)}
                </span>
              </span>
            </div>

            {/* Genres */}
            <div className="mt-3 md:flex flex-wrap gap-2 hidden">
              {movieGenres?.map((genre: genres) => (
                <span
                  key={genre.id}
                  className="
                        carousal-inf
                      "
                >
                  {genre.name}
                </span>
              ))}
            </div>

            {/* Overview */}
            <div className="mt-5 md:mt-8">
              <h2 className="font-bebas text-2xl tracking-wide text-red-600 sm:text-3xl">
                OVERVIEW
              </h2>

              <p
                className="
                        mt-2
                        max-w-xl
                        line-clamp-3
                        text-sm
                        font-semibold
                        leading-6
                        text-white/90
                        sm:text-base
                        md:mt-3
                        md:text-lg
                        md:leading-7
                        md:line-clamp-none
                        font-roboto
                      "
              >
                {movie.overview}
              </p>
            </div>

            <button
              onClick={handleSubmit}
              className="
                    mt-5
                    rounded-lg
                    border border-neutral-400
                    bg-white/10
                    px-6 md:py-2.5 py-2 
                    text-sm
                    font-semibold
                    text-white
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:bg-red-600
                    hover:text-white
                    hover:border-red-600
                    sm:px-8
                    sm:py-3
                    sm:text-base
                    font-roboto
                  "
            >
              View Movie
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarouselSwiperSlide;
