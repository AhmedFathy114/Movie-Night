import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { NavLink } from "react-router-dom";

import { Compass, House, Menu, Tv, X } from "lucide-react";
import { exploreItems, genreItems } from "@/lib/Header/HeaderConstants";
import SideMenuItem from "./SideMenuItem";
import SectionTitle from "./SideBarTitle";
import { useState } from "react";

function SideBar() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {/* Open Button */}
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
        <Menu className="mb-1 size-7" strokeWidth={2} />
      </SheetTrigger>

      {/* Sidebar */}
      <SheetContent
        side="left"
        showCloseButton={false}
        className="
          w-55 max-w-55
          sm:data-[side=left]:w-75
          sm:data-[side=left]:max-w-75
          sm:ps-4
          border-r border-white/5
          bg-[#151515]
          p-0
          text-white
          [&>button]:text-white
          [&>button]:opacity-100
          [&>button]:hover:bg-transparent
          [&>button]:hover:text-red-500
          z-9999
          "
      >
        {/* Accessibility */}
        <SheetHeader className="sr-only">
          <SheetTitle>Menu</SheetTitle>
          <SheetDescription>Movie Night navigation menu</SheetDescription>
        </SheetHeader>

        {/* Header */}
        <div
          className="
            relative
            flex
            h-20
            shrink-0
            items-center
            border-b
            border-white/10
            px-5
            py-3
          "
        >
          <span
            className="
              font-bebas
              text-2xl
              tracking-wider
              text-red-500
            "
          >
            MENU
          </span>

          {/* Close Button */}
          <SheetClose
            className="
              absolute
              right-4
              top-1/2
              flex
              size-8
              -translate-y-1/2
              items-center
              justify-center
              rounded-md
              text-white
              transition-colors
              hover:bg-transparent
              hover:text-red-500
            "
          >
            <X size={20} strokeWidth={2.5} />
            <span className="sr-only">Close menu</span>
          </SheetClose>
        </div>

        {/* Menu Content */}
        <div
          className="
            min-h-0
            flex-1
            overflow-y-auto
            scrollbar-thin!
            scrollbar-thumb-red-500!
            scrollbar-track-piece!
            px-3
            py-1
          "
        >
          {/* Home */}
          <NavLink
            to="/home"
            onClick={() => setOpen(false)}
            className={({ isActive }) => `
            group flex items-center gap-4
            rounded-md px-3 py-2.5
            transition-all duration-200
            ${isActive ? "text-red-500 text-[20px]" : "text-neutral-400 hover:text-red-500 text-[18px]"}
          `}
          >
            <House size={19} strokeWidth={2.5} />

            <span className="font-bebas tracking-wide">Home</span>
          </NavLink>

          <NavLink
            to="/alooy"
            onClick={() => setOpen(false)}
            className={({ isActive }) => `
              group flex items-center gap-4
              rounded-md px-3 py-2.5
              transition-all duration-200
              ${isActive ? "text-red-500 text-[20px]" : "text-neutral-400 hover:text-red-500 text-[18px]"}
            `}
          >
            <Tv size={19} strokeWidth={2.5} />

            <span className="font-bebas tracking-wide ">Alooy Tv</span>
          </NavLink>

          {/* Explore */}
          <NavLink
            to="/about"
            onClick={() => setOpen(false)}
            className={({ isActive }) => `
              group flex items-center gap-4
              rounded-md px-3 py-2.5
              transition-all duration-200
              ${isActive ? "text-red-500 text-[20px]" : "text-neutral-400 hover:text-red-500 text-[18px]"}
            `}
          >
            <Compass size={19} strokeWidth={2.5} />

            <span className="font-bebas tracking-wide ">About</span>
          </NavLink>

          {/* Categories */}
          <SectionTitle>Categories</SectionTitle>

          {exploreItems.map((item) => (
            <SideMenuItem
              key={item.title}
              item={item}
              onNavigate={() => setOpen(false)}
            />
          ))}

          {/* Genres */}
          <SectionTitle>Genres</SectionTitle>

          {genreItems.map((item) => (
            <SideMenuItem
              key={item.title}
              item={item}
              onNavigate={() => setOpen(false)}
            />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default SideBar;
