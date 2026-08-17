export type Movie = {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  backdrop_path: string | null;
  poster_path: string | null;
  genre_ids: number[];
  vote_average: number;
  vote_count: number;
  release_date: string;
};

export type PaginatedResponse<T> = {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
};

export type MenuItem = {
  title: string;
  to: string;
  icon?: React.ElementType;
};

export type SocialItem = {
  label: string;
  href: string;
  icon: React.ElementType;
};

export type SectionProps = {
  title: string;
  endpoint: string;
  params?: Record<string, string | number | boolean>;
};

export type genres = {
  genres: unknown;
  id: number;
  name: string;
};

export type GenresResponse = {
  genres: genres[];
};

export type TVShow = {
  id: number;
  name: string;
  original_name: string;
  overview: string;
  backdrop_path: string | null;
  poster_path: string | null;
  genre_ids: number[];
  vote_average: number;
  vote_count: number;
  first_air_date: string;
};

export type Person = {
  id: number;
  name: string;
  gender: number;
  known_for_department: string;
  profile_path: string | null;
  known_for: unknown[];
};

export type MovieResponse = PaginatedResponse<Movie>;

export type TVResponse = PaginatedResponse<TVShow>;

export type PersonResponse = PaginatedResponse<Person>;

export type TMDBResponse = MovieResponse | TVResponse | PersonResponse;

export type TMDBItem = Movie | TVShow | Person;
