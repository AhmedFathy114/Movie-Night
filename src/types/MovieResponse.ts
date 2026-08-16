export type Movie = {
  first_air_date: any;
  name: string;
  backdrop_path: string | null;
  genre_ids: number[];
  poster_path: string | null;
  title: string | "";
  vote_average: number;
  vote_count: number;
  id: number;
  overview: string | "";
  original_title: string | "";
  release_date: string;
};

export type MovieResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type MenuItem = {
  title: string;
  to: string;
  icon: React.ElementType;
};

export type SectionProps = {
  title: string;
  endpoint: string;
};

export type genres = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  genres: any;
  id: number;
  name: string;
};

export type GenresResponse = {
  genres: genres[];
};
