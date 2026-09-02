import { useState, type ReactNode } from "react";
import { useUser } from "../authentication/useUser";
import PageLoader from "../Shared/PageLoader";
import MediaItem from "../Shared/MediaItem";
import { Link } from "react-router-dom";
import { useWatchlist } from "./useWatchlist";

type MediaType = "movie" | "tv";

interface SectionProps {
  title: string;
  icon: ReactNode;
}

function WatchlistSection({ title, icon }: SectionProps) {
  const [type, setType] = useState<MediaType>("movie");
  const { user } = useUser();

  const { Watchlist, isLoadingWatchlist } = useWatchlist(user?.id ?? "", type);

  if (isLoadingWatchlist) return <PageLoader message="Loading Profile" />;

  const myWatchlist = Watchlist?.filter(
    (watchlist) => watchlist.media_type === type,
  );
  return (
    <>
      <section className="relative px-2 py-4 sm:px-4 md:pt-15">
        <div className="mb-5 flex flex-col gap-4 sm:mb-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-1 rounded-full bg-red-700 shadow-lg shadow-red-700/50 md:h-14 md:w-1.5" />

            <h2 className="text-2xl font-bold tracking-wide text-white drop-shadow-lg md:text-3xl lg:text-4xl lg:tracking-widest">
              {title}
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden text-[10px] font-black uppercase tracking-[0.2em] text-neutral-600 sm:block">
              Media Type:
            </span>

            <select
              value={type}
              onChange={(e) => setType(e.target.value as MediaType)}
              className="
              w-full
              cursor-pointer
              appearance-none
              rounded-xl
              border border-neutral-800
              bg-neutral-900
              px-5 py-3
              text-[11px]
              font-black
              uppercase
              tracking-widest
              text-white
              shadow-xl
              outline-none
              transition-all
              hover:border-red-600
              hover:bg-neutral-800
              focus:border-red-600
              focus:ring-2
              focus:ring-red-600/30
              sm:w-48
            "
            >
              <option value="movie">Movies</option>
              <option value="tv">TV Shows</option>
            </select>
          </div>
        </div>
        <div
          className={`
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-6
          justify-items-center
          gap-5
          md:gap-4
          pb-6
          sm:pb-10
          pt-2
          sm:pt-5
          justify-center
        `}
        >
          {myWatchlist?.length ? (
            myWatchlist.map((watchlist) => (
              <MediaItem
                key={`${watchlist.media_type}-${watchlist.media_id}`}
                media_id={watchlist.media_id}
                media_type={watchlist.media_type as MediaType}
              />
            ))
          ) : (
            <div className="col-span-full flex min-h-70 w-full flex-col items-center justify-center rounded-2xl border border-white/5 bg-white/2 px-6 py-12 text-center">
              <div className="mb-5 flex size-16 items-center justify-center rounded-full border border-red-600/20 bg-red-600/10">
                <span className="text-2xl">{icon}</span>
              </div>

              <h3 className="text-xl font-bold text-white font-roboto">
                No {type === "movie" ? "Movies" : "TV Shows"} Yet
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-neutral-500">
                You haven't added any {type === "movie" ? "movies" : "TV shows"}{" "}
                to your {title} yet. Start exploring and save the ones you love.
              </p>

              <Link
                to="/home"
                className="
              mt-6
              rounded-xl
              bg-red-600
              px-6
              py-3
              text-sm
              font-bold
              text-white
              transition-all
              hover:bg-red-700
              hover:shadow-lg
              hover:shadow-red-600/20
            "
              >
                Explore {type === "tv" ? "Tv Show" : "Movie"}
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default WatchlistSection;
