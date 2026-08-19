import Stars from "@/components/Stars";
import formatDate from "@/lib/utils";
import { backDropUrl } from "@/lib/Variables";
import type { genres, MovieDetails, Videos } from "@/types/Movies";
import { useState } from "react";
import { X } from "lucide-react";

function MovieHero({
  finalTrailer,
  movie,
}: {
  finalTrailer?: Videos;
  movie: MovieDetails;
}) {
  const [showModal, setShowModal] = useState(false);

  if (!movie) return null;
  return (
    <div className="relative min-h-dvh w-full overflow-hidden">
      {/* Background */}
      <img
        src={`${backDropUrl}${movie.backdrop_path}`}
        alt={movie.title}
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover blur-[3px]"
      />

      {/* Overlay */}
      <div
        className="
          absolute inset-0
          bg-linear-to-t
          from-black
          to-black/20
        "
      />

      {showModal && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center  px-4 ">
          <div className="relative w-full max-w-5xl overflow-hidden  ">
            <button onClick={() => setShowModal(false)}>
              <X className="text-stone-200 absolute right-0 z-9999 -top-1 hover:text-stone-400 cursor-pointer" />
            </button>
            <div className="relative aspect-10/9 md:aspect-18/9 w-full">
              <iframe
                src={`https://www.youtube.com/embed/${finalTrailer?.key}`}
                title="TypeScript in React - Full Tutorial"
                className="absolute inset-0 h-full w-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div
        className="
          relative z-10
          flex min-h-dvh
          items-end
          md:items-center
        "
      >
        <div
          className="
            grid
            w-full
            max-w-330
            grid-cols-1
            items-center
            gap-10
            px-4
            pt-20
            pb-12
            md:gap-12
            md:px-6
            md:pt-24
            md:pb-16
            lg:grid-cols-[520px_minmax(0,1fr)]
            lg:gap-0
            lg:px-0
            lg:pt-20
            lg:pb-12
          "
        >
          {/* Poster */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={`${backDropUrl}${movie.poster_path}`}
              alt={movie.title}
              decoding="async"
              className="
                h-72
                w-48
                rounded-2xl
                object-cover
                shadow-2xl
                ring-1
                ring-white/10
                transition-transform
                duration-300
                hover:scale-105

                sm:h-80
                sm:w-53

                md:h-105
                md:w-70

                lg:h-130
                lg:w-auto
              "
            />
          </div>

          {/* Details */}
          <div
            className="
              w-full
              px-2
              pb-6
              text-center

              sm:px-6

              md:ml-10
              md:max-w-2xl
              md:px-0
              md:pb-0
              md:text-center

              lg:ml-16
              lg:text-start
            "
          >
            {/* Title */}
            <h1
              className="
                font-bebas
                whitespace-normal
                text-4xl
                font-bold
                leading-none
                tracking-[-0.001em]
                text-white

                sm:text-5xl

                md:text-6xl

                lg:text-7xl
                lg:whitespace-nowrap
              "
            >
              {movie.title}
            </h1>

            {/* Info */}
            <div
              className="
                mt-4
                flex
                flex-wrap
                justify-center
                gap-2

                sm:gap-3

                lg:justify-start
              "
            >
              <span className="carousal-inf">{movie.vote_count} Votes</span>

              <span className="carousal-inf">
                <span className="hidden sm:inline">
                  {formatDate(movie.release_date)}
                </span>

                <span className="sm:hidden">
                  {movie.release_date.slice(0, 4)}
                </span>
              </span>

              <span className="carousal-inf flex items-center">
                {movie.vote_average.toFixed(1)}/10
                <Stars vote_average={movie.vote_average} size={17} />
              </span>
            </div>

            {/* Genres */}
            <div
              className="
                lg:mt-4
                mt-6
                flex-wrap
                justify-center
                lg:gap-2
                pb-2
                lg:pb-0
                flex
                lg:justify-start
                gap-3
              "
            >
              {movie.genres.map((genre: genres) => (
                <span key={genre.id} className="carousal-inf border-stone-300">
                  {genre.name}
                </span>
              ))}
            </div>

            {/* Overview */}
            <div className="mt-5 md:mt-7">
              <h2
                className="
                  font-bebas
                  text-2xl
                  tracking-wide
                  text-red-600

                  sm:text-3xl
                "
              >
                OVERVIEW
              </h2>

              <p
                className="
                  mx-auto
                  mt-2
                  max-w-xl
                  line-clamp-4
                  font-roboto
                  text-sm
                  font-semibold
                  leading-6
                  text-white/90

                  sm:text-base

                  md:mt-3
                  md:text-lg
                  md:leading-7
                  md:line-clamp-none

                  lg:mx-0
                "
              >
                {movie.overview}
              </p>
            </div>

            {/* Buttons */}
            <div
              className="
                mt-6
                flex
                flex-wrap
                justify-center
                gap-3

                sm:gap-4

                lg:justify-start
              "
            >
              <button
                className="
                  cursor-pointer
                  rounded-full
                  bg-white
                  px-6
                  py-2.5
                  font-roboto
                  text-sm
                  font-bold
                  text-black
                  transition-all
                  duration-300
                  hover:scale-105
                  hover:bg-red-600
                  hover:text-white

                  sm:px-8
                  sm:py-3
                  sm:text-base
                "
              >
                ▶&nbsp; Watch Now
              </button>

              {finalTrailer && (
                <button
                  onClick={() => setShowModal(true)}
                  className="
                  cursor-pointer
                  rounded-full
                  bg-red-600
                  px-6
                  py-2.5
                  font-roboto
                  text-sm
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-red-800

                  sm:px-8
                  sm:py-3
                  sm:text-base
                "
                >
                  ▶&nbsp; Watch Trailer
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieHero;
