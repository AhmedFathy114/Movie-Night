import { ArrowLeftIcon, X } from "lucide-react";
import { useState } from "react";
import { backDropUrl } from "@/lib/Variables";
import type { TVDetails, TvSessionHeroProps } from "@/types/AllTypes";
import Stars from "@/components/Stars";
import formatDate, { slugify } from "@/lib/utils";
import { Link, useParams } from "react-router-dom";
import { useDetails } from "../Shared/useDetails";

function TvSessionHero({
  tvName,
  backdropPath,
  season,
  finalTrailer,
}: TvSessionHeroProps) {
  const [showModal, setShowModal] = useState(false);
  const { tvId } = useParams<{ tvId: string }>();
  const { details } = useDetails<TVDetails>(Number(tvId), "tv");

  return (
    <div className="relative min-h-dvh w-full overflow-hidden">
      
      <img
        src={`${backDropUrl}${backdropPath}`}
        alt={tvName}
        decoding="async"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          blur-[3px]
        "
      />

      
      <div
        className="
          absolute
          inset-0
          bg-linear-to-t
          from-black
          via-black/60
          to-black/20
        "
      />

      
      {showModal && finalTrailer && (
        <div
          className="
            fixed
            inset-0
            z-9999
            flex
            items-center
            justify-center
            bg-black/80
            px-4
          "
        >
          <div className="relative w-full max-w-5xl overflow-hidden">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="
                absolute
                right-0
                top-0
                z-9999
                cursor-pointer
                text-stone-200
                transition
                hover:text-stone-400
              "
            >
              <X size={28} />
            </button>

            <div className="relative aspect-10/9 w-full md:aspect-18/9">
              <iframe
                src={`https://www.youtube.com/embed/${finalTrailer.key}`}
                title="Season Trailer"
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

      
      <div
        className="
          relative
          z-10
          flex
          min-h-dvh
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
            pt-24
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
          
          <div className="text-center ">
            <Link
              className="inline-flex items-center gap-2 text-gray-400 hover:text-red-500 transition-colors mb-8 group self-start font-roboto"
              to={`/tv/${tvId}/${slugify(`${details?.name}-${details?.first_air_date.slice(0, 4)}`)}`}
            >
              <span className="group-hover:-translate-x-1 transition-transform lg:ps-30">
                <ArrowLeftIcon />
              </span>
              <span> Back To {tvName}</span>
            </Link>
            <div className="flex justify-center lg:justify-end">
              <img
                src={`${backDropUrl}${season.poster_path || details?.poster_path}`}
                alt={`${tvName} ${season.name}`}
                decoding="async"
                className="
                h-100
                w-66
                rounded-2xl
                object-cover
                shadow-2xl
                ring-1
                ring-white/10
                transition-transform
                duration-300
                hover:scale-105

                sm:h-105
                sm:w-70

                md:h-120
                md:w-80

                lg:h-130
                lg:w-auto
              "
              />
            </div>
          </div>

          
          <div
            className="
              w-full
              px-2
              pb-6
              text-center

              sm:px-6

              md:ml-10
              md:max-w-4xl
              md:px-0
              md:pb-0

              lg:ml-16
              lg:text-start
            "
          >
            
            <h1
              className="
                font-bebas
                text-5xl
                font-bold
                leading-none
                text-white

                sm:text-6xl
                md:text-7xl
              "
            >
              {tvName}
            </h1>

            
            <h2
              className="
                mt-5
                font-bebas
                text-3xl
                font-bold
                tracking-wide
                text-red-600

                sm:text-4xl
                md:text-5xl
              "
            >
              {season.season_number === 0
                ? "SPECIALS"
                : `SEASON ${season.season_number}`}
            </h2>

            
            <div
              className="
                mt-6
                flex
                flex-wrap
                justify-center
                gap-3

                lg:justify-start
              "
            >
              <span className="carousal-inf">
                {season.air_date ? formatDate(season.air_date) : "N/A"}
              </span>

              <span className="carousal-inf">
                {season.episodes.length} Episodes
              </span>

              <span className="carousal-inf flex items-center gap-2">
                {season.vote_average.toFixed(1)}/10
                <Stars vote_average={season.vote_average} size={17} />
              </span>
            </div>

            
            <div className="mt-8">
              <h3
                className="
                  font-bebas
                  text-2xl
                  tracking-wide
                  text-white

                  sm:text-3xl
                "
              >
                Overview
              </h3>

              <p
                className="
                  mt-3
                  max-w-4xl
                  font-roboto
                  text-base
                  font-semibold
                  leading-7
                  text-gray-400

                  sm:text-lg
                  md:text-xl
                  md:leading-8
                "
              >
                {season.overview ||
                  `season ${season.season_number} of ${tvName} ${season.air_date ? `on ${formatDate(season.air_date)}` : ""}`}
              </p>
            </div>

            
            {finalTrailer && (
              <div
                className="
                  mt-8
                  flex
                  justify-center

                  lg:justify-start
                "
              >
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="
                    cursor-pointer
                    rounded-full
                    bg-red-600
                    px-7
                    py-3
                    font-roboto
                    text-sm
                    font-bold
                    text-white
                    shadow-lg
                    transition-all
                    duration-300
                    hover:bg-red-700
                    hover:scale-105

                    sm:px-9
                    sm:py-3.5
                    sm:text-base
                  "
                >
                  ▶&nbsp; Watch Trailer
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TvSessionHero;
