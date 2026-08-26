/* eslint-disable react-hooks/set-state-in-effect */
import StreamButton from "@/components/StreamButton";
import PageLoader from "@/features/Shared/PageLoader";
import { useDetails } from "@/features/Shared/useDetails";
import { useStreams } from "@/features/Shared/useStreams";
import EpisodesSection from "@/features/tv/EpisodeSection";
import { useSessions } from "@/features/tv/useSeason";
import { GetStreams } from "@/services/shared/GetStreams";
import type { TVDetails } from "@/types/AllTypes";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function TvPlayer() {
  const { tvId, seasonNumber, episodeNumber, slug } = useParams<{
    tvId: string;
    seasonNumber: string;
    episodeNumber: string;
    slug: string;
  }>();

  const { streams } = useStreams("tv");

  const [currentEpisode, setCurrentEpisode] = useState(Number(episodeNumber));

  useEffect(() => {
    const episode = Number(episodeNumber);
    setCurrentEpisode(episode);
  }, [episodeNumber]);

  const [currentSeason, setCurrentSeason] = useState(
    seasonNumber === "specials" ? 0 : Number(seasonNumber),
  );

  const [activeServerName, setActiveServerName] = useState("");

  useEffect(() => {
    if (streams.length > 0 && !activeServerName) {
      setActiveServerName(streams[0].name);
    }
  }, [streams, activeServerName]);

  useEffect(() => {
    if (!window.history.state?.server) {
      window.history.replaceState(
        {
          season: currentSeason,
          episode: currentEpisode,
          server: activeServerName,
        },
        "",
        window.location.href,
      );
    }
  }, [activeServerName, currentEpisode, currentSeason]);

  const { details } = useDetails<TVDetails>(Number(tvId), "tv");

  const { season } = useSessions(Number(tvId), currentSeason);

  const activeServer = streams.find(
    (server) => server.name === activeServerName,
  )!;

  const embedUrl =
    activeServer?.name === "MultiEmbed"
      ? `${activeServer?.full_url}${tvId}&tmdb=1&s=${currentSeason}&e=${currentEpisode}`
      : activeServer?.url_type === "query"
        ? `${activeServer?.full_url}${tvId}&type=tv&s=${currentSeason}&e=${currentEpisode}`
        : `${activeServer?.full_url}${tvId}/${currentSeason}/${currentEpisode}`;

  const handleEpisodeChange = (episode: number) => {
    setCurrentEpisode(episode);

    window.history.pushState(
      {
        season: currentSeason,
        episode,
      },
      "",
      `/tv/player/${tvId}/${currentSeason}/${episode}/${slug}`,
    );
  };

  const handleSeasonChange = (newSeason: number) => {
    const newEpisode = 1;

    setCurrentSeason(newSeason);
    setCurrentEpisode(newEpisode);

    const seasonPath = newSeason === 0 ? "specials" : String(newSeason);

    window.history.pushState(
      {
        season: newSeason,
        episode: newEpisode,
      },
      "",
      `/tv/player/${tvId}/${seasonPath}/${newEpisode}/${slug}`,
    );
  };

  const handleServerChange = (serverName: string) => {
    setActiveServerName(serverName);

    window.history.pushState(
      {
        season: currentSeason,
        episode: currentEpisode,
        server: serverName,
      },
      "",
      window.location.href,
    );
  };

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const historyState = event.state;

      if (!historyState) return;

      if (historyState.season !== undefined) {
        setCurrentSeason(historyState.season);
      }

      if (historyState.episode !== undefined) {
        setCurrentEpisode(historyState.episode);
      }

      if (historyState.server) {
        setActiveServerName(historyState.server);
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.prefetchQuery({
      queryKey: ["streams"],
      queryFn: GetStreams,
      staleTime: 1000 * 60 * 60,
    });
  }, [queryClient]);

  return (
    <>
      <PageLoader message="Loading Tv Player" />
      <section className="flex min-h-screen flex-col items-center bg-black px-4 pb-10 pt-24">
        <div className="w-full max-w-6xl space-y-4">
          {/* Title */}
          <div className="flex items-center gap-2 md:gap-3">
            <div
              className="
            h-8
            w-1
            rounded-full
            bg-red-700
            shadow-lg
            shadow-red-700/50
            md:h-13
            md:w-1.5
            "
            />

            <h2
              className="
            text-2xl
              font-bold
              tracking-wide
              text-white
              md:text-3xl
              lg:text-4xl
              "
            >
              Watch:
              <span className="ml-2 text-gray-400">{slug}</span>
            </h2>
          </div>

          {/* Description */}
          <p className="mt-2 text-sm font-semibold text-gray-400 md:text-[15px]">
            Having trouble? Try switching between different stream sources below
            for the best playback experience.
          </p>

          {/* Servers */}
          <div className="flex flex-wrap justify-center gap-3 pt-2 lg:justify-start">
            {streams.map((server) => (
              <StreamButton
                key={server.name}
                name={server.name}
                setStreamUrl={() => handleServerChange(server.name)}
                active={activeServerName === server.name}
              />
            ))}
          </div>

          {/* Player */}
          <div
            className="
            mt-5
            aspect-10/9
            w-full
            overflow-hidden
            rounded-xl
            bg-neutral-900
            lg:aspect-video
          "
          >
            <iframe
              key={embedUrl}
              src={embedUrl}
              className="h-full w-full border-0"
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
              allowFullScreen
              title={`Watch ${slug}`}
            />
          </div>

          {/* Episodes */}
          {details && season && (
            <EpisodesSection
              episodes={season.episodes}
              currentEpisode={currentEpisode}
              currentSeason={currentSeason}
              seasons={details.seasons}
              onEpisodeChange={handleEpisodeChange}
              onSeasonChange={handleSeasonChange}
            />
          )}
        </div>
      </section>
    </>
  );
}

export default TvPlayer;
