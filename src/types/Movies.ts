export type Movie = {
  id: number;
  title: string;
  original_title: string;
  overview: string;

  media_type?: "movie";

  backdrop_path: string | null;
  poster_path: string | null;

  genres: genres[];
  genre_ids: number[];

  vote_average: number;
  vote_count: number;

  release_date: string;

  // Details
  runtime: number;

  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
  } | null;

  tagline: string;
  status: string;

  homepage: string;
  imdb_id: string | null;

  original_language: string;
  origin_country: string[];

  popularity: number;
  adult: boolean;
  video: boolean;

  budget: number;
  revenue: number;
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

export type CastMember = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};

export type MovieCredits = {
  id: number;
  cast: CastMember[];
};

export type SectionDetailsProps<T> = {
  movieId: number;
  title: string;
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  horizontal?: boolean;
};

export type CollectionMovie = Pick<
  Movie,
  | "id"
  | "title"
  | "original_title"
  | "overview"
  | "backdrop_path"
  | "poster_path"
  | "media_type"
  | "original_language"
  | "genre_ids"
  | "popularity"
  | "release_date"
  | "video"
  | "vote_average"
  | "vote_count"
  | "adult"
>;

export type MovieCollection = {
  id: number;
  name: string;
  original_language: string;
  original_name: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  parts: CollectionMovie[];
};

export type StreamButtons = {
  name: string;
  full_url: string;
  urlType?: "path" | "query";
};

export type MovieResponse = PaginatedResponse<Movie>;

export type TVResponse = PaginatedResponse<TVShow>;

export type PersonResponse = PaginatedResponse<Person>;

export type TMDBResponse = MovieResponse | TVResponse | PersonResponse;

export type TMDBItem = Movie | TVShow | Person;
