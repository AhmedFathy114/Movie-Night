import type { SectionDetailsProps } from "@/types/Movies";

function DetailsSection<T>({
  movieId,
  items,
  title,
  renderItem,
  horizontal = false,
}: SectionDetailsProps<T>) {
  return (
    <section
      className="container  mx-auto py-4 md:py-8 px-2 sm:px-4 relative"
      id={`${movieId}`}
    >
      <div
        className="flex items-center justify-between gap-3 mb-4 md:mb-6"
        id={`${movieId}`}
      >
        <div className="flex  flex-col gap-2 md:gap-3 ">
          <h2 className="text-3xl md:text-3xl lg:text-5xl font-bold text-white tracking-wide  drop-shadow-lg">
            {title}
          </h2>
          <div className="h-1 md:h-1.5 w-8 md:w-20 bg-red-700 rounded-full shadow-lg shadow-red-700/50" />
        </div>
      </div>

      <div
        id={`scroll-${movieId}`}
        className={
          horizontal
            ? "flex gap-4 overflow-x-auto pb-6 pt-2 custom-scrollbar"
            : `grid
              grid-cols-2
              md:grid-cols-3
              lg:grid-cols-6
              justify-items-center
              gap-5
              md:gap-4
              pb-6
              sm:pb-10
              pt-2
              sm:pt-5`
        }
      >
        {items?.map(renderItem)}
      </div>
    </section>
  );
}

export default DetailsSection;
