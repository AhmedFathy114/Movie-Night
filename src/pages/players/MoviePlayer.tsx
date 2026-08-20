import StreamButton from "@/components/StreamButton";
import PageLoader from "@/features/Shared/PageLoader";
import { streamData } from "@/lib/streamData";
import { useRef, useState } from "react";
import { useParams } from "react-router-dom";

function Player() {
  const { movieId, slug } = useParams<{
    movieId: string;
    slug: string;
  }>();

  const [activeServer, setActiveServer] = useState(streamData[0]);
  const playerRef = useRef<HTMLDivElement>(null);

  const embedUrl = activeServer
    ? activeServer.urlType === "query"
      ? `${activeServer.full_url}${movieId}&tmdb=1`
      : `${activeServer.full_url}${movieId}`
    : "";

  return (
    <>
      <PageLoader message="Loading movie player" key={movieId} />

      <section className="flex min-h-screen flex-col items-center bg-black px-4 pb-10 pt-24">
        <div className="w-full max-w-6xl space-y-4">
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
            {streamData.map((item) => (
              <StreamButton
                key={item.name}
                name={item.name}
                full_url={item.full_url}
                setStreamUrl={() => setActiveServer(item)}
                active={item.name === activeServer.name}
              />
            ))}
          </div>

          {/* Player */}
          <div className="mt-5 aspect-10/9 lg:aspect-video w-full overflow-hidden rounded-xl bg-neutral-900">
            {embedUrl && (
              <iframe
                key={embedUrl}
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
