import CollectionCard from "@/components/Cards/CollectionCard";
import type { Movie, TVShow } from "@/types/AllTypes";
import { useParams } from "react-router-dom";

type MediaType = "movie" | "tv";
type MediaItem = Movie | TVShow;

type categoryProps = {
  title: string;
  type: string;
  setType: (type: MediaType) => void;
  data: MediaItem[];
};
function CategorySection({ title, type, setType, data }: categoryProps) {
  const { slug } = useParams<{ slug: string }>();
  return (
    <>
      <section
        className="
        relative
        mx-3
        mt-15
        py-4
        sm:mx-4
        sm:py-6
        md:mx-8
        md:py-8
        lg:mx-20
      "
        id={slug}
        key={slug}
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
              {title}{" "}
              <span>{type === "movie" ? type : type + " " + "shows"}</span>
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

        

        <div className="flex flex-col lg:flex-row justify-between mt-6 font-roboto items-center">
          <p className="text-gray-400 text-sm md:text-lg max-w-2xl ml-4 md:ml-8">
            Explore our curated selection of top cinema and television.
          </p>

          <div className="flex items-center gap-3 mt-5 lg:mt-0 ">
            <span className="text-[10px] font-black text-neutral-600 uppercase tracking-[0.2em] hidden sm:block">
              Media Type:
            </span>

            <select
              id={`${slug}-select`}
              value={type}
              onChange={(e) => setType(e.target.value as MediaType)}
              className="
              appearance-none bg-neutral-900 border border-neutral-800 rounded-xl px-6 py-3.5 pr-14 text-[11px] font-black uppercase tracking-widest text-white hover:border-red-600 hover:bg-neutral-800 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-600/50 w-70 lg:w-48 shadow-xl 
              "
            >
              <option className="text-[13px] " value="movie">
                movies
              </option>
              <option className="text-[13px]" value="tv">
                tv shows
              </option>
            </select>
          </div>
        </div>
        
        <div className="mt-4 h-px bg-stone-500/15 lg:mt-8" />

        <div
          id="scroll-"
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
          {data?.map((item) => (
            <CollectionCard key={item.id} data={item} type={type} />
          ))}
        </div>
      </section>
    </>
  );
}

export default CategorySection;
