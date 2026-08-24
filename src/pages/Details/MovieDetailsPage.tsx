import MovieHero from "@/features/movies/movieDetails/MovieHero";
import PageLoader from "@/features/Shared/PageLoader";
import CastCard from "@/components/Cards/CastCard";
import { useCredits } from "@/features/Shared/useCredits";
import { useDetails } from "@/features/Shared/useDetails";
import { useVideos } from "@/features/Shared/useVideos";
import { useNavigate, useParams } from "react-router-dom";
import type {
  CastMember,
  CollectionMovie,
  Movie,
  MovieResponse,
  MovieVideos,
  Videos,
} from "@/types/Movies";
import TrailerCard from "@/components/Cards/TrailerCard";
import CollectionCard from "@/components/Cards/CollectionCard";
import { useMovieCollection } from "@/features/movies/movieDetails/useMovieCollection";
import { useRecommended } from "@/features/Shared/useRecommended";
import { useSimilar } from "@/features/Shared/useSimilar";
import { useEffect } from "react";
import DetailsSection from "@/features/Shared/DetailsSection";
import { capitalizeWords } from "@/lib/utils";

function MovieDetails() {
  const navigate = useNavigate();
  const { movieId, slug } = useParams<{ movieId: string; slug: string }>();
  const { details, isLoadingDetails } = useDetails<Movie>(
    Number(movieId),
    "movie",
  );
  const { videos } = useVideos<MovieVideos>(Number(movieId), "movie");
  const { credits, isCreditLoading } = useCredits(Number(movieId), "movie");
  const collectionId = details?.belongs_to_collection?.id;
  const { collections } = useMovieCollection(Number(collectionId));
  const { Recommended } = useRecommended<MovieResponse>(
    Number(movieId),
    "movie",
  );
  const { Similar } = useSimilar<MovieResponse>(Number(movieId), "movie");

  useEffect(() => {
    document.title = slug
      ? `${capitalizeWords(slug)} - Movie Night | Movie Night`
      : "Movie Night";
  }, [slug]);

  if (isLoadingDetails || !details || isCreditLoading || !credits)
    return <PageLoader message="Loading Movie Details" />;

  const hasMoreCast = credits?.cast.length > 12;
  const visibleCast = credits?.cast.slice(0, 12);

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
    videos?.results.find((video) => video.site === "YouTube");

  const teasers =
    videos?.results.filter((video) => video.type === "Teaser") ?? [];

  return (
    <>
      <PageLoader key={movieId} message="Loading Movie Details" />

      {details && <MovieHero finalTrailer={finalTrailer} movie={details} />}

      {teasers.length > 2 && (
        <DetailsSection<Videos>
          title="Trailers & Clips"
          horizontal
          id={Number(movieId)}
          items={teasers}
          renderItem={(item) => <TrailerCard key={item.key} video={item} />}
        />
      )}

      {visibleCast.length && (
        <DetailsSection<CastMember>
          id={Number(movieId)}
          title="Cast"
          items={visibleCast}
          renderItem={(item, index) => (
            <CastCard
              key={item.id}
              cast={item}
              id={Number(movieId)}
              showMore={hasMoreCast && index === 11}
              handleSubmit={() => navigate(`/actor/${item.id}/${slug}`)}
            />
          )}
        />
      )}

      {collections && (
        <DetailsSection<CollectionMovie>
          title={collections.name}
          id={collections.id}
          items={collections.parts}
          renderItem={(item) => (
            <CollectionCard key={item.id} data={item} type="movie" />
          )}
        />
      )}

      {Recommended?.results.length && (
        <DetailsSection<Movie>
          title="Recommended Movies"
          id={Number(movieId)}
          items={Recommended.results.slice(0, 12)}
          renderItem={(item) => (
            <CollectionCard key={item.id} data={item} type="movie" />
          )}
        />
      )}

      {Similar?.results.length && (
        <DetailsSection<Movie>
          title="Similar Movies"
          id={Number(movieId)}
          items={Similar.results.slice(0, 12)}
          renderItem={(item) => (
            <CollectionCard key={item.id} data={item} type="movie" />
          )}
        />
      )}
    </>
  );
}

export default MovieDetails;
