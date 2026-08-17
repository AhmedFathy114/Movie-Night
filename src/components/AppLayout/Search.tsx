import { useState } from "react";
import MovieMiniCard from "../MovieMiniCard";
import { useMovieEndPoint } from "@/features/movies/useMovieEndPoint";
import type { TMDBResponse } from "@/types/Movies";
import { language } from "@/lib/Variables";
import { Search as SearchIcon, X } from "lucide-react";
import useDebounce from "@/hooks/Debounce";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedQuery = useDebounce(searchQuery, 400);

  const { data, isPending } = useMovieEndPoint<TMDBResponse>(
    "/search/multi",
    {
      language,
      page: 1,
      query: debouncedQuery,
      include_adult: false,
    },
    debouncedQuery.length > 0,
  );

  const movies = data?.results?.slice(0, 5) ?? [];
  const showResults = debouncedQuery.trim().length > 0;

  return (
    <div className="relative w-full md:w-100">
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        placeholder="Search movies, tv shows..."
        className="
          hidden w-full rounded-lg border border-neutral-400
          bg-neutral-900/10 px-4 py-2
          pr-20
          text-neutral-200 placeholder:text-neutral-400
          outline-none backdrop-blur-2xl
          transition-colors duration-200
          hover:bg-neutral-600/50
          focus:border-red-700
          focus:ring-0
          md:block
        "
      />

      {/* Search icon */}
      <SearchIcon
        size={18}
        className="
          pointer-events-none
          absolute right-4 top-1/2
          -translate-y-1/2
          text-neutral-400
        "
      />

      {/* Clear button */}
      {searchQuery && (
        <button
          type="button"
          onClick={() => setSearchQuery("")}
          aria-label="Clear search"
          className="
            absolute right-10 top-1/2
            -translate-y-1/2
            flex h-5 w-5
            items-center justify-center
            rounded-full
            text-neutral-400
            transition-colors duration-200
            hover:text-red-500
          "
        >
          <X size={14} strokeWidth={2.5} />
        </button>
      )}

      {showResults && (
        <div
          className="
            absolute left-0 right-0 top-[calc(100%+8px)]
            z-[9999]
            overflow-hidden
            rounded-xl
            border border-neutral-800
            bg-neutral-950/95
            shadow-2xl
            backdrop-blur-xl
          "
        >
          {isPending ? (
            <div className="flex min-h-40 items-center justify-center">
              <p className="font-roboto text-sm text-neutral-400">
                Searching...
              </p>
            </div>
          ) : movies.length > 0 ? (
            <div className="divide-y divide-neutral-800">
              {movies.map((movie) => (
                <MovieMiniCard key={movie.id} movie={movie} />
              ))}
            </div>
          ) : (
            <div className="flex min-h-40 items-center justify-center">
              <p className="font-roboto text-sm text-neutral-500">
                No movies found
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;