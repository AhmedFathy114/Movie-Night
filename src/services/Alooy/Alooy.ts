import type {
  AlooyDetails,
  AlooyResponse,
} from "@/types/Alooy";

const ALOOY_API =
  "https://eecsajchjmzzbigvaeae.supabase.co/functions/v1/alooy";

export async function getAllAlooy(): Promise<AlooyResponse> {
  const res = await fetch(ALOOY_API);

  if (!res.ok) {
    throw new Error(`Failed to get Alooy: ${res.status}`);
  }

  return await res.json();
}

export async function searchAlooy(
  query: string,
): Promise<AlooyResponse> {
  const res = await fetch(
    `${ALOOY_API}?q=${encodeURIComponent(query)}`,
  );

  if (!res.ok) {
    throw new Error(`Failed to search Alooy: ${res.status}`);
  }

  return await res.json();
}

export async function getAlooyDetails(
  id: string,
): Promise<AlooyDetails> {
  const res = await fetch(
    `${ALOOY_API}?id=${encodeURIComponent(id)}`,
  );

  if (!res.ok) {
    throw new Error(`Failed to get Alooy details: ${res.status}`);
  }

  return await res.json();
}