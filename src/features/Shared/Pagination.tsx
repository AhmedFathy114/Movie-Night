import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSearchParams } from "react-router-dom";

function Pagination({ count }: { count: number }) {
  const [searchParam, setSearchParam] = useSearchParams();
  
  const currentPage = !searchParam.get("page")
    ? 1
    : Number(searchParam.get("page"));

  function handleNext() {
    const next = currentPage === count ? currentPage : currentPage + 1;
    searchParam.set("page", `${next}`);
    setSearchParam(searchParam);
  }


  function handlePrev() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParam.set("page", `${prev}`);
    setSearchParam(searchParam);
  }

  if (count <= 1) return null;

  return (
    <>
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

          <span className="text-neutral-400 font-black text-sm">{count}</span>
        </div>

        <button
          onClick={handleNext}
          disabled={currentPage === count}
          className="w-full sm:w-auto group flex items-center justify-center gap-2 px-4 py-4 sm:px-7 sm:py-5 bg-neutral-900/50 backdrop-blur-md border border-neutral-800 rounded-2xl hover:bg-red-600 hover:border-red-600 text-neutral-400 hover:text-white duration-500 transition-all disabled:opacity-20 disabled:hover:bg-neutral-900/50 disabled:cursor-not-allowed text-xl sm:text-xs font-black uppercase tracking-widest "
        >
          <span>Next</span>
          <ChevronRight />
        </button>
      </div>
    </>
  );
}

export default Pagination;
