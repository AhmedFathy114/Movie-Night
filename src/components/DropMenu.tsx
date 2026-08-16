import { Link } from "react-router-dom";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  Compass,
  TrendingUp,
  Flame,
  Star,
  CalendarDays,
  Play,
  Hand,
  Mountain,
  Link2,
  Laugh,
  VenetianMask,
  FileText,
  Drama,
  Users,
  WandSparkles,
  History,
  Ghost,
  Music2,
  Search,
  Heart,
  Rocket,
  Tv,
  Skull,
  Flag,
  Tent,
} from "lucide-react";
import type { MenuItem } from "@/types/MovieResponse";

const exploreItems: MenuItem[] = [
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

const genreItems: MenuItem[] = [
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

function MenuLink({ item }: { item: MenuItem }) {
  const Icon = item.icon;

  return (
    <NavigationMenuLink
      render={
        <Link
          to={item.to}
          className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-semibold text-neutral-400 transition-all duration-200 hover:bg-red-950/50 hover:text-white"
        >
          <Icon className="h-5 w-5 shrink-0 text-red-500" strokeWidth={2} />

          <span>{item.title}</span>
        </Link>
      }
    />
  );
}

function DropMenu() {
  return (
    <NavigationMenu className="relative z-50">
      <NavigationMenuList>
        {/* Explore */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-neutral-400 transition-all duration-300 hover:text-white font-roboto">
            Explore
          </NavigationMenuTrigger>

          <NavigationMenuContent className="rounded bg-[#111] p-3 shadow-2xl ">
            <div className="w-90">
              <div className="grid grid-cols-2 gap-1">
                {exploreItems.map((item) => (
                  <MenuLink key={item.title} item={item} />
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Genres */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-neutral-400 transition-all duration-300 hover:text-white font-roboto">
            Genres
          </NavigationMenuTrigger>

          <NavigationMenuContent className="rounded bg-[#111] p-3 shadow-2xl">
            <div className="w-155">
              <div className="grid grid-cols-2 gap-1">
                {genreItems.map((item) => (
                  <MenuLink key={item.title} item={item} />
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default DropMenu;
