import { backDropUrl } from "@/lib/Variables";
import type { PersonDetails, PersonSocials } from "@/types/Movies";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"; // import { useNavigate } from "react-router-dom";

function ActorHero({
  actor,
  socials,
}: {
  actor: PersonDetails;
  socials?: PersonSocials;
}) {

  if (!actor) return null;
  return (
    <div className="relative min-h-dvh w-full overflow-hidden mt-2 lg:mt-0">
      {/* Content */}
      <div
        className="
          relative z-10
          flex min-h-dvh
          items-end
          md:items-center
        "
      >
        <div
          className="
            grid
            w-full
            max-w-330
            grid-cols-1
            items-center
            lg:items-start
            gap-10
            px-4
            pt-20
            pb-12
            md:gap-12
            md:px-6
            md:pt-24
            md:pb-16
            lg:grid-cols-[420px_minmax(0,1fr)]
            lg:gap-0
            lg:px-0
            lg:pt-20
            lg:pb-12
          "
        >
          {/* Poster */}
          <div className="flex flex-col justify-center gap-5 ">
            <div className="flex justify-center lg:justify-end">
              <img
                src={
                  actor.profile_path
                    ? `${backDropUrl}${actor.profile_path}`
                    : "/NoPoster.png"
                }
                alt={actor.name}
                decoding="async"
                className={`
                h-100
                w-full
                rounded-2xl
                object-cover
                shadow-2xl
                ring-1
                ring-white/10
                transition-transform
                duration-300
                sm:h-80
                sm:w-53
                md:h-105
                md:w-70
                lg:h-130
                
                ${actor.place_of_birth !== null ? "lg:w-auto" : "lg:w-90"}
              `}
              />
            </div>

            <h1
              className="
                lg:hidden
                block
                py-2
                font-bebas
                whitespace-normal
                text-5xl
                font-bold
                leading-none
                tracking-[-0.001em]
                text-white

                sm:text-5xl

                md:text-6xl

                lg:text-7xl
                lg:whitespace-nowrap
                text-center
                lg:text-start
              "
            >
              {actor.name}
            </h1>

            <div className="flex justify-center lg:justify-end">
              <div
                className="
                  w-full
                  max-w-90
                  rounded-3xl
                  border
                  border-white/10
                  bg-neutral-950
                  px-6
                  py-7
                  text-white
                  shadow-2xl
                  font-roboto
                  "
              >
                <div className="border-b border-red-900/70 pb-3">
                  <h2
                    className="
                    font-bebas
                    text-2xl
                    font-bold
                    tracking-wide
                    text-white
                    "
                  >
                    PERSONAL INFO
                  </h2>
                </div>

                {/* Info */}
                <div className="space-y-3 pt-4">
                  <div>
                    <p className="font-serif text-lg text-slate-400">
                      Known For
                    </p>

                    <p className="mt-1 font-serif text-lg font-semibold text-white">
                      Acting
                    </p>
                  </div>

                  <div>
                    <p className="font-serif text-lg text-slate-400">
                      Birthday
                    </p>

                    <p className="mt-1 font-roboto text-lg font-semibold text-white">
                      {actor.birthday}
                    </p>
                  </div>

                  <div>
                    <p className="font-serif text-lg text-slate-400">
                      Place of Birth
                    </p>

                    <p className="mt-1 font-serif text-lg font-semibold leading-8 text-white">
                      {actor.place_of_birth}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-5 h-px bg-white/10" />

                {/* Social Icons */}
                <div className="flex flex-wrap items-center gap-4">
                  {/* IMDb */}
                  {socials?.imdb_id && (
                    <a
                      href={`https://www.imdb.com/name/${socials?.imdb_id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="IMDb"
                      className="
                        flex h-12 w-12 items-center justify-center
                        rounded-2xl
                        bg-neutral-900
                        text-white
                        transition
                        hover:scale-105
                        hover:bg-neutral-800
                      "
                    >
                      <span className="rounded-sm border border-white/40 px-1 text-[10px] font-bold">
                        IMDb
                      </span>
                    </a>
                  )}

                  {/* Instagram */}
                  {socials?.instagram_id && (
                    <a
                      href={`https://instagram.com/${socials.instagram_id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="
                      flex h-12 w-12 items-center justify-center
                      rounded-2xl
                      bg-neutral-900
                      text-white
                      transition
                      hover:scale-105
                      hover:bg-neutral-800
                    "
                    >
                      <FaInstagram size={23} />
                    </a>
                  )}

                  {/* Facebook */}
                  {socials?.facebook_id && (
                    <a
                      href={`https://facebook.com/${socials.facebook_id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="
                        flex h-12 w-12 items-center justify-center
                        rounded-2xl
                        bg-neutral-900
                        text-white
                        transition
                        hover:scale-105
                        hover:bg-neutral-800
                      "
                    >
                      <FaFacebook size={23} />
                    </a>
                  )}

                  {/* X / Twitter */}
                  {socials?.twitter_id && (
                    <a
                      href={`https://twitter.com/${socials.twitter_id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                      className="
                      flex h-12 w-12 items-center justify-center
                      rounded-2xl
                      bg-neutral-900
                      text-white
                      transition
                      hover:scale-105
                      hover:bg-neutral-800
                    "
                    >
                      <FaTwitter size={22} />
                    </a>
                  )}

                  {/* TikTok */}
                  {socials?.tiktok_id && (
                    <a
                      href={`https://tiktok.com/@${socials.tiktok_id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="TikTok"
                      className="
                      flex h-12 w-12 items-center justify-center
                      rounded-2xl
                      bg-neutral-900
                      text-white
                      transition
                      hover:scale-105
                      hover:bg-neutral-800
                    "
                    >
                      <FaTiktok size={21} />
                    </a>
                  )}

                  {/* YouTube */}
                  {socials?.youtube_id && (
                    <a
                      href={`https://youtube.com/${socials.youtube_id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                      className="
                      flex h-12 w-12 items-center justify-center
                      rounded-2xl
                      bg-neutral-900
                      text-white
                      transition
                      hover:scale-105
                      hover:bg-neutral-800
                    "
                    >
                      <FaYoutube size={23} />
                    </a>
                  )}

                  {/* wikidata */}
                  {socials?.wikidata_id && (
                    <a
                      href={`https://www.wikidata.org/wiki/${socials.wikidata_id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Wikidata"
                      className="
                      flex h-12 w-12 items-center justify-center
                      rounded-2xl
                      bg-neutral-900
                      text-white
                      transition
                      hover:scale-105
                      hover:bg-neutral-800
                    "
                    >
                      <span className="text-xs font-bold">W</span>
                    </a>
                  )}
                </div>

                {/* Official Socials */}
                <button
                  className="
                  mt-8
                  flex items-center gap-3
                  rounded-xl
                  border border-gray-500/10
                  bg-neutral-900
                  px-5 py-1.5
                  text-[11px]
                  font-bold
                  tracking-wide
                  text-gray-400
                  transition
                  font-roboto
                  "
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-red-600 animate-pulse" />
                  OFFICIAL SOCIALS
                </button>
              </div>
            </div>
          </div>

          {/* Details */}
          <div
            className="
              w-full
              px-2
              pb-6

              sm:px-6

              md:ml-10
              
              md:px-0
              md:pb-0

              lg:ml-16
              lg:text-start
            "
          >
            {/* Title */}
            <h1
              className="
                hidden
                lg:block
                font-bebas
                whitespace-normal
                text-4xl
                font-bold
                leading-none
                tracking-[-0.001em]
                text-white

                sm:text-5xl

                md:text-6xl

                lg:text-7xl
                lg:whitespace-nowrap
                text-center
                lg:text-start
              "
            >
              {actor.name}
            </h1>

            {/* Overview */}
            <div className="mt-10 md:mt-7">
              <h2
                className="
                  font-bebas
                  text-2xl
                  tracking-wide
                  text-red-600

                  sm:text-3xl
                "
              >
                Biography
              </h2>

              <p
                className="
                  mx-auto
                  mt-2
                  font-roboto
                  font-semibold
                  pe-2
                  lg:pe-0
                  sm:text-base
                  md:mt-3
                  md:text-lg
                  md:leading-7
                  md:line-clamp-none
                  lg:mx-0
                  text-gray-300 leading-relaxed text-lg max-w-4xl whitespace-pre-line
                "
              >
                {actor.biography}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActorHero;
