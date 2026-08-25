import EpisodeCard from "@/components/Cards/EpisodeCard";
import DetailsSection from "@/features/Shared/DetailsSection";
import PageLoader from "@/features/Shared/PageLoader";
import { useDetails } from "@/features/Shared/useDetails";
import TvSessionHero from "@/features/tv/TvSessionHero";
import { useSessions } from "@/features/tv/useSeason";
import { useSeasonVideos } from "@/features/tv/useSeasonVideos";
import { capitalizeWords } from "@/lib/utils";
import type { TVDetails, TVEpisode } from "@/types/AllTypes";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function TvSession() {
  const { slug, seasonNumber, tvId } = useParams<{
    slug: string;
    tvId: string;
    seasonNumber: string;
  }>();

  const season_number = seasonNumber === "specials" ? 0 : Number(seasonNumber);

  const { season, isSessionLoading } = useSessions(Number(tvId), season_number);

  const { details, isLoadingDetails } = useDetails<TVDetails>(
    Number(tvId),
    "tv",
  );

  const { videos } = useSeasonVideos(Number(tvId), Number(season_number));

  useEffect(() => {
    if (!details?.name) return;
    document.title = slug
      ? `${capitalizeWords(details?.name)} - Season ${
          Number(seasonNumber) === 0 ? "Specials" : seasonNumber
        } | Movie Night`
      : "Movie Night";
  }, [seasonNumber, slug, details?.name]);

  if (isSessionLoading || isLoadingDetails || !season || !details) {
    return <PageLoader message="Loading Tv Shows sessions" />;
  }

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

  return (
    <>
      <PageLoader message="Loading Tv Shows sessions" />

      <TvSessionHero
        season={season}
        tvName={details.name}
        backdropPath={details?.backdrop_path}
        finalTrailer={finalTrailer}
      />

      {season.episodes.length > 0 && (
        <DetailsSection<TVEpisode>
          title="Episodes"
          id={Number(tvId)}
          list
          items={season.episodes}
          renderItem={(item) => (
            <EpisodeCard
              key={item.id}
              episode={item}
              tvName={details.name}
              details={details}
            />
          )}
        />
      )}
    </>
  );
}

export default TvSession;
