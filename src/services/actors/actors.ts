import { api } from "@/apis/Axios";
import type {
  PersonDetails,
  PersonMovies,
  PersonSocials,
} from "@/types/AllTypes";

export async function getActorDetails(
  id: number,
): Promise<PersonDetails | undefined> {
  const res = await api.get(`/person/${id}`);
  return res.data;
}

export async function getActorSocials(id: number): Promise<PersonSocials> {
  const res = await api.get(`/person/${id}/external_ids`);
  return res.data;
}

export async function getActorMovies(id: number): Promise<PersonMovies> {
  const res = await api.get(`/person/${id}/movie_credits`);
  return res.data;
}
