import type { MenuItem, SocialItem } from "@/types/Movies";
import { CalendarDays, Flame, Play, Star, TrendingUp } from "lucide-react";

import { FaFacebookF, FaGithub, FaLinkedinIn, FaDiscord } from "react-icons/fa";

export const navigationLinks: MenuItem[] = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "Discover",
    to: "/discover",
  },
  {
    title: "About",
    to: "/about",
  },
];

export const discoverLinks: MenuItem[] = [
  {
    title: "Trending",
    to: "/category/trending",
    icon: TrendingUp,
  },
  {
    title: "Top Rated",
    to: "/category/top-rated",
    icon: Star,
  },
  {
    title: "Popular",
    to: "/category/popular",
    icon: Flame,
  },
  {
    title: "Upcoming",
    to: "/category/upcoming",
    icon: CalendarDays,
  },
  {
    title: "Now Playing",
    to: "/category/now-playing",
    icon: Play,
  },
];

export const genreItems: MenuItem[] = [
  {
    title: "Action",
    to: "/genre/action",
  },
  {
    title: "Adventure",
    to: "/genre/adventure",
  },
  {
    title: "Animation",
    to: "/genre/animation",
  },
  {
    title: "Comedy",
    to: "/genre/comedy",
  },
  {
    title: "Crime",
    to: "/genre/crime",
  },
  {
    title: "Documentary",
    to: "/genre/documentary",
  },
  {
    title: "Drama",
    to: "/genre/drama",
  },
  {
    title: "Family",
    to: "/genre/family",
  },
  {
    title: "Fantasy",
    to: "/genre/fantasy",
  },
  {
    title: "History",
    to: "/genre/history",
  },
  {
    title: "Horror",
    to: "/genre/horror",
  },
  {
    title: "Music",
    to: "/genre/music",
  },
  {
    title: "Mystery",
    to: "/genre/mystery",
  },
  {
    title: "Romance",
    to: "/genre/romance",
  },
  {
    title: "Science Fiction",
    to: "/genre/science-fiction",
  },
  {
    title: "TV Movie",
    to: "/genre/tv-movie",
  },
  {
    title: "Thriller",
    to: "/genre/thriller",
  },
  {
    title: "War",
    to: "/genre/war",
  },
  {
    title: "Western",
    to: "/genre/western",
  },
];

export const socialMedia: SocialItem[] = [
  {
    label: "LinkedIn",
    href: "",
    icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    href: "",
    icon: FaGithub,
  },
  {
    label: "Facebook",
    href: "",
    icon: FaFacebookF,
  },
  {
    label: "Discord",
    href: "",
    icon: FaDiscord,
  },
];
