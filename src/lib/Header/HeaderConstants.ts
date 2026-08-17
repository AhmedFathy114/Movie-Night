import type { MenuItem } from "@/types/Movies";
import {
  CalendarDays,
  Compass,
  Drama,
  FileText,
  Flag,
  Flame,
  Ghost,
  Hand,
  Heart,
  Laugh,
  Link2,
  Mountain,
  Music2,
  Play,
  Rocket,
  Search,
  Skull,
  Star,
  Tent,
  TrendingUp,
  Tv,
  Users,
  VenetianMask,
  WandSparkles,
  History,
} from "lucide-react";

export const exploreItems: MenuItem[] = [
  {
    title: "Explore",
    to: "/explore",
    icon: Compass,
  },
  {
    title: "Trending",
    to: "/trending",
    icon: TrendingUp,
  },
  {
    title: "Popular",
    to: "/popular",
    icon: Flame,
  },
  {
    title: "Top Rated",
    to: "/top-rated",
    icon: Star,
  },
  {
    title: "Upcoming",
    to: "/upcoming",
    icon: CalendarDays,
  },
  {
    title: "Now Playing",
    to: "/now-playing",
    icon: Play,
  },
];

export const genreItems: MenuItem[] = [
  {
    title: "Action",
    to: "/genre/action",
    icon: Hand,
  },
  {
    title: "Adventure",
    to: "/genre/adventure",
    icon: Mountain,
  },
  {
    title: "Animation",
    to: "/genre/animation",
    icon: Link2,
  },
  {
    title: "Comedy",
    to: "/genre/comedy",
    icon: Laugh,
  },
  {
    title: "Crime",
    to: "/genre/crime",
    icon: VenetianMask,
  },
  {
    title: "Documentary",
    to: "/genre/documentary",
    icon: FileText,
  },
  {
    title: "Drama",
    to: "/genre/drama",
    icon: Drama,
  },
  {
    title: "Family",
    to: "/genre/family",
    icon: Users,
  },
  {
    title: "Fantasy",
    to: "/genre/fantasy",
    icon: WandSparkles,
  },
  {
    title: "History",
    to: "/genre/history",
    icon: History,
  },
  {
    title: "Horror",
    to: "/genre/horror",
    icon: Ghost,
  },
  {
    title: "Music",
    to: "/genre/music",
    icon: Music2,
  },
  {
    title: "Mystery",
    to: "/genre/mystery",
    icon: Search,
  },
  {
    title: "Romance",
    to: "/genre/romance",
    icon: Heart,
  },
  {
    title: "Science Fiction",
    to: "/genre/science-fiction",
    icon: Rocket,
  },
  {
    title: "TV Movie",
    to: "/genre/tv-movie",
    icon: Tv,
  },
  {
    title: "Thriller",
    to: "/genre/thriller",
    icon: Skull,
  },
  {
    title: "War",
    to: "/genre/war",
    icon: Flag,
  },
  {
    title: "Western",
    to: "/genre/western",
    icon: Tent,
  },
];
