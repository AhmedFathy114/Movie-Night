import { slugify } from "@/lib/utils";
import { backDropUrl } from "@/lib/Variables";
import type { TVDetails, TVSeason } from "@/types/Movies";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

function SessionCard({
  session,
  name,
  tvId,
  details,
}: {
  session: TVSeason;
  name: string;
  tvId: number;
  details: TVDetails;
}) {
  const navigate = useNavigate();
  const seasonNumber =
    session.season_number === 0 ? "specials" : session.season_number;
  const slug = name + "-" + (session.name ? session.name : "specials");
  function handleSubmit() {
    navigate(`/tv/season/${tvId}/${seasonNumber}/${slugify(slug)}`);
  }

  console.log(details.poster_path);
  return (
    <>
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
        flex flex-col  gap-3
        aspect-2/3
        w-full
        h-92
      "
      >
        <div className="overflow-hidden rounded-t-2xl ">
          <img
            src={
              session.poster_path
                ? `${backDropUrl}${session.poster_path}`
                : details.poster_path
                  ? `${backDropUrl}${details.poster_path}`
                  : "/NoPoster.png"
            }
            alt={session.name || "Poster"}
            className="
            h-75
            w-full
            rounded-t-2xl
            object-cover
            ring-1 ring-white/10
          "
          />
        </div>

        <div className="text-white font-semibold font-roboto absolute inset-y-0 right-1 top-2 bg-neutral-800 h-fit py-1 px-3 rounded-2xl uppercase text-[13px]">
          {session.episode_count} episode
        </div>
        <div className="absolute inset-x-0 bottom-0 flex flex-col   bg-linear-to-t from-black via-black/70 to-transparent px-3 pb-3 pt-10 ">
          <p className="min-w-0 text-[17px] font-roboto w-full truncate  font-semibold text-white">
            {session.name || "Poster"}
          </p>

          <div className="mt-1 flex items-center gap-1 ">
            <p className="text-gray-500 text-sm font-roboto">
              {session.air_date?.slice(0, 4)}
            </p>

            <Star
              size={12}
              fill="currentColor"
              className="shrink-0 text-red-600"
            />

            <span className="font-roboto text-sm font-bold text-red-600">
              {session.vote_average?.toFixed(1) ?? "N/A"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default SessionCard;
