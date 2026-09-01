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
  movieGenreId?:number;
  tvGenreId?:number;
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
  genres?: unknown;
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
  id: number;
  title: string;
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  horizontal?: boolean;
  list?: boolean;
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
  url_type?: "path" | "query";
  media_type:string
};

export type PersonDetails = {
  adult: false;
  also_known_as: [];
  biography: string;
  birthday: string;
  known_for_department: string;
  name: string;
  place_of_birth: string;
  profile_path: string;
};

export type PersonSocials = {
  imdb_id: string;
  facebook_id: string;
  instagram_id: string;
  tiktok_id: string;
  twitter_id: string;
  youtube_id: string;
  wikidata_id: string;
};

export type PersonMovies = {
  cast: Movie[];
};

export type TVSeason = {
  air_date: string | null;
  episode_count: number;
  id: number;
  name: string;
  poster_path: string | null;
  season_number: number;
  vote_average: number;
};

export type TVDetails = {
  backdrop_path: string | null;

  first_air_date: string;

  genres: genres[];

  name: string;

  number_of_episodes: number;
  number_of_seasons: number;

  original_name: string;

  overview: string;

  poster_path: string | null;

  seasons: TVSeason[];

  vote_average: number;
};

export type TVEpisode = {
  air_date: string;
  episode_number: number;
  episode_type: string;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string | null;
  vote_average: number;
  vote_count: number;
  crew: unknown[];
  guest_stars: unknown[];
};

export type TvSessionHeroProps = {
  tvName: string;
  backdropPath: string | null;
  season: TVSeasonDetails;
  finalTrailer?: Videos;
};

export type TVSeasonDetails = {
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  season_number: number;
  air_date: string | null;
  vote_average: number;

  episodes: TVEpisode[];
};

export type Media ={
  id:number,
  media_type:string
}

export type MovieResponse = PaginatedResponse<Movie>;

export type TVResponse = PaginatedResponse<TVShow>;

export type PersonResponse = PaginatedResponse<Person>;

export type TMDBResponse = MovieResponse | TVResponse | PersonResponse;

export type TMDBItem = Movie | TVShow | Person;
