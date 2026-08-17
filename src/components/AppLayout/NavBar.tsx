import { Link } from "react-router-dom";
import DropMenu from "../DropMenu/DropMenu";
import Search from "./Search";
import { useEffect, useState } from "react";
import SideBar from "./SideBar";

function NavBar() {
  const [scrolled, setScrolled] = useState<boolean>();
  useEffect(function () {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <>
      <nav
        className={`transition-all duration-500 ${scrolled ? "bg-neutral-950/60 backdrop-blur-xl py-3.5 shadow-2xl" : "bg-linear-to-b from-black/80 to-transparent py-5"}`}
      >
        <div className="container mx-auto flex items-center gap-4 px-4 lg:px-20">
          <div className="flex shrink-0 items-center gap-3 md:gap-4">
            <div className="block md:hidden">
              <SideBar />
            </div>
            <Link
              to="/home"
              className="group/logo flex select-none items-center gap-2"
            >
              <h1 className="text-2xl font-black tracking-widest text-red-600 transition-transform group-hover/logo:scale-105 md:text-3xl text-shadow-sm text-shadow-black">
                MOVIE NIGHT
              </h1>
            </Link>
          </div>

          <div className="hidden flex-1 items-center justify-center gap-6 text-[13px] font-bold uppercase tracking-wider md:flex lg:gap-8">
            <Link
              to="/home"
              className="text-neutral-400 transition-all duration-300 hover:scale-105 hover:text-white font-roboto"
            >
              Home
            </Link>

            <DropMenu />

            <Link
              to="/about"
              className="text-neutral-400 transition-all duration-300 hover:scale-105 hover:text-white font-roboto"
            >
              About
            </Link>
          </div>
          <div />
          <Search />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
