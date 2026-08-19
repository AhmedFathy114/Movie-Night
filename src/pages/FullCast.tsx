import CastCard from "@/components/Cards/CastCard";
import { useMovieCredits } from "@/features/movies/useMovieCredits";
import { useMovieDetails } from "@/features/movies/useMovieDetails";
import PageLoader from "@/features/Shared/PageLoader";
import { useParams } from "react-router-dom";

function FullCast() {
  const { movieId } = useParams<{ movieId: string }>();

  const id = Number(movieId);

  const { credits, isCreditLoading } = useMovieCredits(id);
  const { movie, isMovieLoading } = useMovieDetails(id);

  if (isCreditLoading || isMovieLoading || !credits || !movie) {
    return <PageLoader message="Fetching full cast" />;
  }

  return (
    <>
      <PageLoader key={movieId} message="Fetching full cast" />
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
                {movie.title}
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
                ({movie.release_date.slice(0, 4)})
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
              <CastCard key={`${cast.id}-${cast.credit_id}`} cast={cast} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default FullCast;
