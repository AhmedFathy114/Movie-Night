import { backDropUrl } from "@/lib/Variables";
import type { CastMember } from "@/types/Movies";
import { useNavigate, useParams } from "react-router-dom";

function CastCard({
  cast,
  showMore = false,
  handleSubmit,
}: {
  cast: CastMember;
  showMore?: boolean;
  handleSubmit?: () => void;
}) {
  const navigate = useNavigate();
  const { movieId, slug } = useParams<{ movieId: string; slug: string }>();
  return (
    <>
      <div
        onClick={showMore ? undefined : handleSubmit}
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
              cast.profile_path
                ? `${backDropUrl}${cast.profile_path}`
                : "/NoPoster.png"
            }
            alt={cast.name || cast.original_name || "Poster"}
            className="
            h-75
            w-full
            rounded-t-2xl
            object-cover
            ring-1 ring-white/10
          "
          />
        </div>

        {showMore && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center bg-black/60"
            onClick={() => navigate(`/movie/cast/${movieId}/${slug}`)}
          >
            <span className="text-5xl font-bold text-white">+</span>

            <span className="mt-1 font-roboto text-sm font-semibold text-white">
              Show More
            </span>
          </div>
        )}

        {!showMore && (
          <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black via-black/70 to-transparent px-3 pb-3 pt-10">
            <p className="truncate text-sm font-semibold text-white">
              {cast.name || cast.original_name || "N/A"}
            </p>

            <p className="truncate text-xs text-neutral-400">
              {cast.character}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default CastCard;
