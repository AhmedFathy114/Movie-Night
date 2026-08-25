import { api } from "@/apis/Axios";
import type { MovieCredits } from "@/types/AllTypes";

export async function fetchAllTypes<T>(
  endpoint: string,
  params?: Record<string, string | number | boolean>,
): Promise<T> {
  const response = await api.get<T>(endpoint, {
    params,
  });
  return response.data;
}

export async function getCredits(
  id: number,
  type: string,
): Promise<MovieCredits> {
  const res = await api.get(`/${type}/${id}/credits`);
  return res.data;
}

export async function getDetails<T>(id: number, type: string): Promise<T> {
  const res = await api.get<T>(`/${type}/${id}`);
  return res.data;
}

export async function getVideos<T>(id: number, type: string): Promise<T> {
  const res = await api.get<T>(`/${type}/${id}/videos`);
  return res.data;
}

export async function getRecommended<T>(id: number, type: string): Promise<T> {
  const res = await api.get(`/${type}/${id}/recommendations`);
  return res.data;
}

export async function getSimilar<T>(id: number, type: string): Promise<T> {
  const res = await api.get(`/${type}/${id}/similar`);
  return res.data;
}
