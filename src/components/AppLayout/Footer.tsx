import { Link } from "react-router-dom";
import {
  discoverLinks,
  genreItems,
  navigationLinks,
  socialMedia,
} from "@/lib/Footer/Footer";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-neutral-800 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-8 lg:px-16 text-center md:text-start">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 ">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="font-bebas text-3xl tracking-widest text-red-600">
              MOVIE NIGHT
            </h2>

            <p className="max-w-xs text-sm leading-relaxed text-gray-300 font-roboto ps-6 md:ps-0 ">
              Your ultimate destination for movie enthusiasts. Discover, watch,
              and enjoy cinema like never before.
            </p>

            <div className="flex gap-4 justify-center md:justify-start">
              {socialMedia.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.label}
                    href={social.href || "#"}
                    target={social.href ? "_blank" : undefined}
                    rel={social.href ? "noopener noreferrer" : undefined}
                    aria-label={social.label}
                    className="
                      flex h-10 w-10 items-center justify-center
                      rounded-full bg-neutral-900
                      text-gray-300
                      transition-all duration-300
                      hover:scale-105
                      hover:bg-red-500
                      hover:text-white
                    "
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="ms-3">
            <h3 className="mb-4 text-lg font-semibold text-white font-roboto">
              Navigation
            </h3>

            <ul className="space-y-2 font-roboto">
              {navigationLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-300 transition-colors duration-200 hover:text-red-500"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white font-roboto">
              Discover
            </h3>

            <ul className="space-y-2 font-roboto">
              {discoverLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-300 transition-colors duration-200 hover:text-red-500"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-white font-roboto">
              Quick Links
            </h3>

            <ul className="space-y-2 font-roboto">
              {genreItems.slice(0, 5).map((genre) => (
                <li key={genre.to}>
                  <Link
                    to={genre.to}
                    className="text-sm text-gray-300 transition-colors duration-200 hover:text-red-500"
                  >
                    {genre.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-6 md:flex-row">
          <p className="text-sm text-gray-400 font-roboto">
            © {currentYear} Movie Night. All rights reserved.
          </p>

          <p className="text-sm text-gray-400 font-roboto">
            Powered by{" "}
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 underline underline-offset-4 transition-colors hover:text-red-400"
            >
              TMDB API
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
