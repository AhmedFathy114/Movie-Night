import { useState } from "react";
import MovieMiniCard from "../Cards/MovieMiniCard";
import { useAllEndPoint } from "@/features/Shared/useAllEndPoint";
import type { TMDBResponse } from "@/types/AllTypes";
import { language } from "@/lib/Variables";
import { Search as SearchIcon, X } from "lucide-react";
import useDebounce from "@/hooks/useDebounce";
import SearchModal from "./SearchModal";

function Search() {
  const [openModal, setOpenModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedQuery = useDebounce(searchQuery, 700);

  const { data, isPending } = useAllEndPoint<TMDBResponse>(
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
      .slice(0, 5) ?? [];
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
          bg-neutral-900/10 px-4 py-1.5
          pr-20
          text-neutral-200 placeholder:text-neutral-400
          outline-none backdrop-blur-2xl
          transition-colors duration-200
          hover:bg-neutral-600/50
          focus:border-red-700
          focus:ring-0
          lg:block
          font-roboto text-[17px] font-bold

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
          hidden
          lg:block
        "
      />

      <SearchIcon
        size={18}
        className="text-white size-6 absolute top-1/2 right-4 sm:right-0 -translate-y-1/2 lg:hidden sm:size-7 "
        onClick={() => setOpenModal(true)}
      />

      {openModal && <SearchModal setIsSearchModelOpen={setOpenModal} />}

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
          className={`
            absolute left-0 right-0 top-[calc(100%+8px)]
            z-9999
            overflow-hidden
            rounded-xl
            border border-neutral-800
            bg-neutral-950/95
            shadow-2xl
            backdrop-blur-xl
            font-roboto
            ${!movies.length && "hidden"}
          `}
        >
          {isPending ? (
            <div className="flex min-h-40 items-center justify-center">
              <p className="font-roboto text-sm text-neutral-400">
                Searching...
              </p>
            </div>
          ) : (
            movies.length > 0 && (
              <div className="divide-y divide-neutral-800">
                {movies.map((movie) => (
                  <MovieMiniCard
                    key={movie.id}
                    movie={movie}
                    setSearchQuery={setSearchQuery}
                  />
                ))}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
