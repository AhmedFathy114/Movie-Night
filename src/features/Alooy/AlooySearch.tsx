import { searchAlooy } from "@/services/alooy/alooy";
import type { AlooyItem } from "@/types/Alooy";
import useDebounce from "@/hooks/useDebounce";
import { Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function AlooySearch() {
  const navigate = useNavigate();
  const wrapperRef = useRef<HTMLDivElement>(null);

  const [query, setQuery] = useState("");
  const [results, setResults] = useState<AlooyItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    const value = debouncedQuery.trim();

    if (!value) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setResults([]);
      setIsOpen(false);
      return;
    }

    async function search() {
      try {
        setIsLoading(true);

        const data = await searchAlooy(value);

        setResults(data.results?.slice(0, 5) ?? []);
        setIsOpen(true);
      } catch (error) {
        console.error("Alooy search error:", error);
        setResults([]);
        setIsOpen(false);
      } finally {
        setIsLoading(false);
      }
    }

    search();
  }, [debouncedQuery]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (item: AlooyItem) => {
    setQuery("");
    setResults([]);
    setIsOpen(false);

    navigate(
      `/alooy/player?url=${encodeURIComponent(item.url)}&title=${encodeURIComponent(item.title)}`,
    );
  };

  const handleClear = () => {
    setQuery("");
    setResults([]);
    setIsOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative mt-6 w-full max-w-xl">
      <div
        className="
          relative
          flex
          items-center
          overflow-hidden
          rounded-2xl
          border
          border-neutral-800
          bg-neutral-900/60
          backdrop-blur-md
          transition
          focus-within:border-red-700
        "
      >
        <Search
          size={20}
          className="pointer-events-none absolute left-4 text-neutral-500"
        />

        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onFocus={() => {
            if (results.length > 0) {
              setIsOpen(true);
            }
          }}
          placeholder="ابحث عن مسلسل أو فيلم..."
          dir="rtl"
          className="
            w-full
            bg-transparent
            py-3.5
            pl-12
            pr-12
            text-sm
            text-white
            outline-none
            placeholder:text-neutral-500
            md:text-[15px]
          "
        />

        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="
              absolute
              right-3
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              text-neutral-500
              transition
              hover:bg-neutral-800
              hover:text-white
            "
          >
            <X size={17} />
          </button>
        )}
      </div>

      {isOpen && (
        <div
          className="
            absolute
            left-0
            right-0
            top-full
            z-50
            mt-2
            overflow-hidden
            rounded-2xl
            border
            border-neutral-800
            bg-neutral-950/95
            shadow-2xl
            backdrop-blur-xl
          "
        >
          {isLoading ? (
            <div className="px-5 py-6 text-center text-sm text-neutral-500">
              جاري البحث...
            </div>
          ) : results.length > 0 ? (
            <div className="divide-y divide-neutral-800/70">
              {results.map((item) => (
                <button
                  key={item.url}
                  type="button"
                  onClick={() => handleSelect(item)}
                  className="
                    flex
                    w-full
                    items-center
                    gap-3
                    p-3
                    text-right
                    transition
                    hover:bg-neutral-900
                  "
                >
                  <div className="h-16 w-11 shrink-0 overflow-hidden rounded-lg bg-neutral-800">
                    <img
                      src={item.poster}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                      onError={(event) => {
                        event.currentTarget.onerror = null;
                        event.currentTarget.src = "/NoPoster.png";
                      }}
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-white">
                      {item.title}
                    </p>

                    <p className="mt-1 text-xs text-neutral-500">
                      {item.episodes}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="px-5 py-6 text-center text-sm text-neutral-500">
              لا توجد نتائج
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AlooySearch;
