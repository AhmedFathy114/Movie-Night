import DetailsSection from "@/features/movies/movieDetails/DetailsSection";
import MovieHero from "@/features/movies/movieDetails/MovieHero";
import PageLoader from "@/features/Shared/PageLoader";
import CastCard from "@/components/Cards/CastCard";
import { useMovieCredits } from "@/features/movies/movieDetails/useMovieCredits";
import { useMovieDetails } from "@/features/movies/movieDetails/useMovieDetails";
import { useMovieVideos } from "@/features/movies/movieDetails/useMovieVideos";
import { useParams } from "react-router-dom";
import type {
  CastMember,
  CollectionMovie,
  Movie,
  Videos,
} from "@/types/Movies";
import TrailerCard from "@/components/Cards/TrailerCard";
import CollectionCard from "@/components/Cards/CollectionCard";
import { useMovieCollection } from "@/features/movies/movieDetails/useMovieCollection";
import { useMovieRecommended } from "@/features/movies/movieDetails/useMovieRecommended";
import { useMovieSimilar } from "@/features/movies/movieDetails/useMovieSimilar";

function MovieDetails() {
  const { movieId } = useParams<{ movieId: string }>();
  const { movie, isMovieLoading } = useMovieDetails(Number(movieId));
  const { videos } = useMovieVideos(Number(movieId));
  const { credits, isCreditLoading } = useMovieCredits(Number(movieId));
  const collectionId = movie?.belongs_to_collection?.id;
  const { collections, isCollectionLoading } = useMovieCollection(
    Number(collectionId),
  );
  const { Recommended, isRecommendedLoading } = useMovieRecommended(
    Number(movieId),
  );
  const { Similar, isSimilarLoading } = useMovieSimilar(Number(movieId));

  if (
    isMovieLoading ||
    !movie ||
    isCreditLoading ||
    !credits ||
    (collectionId && isCollectionLoading) ||
    isRecommendedLoading ||
    isSimilarLoading
  )
    return <PageLoader message="Loading Movie Details" />;

  const hasMoreCast = credits?.cast.length > 12;
  const visibleCast = credits.cast.slice(0, 12);

  const finalTrailer =
    videos?.results.find(
      (video) =>
        video.site === "YouTube" &&
        video.type === "Trailer" &&
        video.name.toLowerCase().includes("final trailer"),
    ) ??
    videos?.results.find(
      (video) =>
        video.site === "YouTube" &&
        video.type === "Trailer" &&
        video.name.toLowerCase().includes("official trailer"),
    ) ??
    videos?.results.find(
      (video) => video.site === "YouTube" && video.type === "Trailer",
    );

  const teasers =
    videos?.results.filter((video) => video.type === "Teaser") ?? [];

  return (
    <>
      <PageLoader key={movieId} message="Fetching Movie Details" />

      <MovieHero finalTrailer={finalTrailer} movie={movie} />

      {teasers.length > 2 && (
        <DetailsSection<Videos>
          title="Trailers & Clips"
          horizontal
          movieId={Number(movieId)}
          items={teasers}
          renderItem={(item) => <TrailerCard key={item.key} video={item} />}
        />
      )}

      {visibleCast.length && (
        <DetailsSection<CastMember>
          movieId={Number(movieId)}
          title="Cast"
          items={visibleCast}
          renderItem={(item, index) => (
            <CastCard
              key={item.id}
              cast={item}
              showMore={hasMoreCast && index === 11}
            />
          )}
        />
      )}

      {collections && (
        <DetailsSection<CollectionMovie>
          title={collections.name}
          movieId={collections.id}
          items={collections.parts}
          renderItem={(item) => <CollectionCard key={item.id} movie={item} />}
        />
      )}

      {Recommended?.results.length && (
        <DetailsSection<Movie>
          title="Recommended Movies"
          movieId={Number(movieId)}
          items={Recommended.results.slice(0, 12)}
          renderItem={(item) => <CollectionCard key={item.id} movie={item} />}
        />
      )}

      {Similar?.results.length && (
        <DetailsSection<Movie>
          title="Similar Movies"
          movieId={Number(movieId)}
          items={Similar.results.slice(0, 12)}
          renderItem={(item) => <CollectionCard key={item.id} movie={item} />}
        />
      )}
    </>
  );
}

export default MovieDetails;
