import MovieCard from "./MovieCard";

import { useMovieEndPoint } from "@/features/movies/useMovieEndPoint";
import type { SectionProps, TMDBResponse } from "@/types/Movies";

function Section({ endpoint, title, params }: SectionProps) {
  const { data } = useMovieEndPoint<TMDBResponse>(endpoint, params);

  const movies = data?.results ?? [];
  return (
    <section className="py-4 md:py-8 px-2 sm:px-4 relative" id={title}>
      <div className="flex items-center justify-between gap-3 mb-4 md:mb-6">
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-1 md:w-1.5 h-8 md:h-16 bg-red-700 rounded-full shadow-lg shadow-red-700/50" />

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-wide md:tracking-widest drop-shadow-lg">
            {title}
          </h2>
        </div>
      </div>

      <div
        id={`scroll-${endpoint}`}
        className="flex gap-4 sm:gap-4 overflow-x-auto scroll-smooth pb-6 sm:pb-10 pt-2 sm:pt-5 custom-scrollbar scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-neutral-900"
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}

export default Section;
