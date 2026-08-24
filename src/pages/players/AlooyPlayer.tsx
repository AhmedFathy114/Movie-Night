import PageLoader from "@/features/Shared/PageLoader";
import { useAlooyDetails } from "@/features/Alooy/useAlooyDetails";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

function AlooyPlayer() {
  const { alloyId, slug } = useParams<{
    alloyId: string;
    slug: string;
  }>();

  const { alooyDetails, isAlooyDetailsLoading, isAlooyDetailsError } =
    useAlooyDetails(alloyId);

  const episodes = useMemo(
    () => alooyDetails?.episodes ?? [],
    [alooyDetails?.episodes],
  );

  const [currentEpisode, setCurrentEpisode] = useState<number | null>(null);

  useEffect(() => {
    if (episodes.length === 0) return;

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentEpisode((current) => {
      if (
        current !== null &&
        episodes.some((item) => item.episode === current)
      ) {
        return current;
      }

      return episodes[0].episode;
    });
  }, [episodes]);

  const currentEpisodeData = episodes.find(
    (item) => item.episode === currentEpisode,
  );

  const videoUrl = currentEpisodeData?.url ?? "";

  useEffect(() => {
    if (currentEpisode === null) return;

    const state = window.history.state;

    if (!state?.alooyPlayer) {
      window.history.replaceState(
        {
          ...state,
          alooyPlayer: true,
          episode: currentEpisode,
        },
        "",
        window.location.href,
      );
    }
  }, [currentEpisode]);

  const handleEpisodeChange = (episode: number) => {
    if (episode === currentEpisode) return;

    window.history.pushState(
      {
        ...window.history.state,
        alooyPlayer: true,
        episode,
      },
      "",
      window.location.href,
    );

    setCurrentEpisode(episode);
  };

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      const state = event.state;

      if (!state?.alooyPlayer) return;

      if (typeof state.episode !== "number") return;

      setCurrentEpisode(state.episode);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  if (isAlooyDetailsLoading) {
    return <PageLoader message="Loading Alooy Player" />;
  }

  if (isAlooyDetailsError || !alooyDetails) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-black">
        <p className="text-gray-400">Failed to load Alooy content.</p>
      </section>
    );
  }

  return (
    <section className="flex min-h-screen flex-col items-center bg-black px-4 pb-10 pt-24">
      <div className="w-full max-w-6xl space-y-5">
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
            <span className="ml-2 text-gray-400">
              {alooyDetails.title || slug}
            </span>
          </h2>
        </div>

        {/* Description */}

        <p className="text-sm font-semibold text-gray-400 md:text-[15px]">
          Choose an episode to start watching.
        </p>

        {episodes.length > 0 && (
          <div className="rounded-xl bg-neutral-950 p-4">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-6 w-1 rounded-full bg-red-700" />

              <h3 className="text-lg font-bold text-white md:text-xl">
                Episodes
              </h3>
            </div>

            <div
              className="
                grid
                grid-cols-4
                gap-2
                sm:grid-cols-6
                md:grid-cols-8
                lg:grid-cols-10
              "
            >
              {episodes.map((item) => (
                <button
                  key={item.episode}
                  type="button"
                  onClick={() => handleEpisodeChange(item.episode)}
                  className={`
                    rounded-lg
                    px-3
                    py-2
                    text-sm
                    font-bold
                    transition-colors
                    ${
                      currentEpisode === item.episode
                        ? "bg-red-700 text-white shadow-lg shadow-red-700/30"
                        : "bg-neutral-800 text-gray-300 hover:bg-neutral-700 hover:text-white"
                    }
                  `}
                >
                  {item.episode}
                </button>
              ))}
            </div>
          </div>
        )}

        <div
          className="
            aspect-video
            w-full
            overflow-hidden
            rounded-xl
            bg-neutral-900
          "
        >
          {videoUrl ? (
            <video
              key={videoUrl}
              src={videoUrl}
              className="h-full w-full"
              controls
              autoPlay
              playsInline
            />
          ) : (
            <div className="flex h-full items-center justify-center text-gray-500">
              No video available.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default AlooyPlayer;
