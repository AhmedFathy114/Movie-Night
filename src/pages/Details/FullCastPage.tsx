import CastCard from "@/components/Cards/CastCard";
import { useCredits } from "@/features/Shared/useCredits";
import { useDetails } from "@/features/Shared/useDetails";
import PageLoader from "@/features/Shared/PageLoader";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { Movie, TVDetails } from "@/types/AllTypes";
import { capitalizeWords } from "@/lib/utils";

function FullCast() {
  const navigate = useNavigate();
  const { id, slug, type } = useParams<{
    id: string;
    slug: string;
    type: string;
  }>();

  const { credits, isCreditLoading } = useCredits(Number(id), type!);
  const { details, isLoadingDetails } = useDetails<Movie | TVDetails>(
    Number(id),
    type!,
  );

  useEffect(
    function () {
      document.title = slug
        ? `${capitalizeWords(slug)} cast & actors | Movie Night`
        : "Movie Night";
    },
    [slug],
  );

  if (isCreditLoading || isLoadingDetails || !credits || !details) {
    return <PageLoader message="Fetching full cast" />;
  }

  return (
    <>
      <PageLoader key={id} message="Fetching full cast" />
      <main className="min-h-dvh bg-black px-4 py-24 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-8">
            <h1
              className="
              font-bebas
              text-4xl
              font-bold
              text-white
              sm:text-5xl
              md:text-6xl
            "
            >
              FULL CAST
            </h1>

            {/* Movie */}
            <div className="mt-4 flex items-center gap-4">
              <h2
                className="
                font-bebas
                text-xl
                font-bold
                text-red-600
                sm:text-2xl
                md:text-3xl
              "
              >
                {"title" in details ? details.title : details.name}
              </h2>

              <span
                className="
                font-roboto
                text-sm
                font-semibold
                text-neutral-400
                sm:text-base
                md:text-lg
              "
              >
                (
                {"release_date" in details
                  ? details.release_date.slice(0, 4)
                  : details.first_air_date.slice(0, 4)}
                )
              </span>
            </div>

            <div className="mt-4 h-1.5 w-20 rounded-full bg-red-600" />
          </div>

          {/* Cast */}
          <div
            className="
            grid
            grid-cols-2
            gap-4
            sm:grid-cols-3
            md:grid-cols-4
            lg:grid-cols-5
            xl:grid-cols-6
          "
          >
            {credits.cast.map((cast) => (
              <CastCard
                key={`${cast.id}-${cast.credit_id}`}
                cast={cast}
                id={Number(id)}
                handleSubmit={() => navigate(`/actor/${cast.id}/${slug}`)}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default FullCast;
