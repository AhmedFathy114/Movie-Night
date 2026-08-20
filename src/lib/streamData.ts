import type { StreamButtons } from "@/types/Movies";

export function generateServerAvatar(name: string) {
  return `https://api.dicebear.com/9.x/bottts/svg?seed=${encodeURIComponent(name)}`;
}

export const streamData: StreamButtons[] = [
  {
    name: "MultiEmbed",
    full_url: "https://multiembed.mov/?video_id=",
    urlType: "query",
    mobileSupported: true,
  },
  {
    name: "VidSrc (me)",
    full_url: "https://vidsrcme.ru/embed/movie/",
    urlType: "path",
    mobileSupported: true,
  },
  {
    name: "vidsrc.in",
    full_url: "https://vidsrc.in/embed/movie/",
    urlType: "path",
  },
  {
    name: "VidSrc",
    full_url: "https://vidsrc.to/embed/movie/",
    urlType: "path",
  },
  {
    name: "vidsrc.io",
    full_url: "https://vidsrc.io/embed/movie/",
    urlType: "path",
  },
  {
    name: "vidsrc.pm",
    full_url: "https://vidsrc.pm/embed/movie/",
    urlType: "path",
  },
  {
    name: "vsembed.ru",
    full_url: "https://vsembed.ru/embed/movie/",
    urlType: "path",
  },
  {
    name: "embed.su",
    full_url: "https://vidlink.pro/movie/",
    urlType: "path",
  },
  {
    name: "vidlink.pro",
    full_url: "https://vidfast.vc/movie/",
    urlType: "path",
  },
  {
    name: "vidfast",
    full_url: "https://embedmaster.link/movie/",
    urlType: "path",
  },
  {
    name: "EmbedMaster",
    full_url: "https://embedmaster.link/movie/",
    urlType: "path",
  },
  {
    name: "vidlux",
    full_url: "https://cinemaos.tech/player/",
    urlType: "path",
  },
  {
    name: "VidRock",
    full_url: "https://vidrock.ru/movie/",
    urlType: "path",
  },
  {
    name: "vidsrc.nl",
    full_url: "https://toustream.xyz/tou/movies/",
    urlType: "path",
    mobileSupported: true,
  },
  {
      name: "moviesapi.to",
      full_url: "https://moviesapi.to/movie/",
      urlType: "path",
      mobileSupported: true,
  },
  {
    name: "2Embed",
    full_url: " https://www.2embed.cc/embed/",
    urlType: "path",
    mobileSupported: true,
  },

  {
    name: "SuperEmbed",
    full_url: "https://multiembed.mov/?video_id=",
    urlType: "query",
    mobileSupported: true,
  },
  {
    name: "VidSpark",
    full_url: "https://vidspark.to/movie/",
    urlType: "path",
    mobileSupported: true,
  },
  {
    name: "VidFlix",
    full_url: "https://vidflix.club/movie/",
    urlType: "path",
    mobileSupported: true,
  },
  {
    name: "ScreenScape",
    full_url: "https://screenscape.me/embed?tmdb=",
    urlType: "path",
    mobileSupported: true,
  },
  {
    name: "Videasy",
    full_url: "https://player.videasy.net/movie/",
    urlType: "path",
    mobileSupported: true,
  },
];
