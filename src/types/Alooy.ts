export type AlooyItem = {
  id: string;
  title: string;
  image: string;
  episodes: string;
};

export type AlooyEpisode = {
  episode: number;
  url: string;
};

export type AlooyDetails = {
  id: string;
  title: string;
  image: string;
  description: string;
  genre: string[];
  release: string;
  rating: string;
  episodes: AlooyEpisode[];
  actor: string;
};

export type AlooyResponse = {
  status: string;
  cached: boolean;
  query: string;
  total: number;
  result: AlooyItem[];
};