import { Link } from "react-router-dom";
import type { MenuItem } from "@/types/Movies";

function SideMenuItem({ item }: { item: MenuItem }) {
  const Icon = item.icon;

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
      {Icon && <Icon size={18} />}

      <span className="font-bebas text-[18px] tracking-wide">{item.title}</span>
    </Link>
  );
}

export default SideMenuItem;
