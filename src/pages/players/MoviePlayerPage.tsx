/* eslint-disable react-hooks/set-state-in-effect */
import StreamButton from "@/components/StreamButton";
import PageLoader from "@/features/Shared/PageLoader";
import { useStreams } from "@/features/Shared/useStreams";
import { ChevronLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Player() {
  const { movieId, slug } = useParams<{
    movieId: string;
    slug: string;
  }>();
  const navigate = useNavigate();
  const { streams } = useStreams("movie");
  const [activeServerName, setActiveServerName] = useState("");

  useEffect(() => {
    if (!activeServerName && streams.length > 0) {
      setActiveServerName(streams[0].name);
    }
  }, [streams, activeServerName]);

  const activeServer =
    streams.find((server) => server.name === activeServerName) ?? streams[0];

  useEffect(() => {
    if (!window.history.state?.server) {
      window.history.replaceState(
        {
          server: activeServerName,
        },
        "",
        window.location.href,
      );
    }
  }, [activeServerName]);

  const playerRef = useRef<HTMLDivElement>(null);

  const embedUrl = activeServer
    ? activeServer.url_type === "query"
      ? `${activeServer.full_url}${movieId}&tmdb=1`
      : `${activeServer.full_url}${movieId}`
    : "";
  const handleServerChange = (serverName: string) => {
    setActiveServerName(serverName);

    window.history.pushState(
      {
        server: serverName,
      },
      "",
      window.location.href,
    );
  };

  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state?.server) {
        setActiveServerName(event.state.server);
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  console.log("ACTIVE SERVER:", activeServer);
  console.log("EMBED URL:", embedUrl);

  return (
    <>
      <PageLoader message="Loading movie player" key={movieId} />

      <section className="flex min-h-screen flex-col items-center bg-black px-4 pb-10 pt-24">
        <div className="w-full max-w-6xl space-y-4">
          <button
            onClick={() => navigate(`/movie/${movieId}/${slug}`)}
            className="flex w-fit items-center gap-2 rounded-xl bg-neutral-900/50 px-4 py-2 text-sm text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
            <span>Back</span>
          </button>
          <div className="flex items-center gap-2 md:gap-3">
            <div className="h-8 w-1 rounded-full bg-red-700 shadow-lg shadow-red-700/50 md:h-13 md:w-1.5" />

            <h2 className="text-2xl font-bold tracking-wide text-white md:text-3xl lg:text-4xl">
              Watch: <span className="text-gray-400">{slug}</span>
            </h2>
          </div>

          <p className="mt-2 text-sm font-semibold text-gray-400 md:text-[15px]">
            Having trouble? Try switching between different stream sources below
            for the best playback experience.
          </p>

          {/* Servers */}
          <div
            ref={playerRef}
            className="flex flex-wrap justify-center gap-3 pt-2 lg:justify-start"
          >
            {streams?.map((item) => (
              <StreamButton
                key={item.name}
                name={item.name}
                setStreamUrl={() => handleServerChange(item.name)}
                active={item.name === activeServerName}
              />
            ))}
          </div>

          {/* Player */}
          <div className="mt-5 aspect-10/9 lg:aspect-video w-full overflow-hidden rounded-xl bg-neutral-900">
            {embedUrl && (
              <iframe
                key={activeServerName}
                src={embedUrl}
                className="h-full w-full border-0"
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                allowFullScreen
                title={`Watch ${slug}`}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Player;
