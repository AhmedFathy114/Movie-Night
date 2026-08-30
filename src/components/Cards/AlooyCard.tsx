import { useNavigate } from "react-router-dom";
import type { AlooyItem } from "@/types/Alooy";

interface AlooyCardProps {
  data: AlooyItem;
}

function AlooyCard({ data }: AlooyCardProps) {
  const navigate = useNavigate();

  function handleSubmit() {
    navigate(
      `/alooy/player?url=${encodeURIComponent(data.url)}&title=${encodeURIComponent(data.title)}`,
    );
  }

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
      <div className="relative aspect-5/8 w-full overflow-hidden rounded-2xl">
        <img
          src={data.poster}
          alt={data.title}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = "/NoPoster.png";
          }}
          className="
            h-full
            w-full
            rounded-2xl
            object-cover
            ring-1
            ring-white/10
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        <div
          className="
            absolute
            inset-x-0
            bottom-0
            z-10
            flex
            flex-col
            items-center
            justify-end
            bg-linear-to-t
            from-black
            via-black/70
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

          {data.type === "series" && (
            <span className="mt-1 text-[11px] font-bold text-red-600 sm:text-xs">
              {data.episodes ?? 0}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default AlooyCard;
