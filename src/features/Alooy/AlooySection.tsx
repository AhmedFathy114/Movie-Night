import AlooyCard from "@/components/Cards/AlooyCard";
import type { AlooyItem } from "@/types/Alooy";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AlooySearch from "./AlooySearch";

interface AlooySectionProps {
  alooyItems: AlooyItem[];
  handleNext: () => void;
  handlePrev: () => void;
  currentPage: number;
  pageCount: number;
}

function AlooySection({
  alooyItems,
  handleNext,
  handlePrev,
  currentPage,
  pageCount,
}: AlooySectionProps) {
  return (
    <section
      className="
        relative
        mx-3
        mt-20
        py-4
        sm:mx-4
        sm:py-6
        md:mx-8
        md:py-8
        lg:mx-20
      "
      id="AlooyTv"
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between gap-3 md:mb-6">
        <div className="flex items-center gap-2 md:gap-3">
          <div
            className="
              h-8
              w-1
              rounded-full
              bg-red-700
              shadow-lg
              shadow-red-700/50
              md:h-15
              md:w-1.5
            "
          />

          <h2
            className="
              text-3xl
              font-bold
              tracking-wide
              text-white
              drop-shadow-lg
              md:text-4xl
              lg:text-5xl
              lg:tracking-widest
            "
          >
            Alooy Tv
          </h2>
        </div>
      </div>

      {/* Red line */}
      <div
        className="
          -mt-2
          ml-3
          h-1
          w-30
          rounded-full
          bg-linear-to-r
          from-red-700
          to-transparent
          lg:ml-7
        "
      />

      {/* Description */}

      <div className="flex justify-end">
        <AlooySearch />
      </div>
      {/* Divider */}
      <div className="mt-4 h-px bg-stone-500/15 lg:mt-8" />

      <div
        id="scroll-AlooyTv"
        className="
          grid
          grid-cols-2
          gap-x-3
          gap-y-5
          pt-5

          sm:grid-cols-3
          sm:gap-4

          md:grid-cols-4
          md:gap-5

          lg:grid-cols-5
          lg:gap-5

          xl:grid-cols-6
          xl:gap-6
        "
      >
        {alooyItems?.map((item: AlooyItem) => (
          <AlooyCard key={item.id} data={item} />
        ))}
      </div>

      <div className="flex  items-center justify-center gap-3 sm:gap-4 md:gap-8 mt-8 md:mt-16 mb-6 ">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="w-full sm:w-auto group flex items-center justify-center gap-2 px-4 py-4 sm:px-7 sm:py-5 bg-neutral-900/50 backdrop-blur-md border border-neutral-800 rounded-2xl hover:bg-red-600 hover:border-red-600 transition-all disabled:opacity-20 disabled:hover:bg-neutral-900/50 disabled:cursor-not-allowed text-xs sm:text-xs font-black uppercase tracking-widest text-neutral-400 hover:text-white duration-500"
        >
          <ChevronLeft />
          <span>prev</span>
        </button>

        <div className="flex items-center justify-center gap-3 px-4 py-2 sm:px-6 sm:py-3.5 bg-neutral-900/30 rounded-2xl border border-white/5 w-full sm:w-auto font-roboto">
          <span className="text-red-600 font-black text-lg min-w-6 text-center">
            {currentPage}
          </span>

          <span className="text-neutral-700 font-black">/</span>

          <span className="text-neutral-400 font-black text-sm">
            {pageCount}
          </span>
        </div>

        <button
          onClick={handleNext}
          disabled={currentPage === pageCount}
          className="w-full sm:w-auto group flex items-center justify-center gap-2 px-4 py-4 sm:px-7 sm:py-5 bg-neutral-900/50 backdrop-blur-md border border-neutral-800 rounded-2xl hover:bg-red-600 hover:border-red-600 text-neutral-400 hover:text-white duration-500 transition-all disabled:opacity-20 disabled:hover:bg-neutral-900/50 disabled:cursor-not-allowed text-xl sm:text-xs font-black uppercase tracking-widest "
        >
          <span>Next</span>
          <ChevronRight />
        </button>
      </div>
    </section>
  );
}

export default AlooySection;
