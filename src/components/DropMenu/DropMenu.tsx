import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { exploreItems, genreItems } from "@/lib/Header/HeaderConstants";
import MenuLink from "./MenuLink";

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
            <div className="w-125">
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
