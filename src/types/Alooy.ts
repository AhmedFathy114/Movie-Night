export type AlooyItem = {
  title: string;
  url: string;
  type: "movie" | "series";
  poster?: string;
  episodes?: number;
};

export type AlooyListResponse = {
  success: boolean;
  type: "all" | "search";
  page?: number;
  offset?: number;
  count: number;
  total?: number;
  hasNext?: boolean;
  results: AlooyItem[];
};

export type AlooySource = {
  url: string;
  type?: string;
};

export type AlooyEpisode = {
  title: string;
  url: string;
  video?: string | null; 
  videoType?: string | null; 
  sources?: AlooySource[]; 
};

export type AlooyDetails = {
  success: boolean;
  type: "details";
  id?: string;
  url: string;
  title?: string;
  count: number;
  resolved?: boolean;
  episodes: AlooyEpisode[];
};

export type AlooyEpisodeResponse = {
  success: boolean;
  type: "episode";
  url: string;
  key?: string;
  title: string;
  count: number;
  sources: AlooySource[];
};