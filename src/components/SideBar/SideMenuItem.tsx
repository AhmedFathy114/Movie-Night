import { NavLink } from "react-router-dom";
import type { MenuItem } from "@/types/Movies";

function SideMenuItem({
  item,
  onNavigate,
}: {
  item: MenuItem;
  onNavigate?: () => void;
}) {
  const Icon = item.icon;

  return (
    <NavLink
      to={item.to}
      onClick={onNavigate}
      className={({ isActive }) => `
        group flex items-center gap-4
        rounded-md px-3 py-2.5
        transition-all duration-200
        ${isActive ? "text-red-500 text-[20px]" : "text-neutral-400 hover:text-red-500 text-[18px]"}
      `}
    >
      {Icon && <Icon size={18} />}

      <span className="font-bebas  tracking-wide">{item.title}</span>
    </NavLink>
  );
}

export default SideMenuItem;
