import AlooyCard from "@/components/Cards/AlooyCard";
import type { AlooyItem } from "@/types/Alooy";
import AlooySearch from "./AlooySearch";
import Pagination from "../Shared/Pagination";

interface AlooySectionProps {
  alooyItems: AlooyItem[];
}

function AlooySection({ alooyItems }: AlooySectionProps) {
  return (
    <section
      id="AlooyTv"
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
    >
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

      <div className="flex justify-end">
        <AlooySearch />
      </div>

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
        {alooyItems.map((item) => (
          <AlooyCard key={item.url} data={item} />
        ))}
      </div>

      <Pagination count={Number("59")} />

    </section>
  );
}

export default AlooySection;
