import { Star } from "lucide-react";
import { backDropUrl } from "@/lib/Variables";
import type { TVDetails, TVEpisode } from "@/types/Movies";
import { Link } from "react-router-dom";
import { FaClock } from "react-icons/fa";
import { slugify } from "@/lib/utils";

function EpisodeCard({
  episode,
  tvName,
  details,
}: {
  episode: TVEpisode;
  tvName: string;
  details: TVDetails;
}) {
  return (
    <Link
      to={`/tv/player/${episode.show_id}/${episode.season_number}/${episode.episode_number}/${slugify(
        `${tvName}-${episode.name}`,
      )}`}
      className="group bg-neutral-900/40 border border-white/5 rounded-2xl overflow-hidden hover:bg-neutral-900/60 transition-all duration-300 flex flex-col md:flex-row cursor-pointer"
    >
      {/* Poster */}
      <div
        className="
      relative
      h-56
      w-full
      shrink-0
      overflow-hidden

      md:h-full
      md:w-90
    "
      >
        <img
          src={
            episode.still_path
              ? `${backDropUrl}${episode.still_path}`
              : details.backdrop_path
                ? `${backDropUrl}${details.backdrop_path}`
                : "/NoPoster.png"
          }
          alt={episode.name}
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        <span
          className="
        absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1.5 rounded
      "
        >
          EP {episode.episode_number}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-center">
        <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
          <h3
            className="
          text-xl font-bold group-hover:text-red-500 transition-colors font-roboto
        "
          >
            {episode.name}
          </h3>

          <div
            className="
          flex
          shrink-0
          items-center
          gap-4
          font-roboto
          text-sm
          font-semibold
          text-slate-400
          md:gap-7
          md:text-lg
        "
          >
            {episode.runtime > 0 && (
              <span className="flex items-center gap-1.5 md:gap-2">
                <FaClock
                  size={15}
                  fill="currentColor"
                  className="text-red-800"
                />
                {episode.runtime} min
              </span>
            )}

            <span>{episode.air_date}</span>
          </div>
        </div>

        <p
          className="
        text-gray-400 line-clamp-2 md:line-clamp-3 text-sm md:text-base font-roboto
      "
        >
          {episode.overview || "No overview available for this episode"}
        </p>

        <div className="mt-4 flex items-center gap-2">
          <Star size={18} fill="currentColor" className="text-yellow-500" />

          <span className="font-roboto text-base font-bold text-yellow-500">
            {episode.vote_average.toFixed(1)}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default EpisodeCard;
