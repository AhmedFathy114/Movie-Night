const ALOOY_API = import.meta.env.VITE_ALOOY_API as string;

if (!ALOOY_API) {
  console.error("VITE_ALOOY_API is missing from .env");
}


export function proxiedVideoUrl(videoUrl: string): string {
  return `${ALOOY_API}?proxy=${encodeURIComponent(videoUrl)}`;
}