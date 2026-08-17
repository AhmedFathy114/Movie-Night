import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Link } from "react-router-dom";

import {
  Menu,
  House,
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
import type { MenuItem } from "@/types/Movies";

const exploreItems: MenuItem[] = [
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
  { title: "Action", to: "/genre/action", icon: Hand },
  { title: "Adventure", to: "/genre/adventure", icon: Mountain },
  { title: "Animation", to: "/genre/animation", icon: Link2 },
  { title: "Comedy", to: "/genre/comedy", icon: Laugh },
  { title: "Crime", to: "/genre/crime", icon: VenetianMask },
  { title: "Documentary", to: "/genre/documentary", icon: FileText },
  { title: "Drama", to: "/genre/drama", icon: Drama },
  { title: "Family", to: "/genre/family", icon: Users },
  { title: "Fantasy", to: "/genre/fantasy", icon: WandSparkles },
  { title: "History", to: "/genre/history", icon: History },
  { title: "Horror", to: "/genre/horror", icon: Ghost },
  { title: "Music", to: "/genre/music", icon: Music2 },
  { title: "Mystery", to: "/genre/mystery", icon: Search },
  { title: "Romance", to: "/genre/romance", icon: Heart },
  { title: "Science Fiction", to: "/genre/science-fiction", icon: Rocket },
  { title: "TV Movie", to: "/genre/tv-movie", icon: Tv },
  { title: "Thriller", to: "/genre/thriller", icon: Skull },
  { title: "War", to: "/genre/war", icon: Flag },
  { title: "Western", to: "/genre/western", icon: Tent },
];

function SideMenuItem({ item }: { item: MenuItem }) {
  return (
    <Link
      to={item.to}
      className="
        group flex items-center gap-4
        rounded-md px-3 py-2.5
        text-neutral-400
        transition-all duration-200
        hover:text-red-500
      "
    >
      {item.icon &&
        (() => {
          const Icon = item.icon;

          return <Icon size={18} />;
        })()}

      <span className="font-bebas text-[18px] tracking-wide">{item.title}</span>
    </Link>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-2 mt-4 border-b border-white/10 pb-2">
      <span className="font-bebas text-xs tracking-[0.2em] text-neutral-500">
        {children}
      </span>
    </div>
  );
}

function SideBar() {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            className="
              h-12 w-12
              rounded-md
              text-white
              hover:bg-transparent
              hover:text-red-500
            "
          />
        }
      >
        <Menu className="size-7 mb-1" strokeWidth={2} />
      </SheetTrigger>

      <SheetContent
        side="left"
        className="
          w-55 max-w-55
          border-r border-white/5
          bg-[#151515]
          p-0
          text-white
          [&>button]:text-white
          [&>button]:opacity-100
          [&>button]:hover:bg-transparent
          [&>button]:hover:text-red-500
          [&>button]:mt-3.5

        "
      >
        <SheetHeader className="sr-only">
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>Movie Night navigation menu</SheetDescription>
        </SheetHeader>

        <div className="flex h-36 items-center border-b border-white/10 px-5 py-3">
          <span className="font-bebas text-2xl tracking-wider text-red-500">
            MENU
          </span>
        </div>

        <div className="overflow-y-auto scrollbar-none px-3 py-3">
          <Link
            to="/home"
            className="
              group flex items-center gap-4
              rounded-md px-3 py-2.5
              text-neutral-400
              transition-all duration-200
              hover:bg-red-950/40
              hover:text-red-500
            "
          >
            <House
              size={19}
              strokeWidth={2.5}
              className="group-hover:text-red-500"
            />

            <span className="font-bebas text-[18px] tracking-wide">Home</span>
          </Link>

          {/* Explore */}
          <Link
            to="/explore"
            className="
              group flex items-center gap-4
              rounded-md px-3 py-2.5
              text-neutral-400
              transition-all duration-200
             
              hover:text-red-500
            "
          >
            <Compass
              size={19}
              strokeWidth={2.5}
              // className="group-hover:text-red-500"
            />

            <span className="font-bebas text-[18px] tracking-wide">
              Explore
            </span>
          </Link>

          <SectionTitle>Categories</SectionTitle>

          {exploreItems.map((item) => (
            <SideMenuItem key={item.title} item={item} />
          ))}

          <SectionTitle>Genres</SectionTitle>

          {genreItems.map((item) => (
            <SideMenuItem key={item.title} item={item} />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default SideBar;
