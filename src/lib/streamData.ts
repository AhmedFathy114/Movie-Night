import type { StreamButtons } from "@/types/AllTypes";

export function generateServerAvatar(name: string) {
  return `https://api.dicebear.com/9.x/bottts/svg?seed=${encodeURIComponent(name)}`;
}

export const streamDataMovie: StreamButtons[] = [
  {
    name: "MultiEmbed",
    full_url: "https://multiembed.mov/?video_id=",
    urlType: "query",
  },
  {
    name: "Videasy",
    full_url: "https://player.videasy.net/movie/",
    urlType: "path",
  },
  {
    name: "cinemaos",
    full_url: "https://cinemaos.tech/player/",
    urlType: "path",
  },
  {
    name: "VidSrc (me)",
    full_url: "https://vidsrcme.ru/embed/movie/",
    urlType: "path",
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
    full_url: "https://vidlux.xyz/embed/movie/",
    urlType: "path",
  },
  {
    name: "VidRock",
    full_url: "https://vidrock.ru/movie/",
    urlType: "path",
  },
  {
    name: "moviesapi.to",
    full_url: "https://moviesapi.to/movie/",
    urlType: "path",
  },
  {
    name: "2Embed",
    full_url: " https://www.2embed.cc/embed/",
    urlType: "path",
  },
  {
    name: "VidSpark",
    full_url: "https://vidspark.to/movie/",
    urlType: "path",
  },
  {
    name: "VidFlix",
    full_url: "https://vidflix.club/movie/",
    urlType: "path",
  },
  {
    name: "ScreenScape",
    full_url: "https://screenscape.me/embed?tmdb=",
    urlType: "path",
  },
  {
    name: "embos.top",
    full_url: "https://embos.top/movie/?mid=",
    urlType: "path",
  },
];

export const streamDataTv: StreamButtons[] = [
  {
    name: "MultiEmbed",
    full_url: "https://multiembed.mov/?video_id=",
    urlType: "query",
  },
  {
    name: "Videasy",
    full_url: "https://player.videasy.to/tv/",
    urlType: "path",
  },
  {
    name: "cinemaos",
    full_url: "https://cinemaos.tech/player/",
    urlType: "path",
  },
  {
    name: "VidSrc (me)",
    full_url: "https://vidsrcme.ru/embed/tv/",
    urlType: "path",
  },
  {
    name: "VidSrc.in",
    full_url: "https://vidsrc.in/embed/tv/",
    urlType: "path",
  },
  {
    name: "VidSrc.to",
    full_url: "https://vidsrc.to/embed/tv/",
    urlType: "path",
  },
  {
    name: "VidSrc.io",
    full_url: "https://vidsrc.io/embed/tv/",
    urlType: "path",
  },
  {
    name: "VidSrc.pm",
    full_url: "https://vidsrc.pm/embed/tv/",
    urlType: "path",
  },
  {
    name: "VSEmbed",
    full_url: "https://vsembed.ru/embed/tv/",
    urlType: "path",
  },
  {
    name: "VidLink",
    full_url: "https://vidlink.pro/tv/",
    urlType: "path",
  },
  {
    name: "VidFast",
    full_url: "https://vidfast.vc/tv/",
    urlType: "path",
  },
  {
    name: "EmbedMaster",
    full_url: "https://embedmaster.link/tv/",
    urlType: "path",
  },
  {
    name: "VidLux",
    full_url: "https://vidlux.xyz/embed/tv/",
    urlType: "path",
  },
  {
    name: "VidRock",
    full_url: "https://vidrock.ru/tv/",
    urlType: "path",
  },
  {
    name: "MoviesAPI",
    full_url: "https://moviesapi.to/tv/",
    urlType: "path",
  },
  {
    name: "2Embed",
    full_url: "https://www.2embed.cc/embedtv/",
    urlType: "query",
  },
  {
    name: "VidSpark",
    full_url: "https://vidspark.to/tv/",
    urlType: "path",
  },
  {
    name: "VidFlix",
    full_url: "https://vidflix.club/tv/",
    urlType: "path",
  },
  {
    name: "ScreenScape",
    full_url: "https://screenscape.me/embed?tmdb=",
    urlType: "query",
  },
  {
    name: "embos.top",
    full_url: "https://embos.top/tv/?mid=",
    urlType: "query",
  },
];
