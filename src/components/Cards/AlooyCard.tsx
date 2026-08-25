import { useNavigate } from "react-router-dom";

import { useAlooyPoster } from "@/features/movies/movieDetails/useAlooyPoster";
import type { AlooyItem } from "@/types/Alooy";

interface AlooyCardProps {
  data: AlooyItem;
}

function AlooyCard({ data }: AlooyCardProps) {
  const navigate = useNavigate();

  const { posterUrl, isPosterLoading } = useAlooyPoster(
    data.title.slice(0, 11),
  );

  const handleSubmit = () => {
    navigate(`/alooy/${data.id}/${encodeURIComponent(data.title)}`);
  };

  return (
    <div
      onClick={handleSubmit}
      className="
        group
        relative
        w-full
        cursor-pointer
        overflow-hidden
        rounded-2xl
        transition-all
        duration-300
        ease-out
        hover:scale-[1.03]
      "
    >
      {/* Poster */}
      <div className="relative aspect-5/8 w-full overflow-hidden rounded-2xl">
        {isPosterLoading ? (
          <div className="h-full w-full animate-pulse rounded-2xl bg-neutral-800" />
        ) : (
          <img
            src={posterUrl}
            alt={data.title}
            loading="lazy"
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src = "/NoPoster.png";
            }}
            className="
              h-full
              w-full
              object-cover
              rounded-2xl
              ring-1
              ring-white/10
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
        )}

        {/* Bottom Info */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            flex
            flex-col
            items-center
            justify-end
            bg-linear-to-t
            from-black
            via-black/75
            to-transparent
            px-2
            pb-3
            pt-16
            text-center
          "
        >
          <p
            className="
              w-full
              truncate
              text-xs
              font-semibold
              text-white
              sm:text-sm
            "
          >
            {data.title}
          </p>

          <div className="mt-1 flex items-center justify-center gap-1">
            <span className="text-[11px] font-bold text-red-600 sm:text-xs">
              {data.episodes}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlooyCard;
