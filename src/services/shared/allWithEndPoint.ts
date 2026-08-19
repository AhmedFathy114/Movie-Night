import { api } from "@/apis/Axios";

export async function fetchMovies<T>(
  endpoint: string,
  params?: Record<string, string | number | boolean>,
): Promise<T> {
  const response = await api.get<T>(endpoint, {
    params,
  });
  return response.data;
}
