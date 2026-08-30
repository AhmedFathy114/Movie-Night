import type {
  AlooyDetails,
  AlooyEpisodeResponse,
  AlooyListResponse,
} from "@/types/Alooy";

const ALOOY_API = import.meta.env.VITE_ALOOY_API;

async function request<T>(params: Record<string, string>) {
  const url = new URL(ALOOY_API);

  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.set(key, value);
  });

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`Alooy request failed: ${response.status}`);
  }

  return (await response.json()) as T;
}

export function getAllAlooy(page = 1) {
  return request<AlooyListResponse>({
    page: String(page),
  });
}

export function searchAlooy(q: string) {
  return request<AlooyListResponse>({
    q,
  });
}

export function getAlooyDetails(url: string) {
  return request<AlooyDetails>({
    url,
  });
}

export function getAlooyEpisode(url: string) {
  return request<AlooyEpisodeResponse>({
    episodeUrl: url,
  });
}