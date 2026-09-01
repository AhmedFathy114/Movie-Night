import { Link } from "react-router-dom";
import DropMenu from "../DropMenu/DropMenu";
import Search from "../Search/Search";
import { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import { UserRound } from "lucide-react";
import { useUser } from "@/features/authentication/useUser";
import { useProfile } from "@/features/authentication/useProfile";

function NavBar() {
  const [scrolled, setScrolled] = useState<boolean>();
  const { user, isAuthenticated } = useUser();
  const { profile } = useProfile(user?.id ?? "");

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
        <div className="container mx-auto flex items-center gap-4 px-4 lg:px-15">
          <div className="flex shrink-0 items-center gap-3 md:gap-4 sm:ms-7 lg:ms-0">
            <div className="block lg:hidden">
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

          <div className="hidden flex-1 items-center justify-center gap-6 text-[13px] font-bold uppercase tracking-wider lg:flex lg:gap-8">
            <Link
              to="/home"
              className="text-neutral-400 transition-all duration-300 hover:scale-105 hover:text-white font-roboto"
            >
              Home
            </Link>

            <DropMenu />

            <Link
              to="/alooy"
              className="text-neutral-400 transition-all duration-300 hover:scale-105 hover:text-white font-roboto text-[12.1px]"
            >
              Alooy Tv
            </Link>

            <Link
              to="/about"
              className="text-neutral-400 transition-all duration-300 hover:scale-105 hover:text-white font-roboto"
            >
              About
            </Link>
          </div>
          <div />
          <div className="flex items-center sm:gap-10 ms-auto lg:ms-0 lg:me-0 me-3">
            <Search />

            <Link
              to={isAuthenticated ? "/profile" : "/login"}
              className="
              flex size-7 shrink-0 items-center justify-center
              overflow-hidden rounded-full
              text-white
              transition-colors hover:text-red-500
              lg:size-10
              lg:border lg:border-white/10
              lg:bg-black/20
            "
            >
              {profile?.avatar_url ? (
                <img
                  src={profile?.avatar_url}
                  alt={profile?.full_name || "Profile"}
                  className="
                    size-full
                    object-cover
                    rounded-full
                    block
                  "
                />
              ) : (
                <UserRound className="size-6 lg:size-5" />
              )}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
