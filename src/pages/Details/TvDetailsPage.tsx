import CastCard from "@/components/Cards/CastCard";
import CollectionCard from "@/components/Cards/CollectionCard";
import SessionCard from "@/components/Cards/SessionCard";
import TrailerCard from "@/components/Cards/TrailerCard";
import DetailsSection from "@/features/Shared/DetailsSection";
import PageLoader from "@/features/Shared/PageLoader";
import { useCredits } from "@/features/Shared/useCredits";
import { useDetails } from "@/features/Shared/useDetails";
import { useRecommended } from "@/features/Shared/useRecommended";
import { useSimilar } from "@/features/Shared/useSimilar";
import { useVideos } from "@/features/Shared/useVideos";
import TvShowHero from "@/features/tv/TvShowHero";
import { capitalizeWords } from "@/lib/utils";
import type {
  CastMember,
  MovieVideos,
  TVDetails,
  TVResponse,
  TVSeason,
  TVShow,
  Videos,
} from "@/types/Movies";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
function TvDetails() {
  const navigate = useNavigate();
  const { tvId, slug } = useParams<{ tvId: string; slug: string }>();
  const { details, isLoadingDetails } = useDetails<TVDetails>(
    Number(tvId),
    "tv",
  );
  const { credits } = useCredits(Number(tvId), "tv");
  const { videos } = useVideos<MovieVideos>(Number(tvId), "tv");
  const { Recommended } = useRecommended<TVResponse>(Number(tvId), "tv");
  const { Similar } = useSimilar<TVResponse>(Number(tvId), "tv");

  useEffect(() => {
    document.title = slug
      ? `${capitalizeWords(slug)} - tv show Night | Movie Night`
      : "Movie Night";
  }, [slug]);

  if (isLoadingDetails || !credits)
    return <PageLoader message="Loading Tv Shows Details" key={tvId} />;

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
    videos?.results.filter(
      (video) => video.type === "Teaser" || video.type === "Trailer",
    ) ?? [];

  const hasMoreCast = credits?.cast.length > 12;
  const visibleCast = credits?.cast.slice(0, 12);

  return (
    <>
      <PageLoader message="Loading Tv Shows Details" />

      {details && <TvShowHero tv={details} finalTrailer={finalTrailer} />}

      {teasers.length > 0 && (
        <DetailsSection<Videos>
          title="Trailers & Clips"
          horizontal
          id={Number(tvId)}
          items={teasers}
          renderItem={(item) => <TrailerCard key={item.key} video={item} />}
        />
      )}

      {details?.number_of_seasons && (
        <DetailsSection<TVSeason>
          title="Seasons"
          id={Number(tvId)}
          items={details?.seasons}
          renderItem={(item) => (
            <SessionCard
              key={item.id}
              session={item}
              name={details.name}
              tvId={Number(tvId)}
              details={details}
            />
          )}
        />
      )}

      {visibleCast.length && (
        <DetailsSection<CastMember>
          id={Number(tvId)}
          title="Cast"
          items={visibleCast}
          renderItem={(item, index) => (
            <CastCard
              key={item.id}
              type="tv"
              cast={item}
              id={Number(tvId)}
              showMore={hasMoreCast && index === 11}
              handleSubmit={() => navigate(`/actor/${item.id}/${slug}?`)}
            />
          )}
        />
      )}

      {Recommended?.results.length && (
        <DetailsSection<TVShow>
          title="Recommended Movies"
          id={Number(tvId)}
          items={Recommended.results.slice(0, 12)}
          renderItem={(item) => (
            <CollectionCard key={item.id} data={item} type="tv" />
          )}
        />
      )}

      {Similar?.results.length && (
        <DetailsSection<TVShow>
          title="Similar Movies"
          id={Number(tvId)}
          items={Similar.results.slice(0, 12)}
          renderItem={(item) => (
            <CollectionCard key={item.id} data={item} type="tv" />
          )}
        />
      )}
    </>
  );
}

export default TvDetails;
