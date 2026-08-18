import { useMovieEndPoint } from "@/features/movies/useMovieEndPoint";
import useDebounce from "@/hooks/useDebounce";
import { language } from "@/lib/Variables";
import type { TMDBResponse } from "@/types/Movies";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import MovieMiniCard from "../Cards/MovieMiniCard";

function SearchModal({
  setIsSearchModelOpen,
}: {
  setIsSearchModelOpen: (open: boolean) => void;
}) {
  const [localQuery, setLocalQuery] = useState("");
  const debouncedQuery = useDebounce<string>(localQuery, 600);

  const { data } = useMovieEndPoint<TMDBResponse>(
    "/search/multi",
    {
      language,
      page: 1,
      query: debouncedQuery,
      include_adult: false,
    },
    debouncedQuery.length > 0,
  );

  const movies =
    data?.results
      .filter((movie) => "media_type" in movie && movie.media_type !== "person")
      .slice(0, 8) ?? [];

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-start justify-center z-900 pt-[15vh] px-4 h-screen">
      <div className="bg-neutral-950 border border-neutral-800 rounded-2xl p-6 w-full max-w-xl shadow-[0_0_50px_-12px_rgba(220,38,38,0.3)] relative animate-in fade-in zoom-in duration-300">
        <button
          onClick={() => setIsSearchModelOpen(false)}
          className="absolute right-6 top-6 text-neutral-400 hover:text-white transition-colors"
          aria-label="Close search modal"
        >
          <span className="text-2xl">✕</span>
        </button>

        <h2 className="text-white text-2xl font-semibold mb-6 pr-10 tracking-wide">
          Search Movies & TV
        </h2>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex relative items-center gap-3 mb-6"
        >
          <div className="relative flex-1">
            <input
              type="search"
              placeholder="Search movies, tv shows..."
              autoFocus
              value={localQuery}
              onChange={(e) => setLocalQuery(e.target.value)}
              className="w-full bg-neutral-900 rounded-xl pr-16 pl-3 py-2 outline-none text-white placeholder-neutral-500 text-md border border-neutral-800 focus:border-red-600 focus:ring-1 focus:ring-red-600 transition-all shadow-inner"
            />
          </div>
          <button
            type="submit"
            className="absolute right-0 bg-red-600 hover:bg-red-700 p-3 px-5 rounded-xl text-white font-semibold transition-all shadow-lg shadow-red-600/20 active:scale-95"
            aria-label="Submit search"
          >
            <FaSearch className="text-white text-lg " />
          </button>
        </form>

        <div className="max-h-[50vh] overflow-y-auto custom-scrollbar rounded-xl bg-neutral-900/50 border border-neutral-800/50">
          {movies.length > 0 && localQuery.length>0 ? (
            <div className="divide-y divide-neutral-800/50">
              {movies.map((movie) => (
                <div
                  key={`${movie.media_type}-${movie.id}`}
                  onClick={() => setIsSearchModelOpen(false)}
                >
                  <MovieMiniCard movie={movie} />
                </div>
              ))}
            </div>
          ) :(
            <div className="py-12 text-center text-neutral-500 italic">
              Try searching for &quot;Inception&quot; or &quot;Breaking
              Bad&quot;
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchModal;
