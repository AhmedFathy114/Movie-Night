export type Movie = {
  id: number;
  title: string;
  media_type?: "movie";
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
  media_type?: "tv";
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
  media_type?: "person";
  gender: number;
  known_for_department: string;
  profile_path: string | null;
  known_for: unknown[];
};

export type Videos = {
  name: string;
  key: string;
  site: string;
  type: string;
  official: boolean;
};
export type MovieVideos = {
  id: number;
  results: Videos[];
};

export type MovieDetails = {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
  } | null;
  budget: number;
  genres: genres[];
  homepage: string;
  id: number;
  imdb_id: string | null;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type MovieResponse = PaginatedResponse<Movie>;

export type TVResponse = PaginatedResponse<TVShow>;

export type PersonResponse = PaginatedResponse<Person>;

export type TMDBResponse = MovieResponse | TVResponse | PersonResponse;

export type TMDBItem = Movie | TVShow | Person;
