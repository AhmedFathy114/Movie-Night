import type { MenuItem } from "@/types/AllTypes";
import { NavigationMenuLink } from "../ui/navigation-menu";
import { Link } from "react-router-dom";

function MenuLink({ item }: { item: MenuItem }) {
  const Icon = item.icon;

  return (
    <NavigationMenuLink
      render={
        <Link
          to={item.to}
          className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-semibold text-neutral-400 transition-all duration-200 hover:bg-red-950/50 hover:text-white"
        >
          {Icon && (
            <Icon className="h-5 w-5 shrink-0 text-red-500" strokeWidth={2} />
          )}

          <span>{item.title}</span>
        </Link>
      }
    />
  );
}

export default MenuLink;
