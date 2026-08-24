import type { TVEpisode } from "@/types/Movies";

type SeasonOption = {
  season_number: number;
  name: string;
};

type EpisodesSectionProps = {
  episodes: TVEpisode[];
  currentEpisode: number;
  currentSeason: number;
  seasons: SeasonOption[];
  onEpisodeChange: (episodeNumber: number) => void;
  onSeasonChange: (seasonNumber: number) => void;
};

function EpisodesSection({
  episodes,
  currentEpisode,
  currentSeason,
  seasons,
  onEpisodeChange,
  onSeasonChange,
}: EpisodesSectionProps) {
  return (
    <section
      className="
        w-full
        rounded-[28px]
        bg-[#171717]
        px-6
        py-7
        sm:px-8
        sm:py-8
      "
    >
      <div
        className="
          flex
          flex-col
          gap-7
          lg:flex-row
          lg:items-start
          lg:justify-between
          lg:gap-8
        "
      >
        {/* Episodes */}
        <div className="min-w-0 flex-1">
          <h2
            className="
              font-bebas
              text-4xl
              font-bold
              tracking-wide
              text-white
              sm:text-5xl
            "
          >
            EPISODES
          </h2>

          {/* Episodes List */}
          <div
            className="
              mt-7
              flex
              gap-4
              overflow-x-auto
              pb-1
              scrollbar-none
            "
          >
            {episodes.map((episode) => {
              const isActive = episode.episode_number === currentEpisode;
              return (
                <button
                  key={episode.id}
                  type="button"
                  onClick={() => onEpisodeChange(episode.episode_number)}
                  className={`
                    flex
                    lg:h-20
                    h-20
                    lg:w-20
                    w-19
                    shrink-0
                    cursor-pointer
                    flex-col
                    items-center
                    justify-center
                    rounded-xl
                    border-2
                    transition-all
                    duration-200

                    ${
                      isActive
                        ? `
                          border-red-500
                          bg-red-600
                          shadow-lg
                          shadow-red-600/20
                        `
                        : `
                          border-white/10
                          bg-[#242424]
                          hover:border-red-500/60
                          hover:bg-[#2b2b2b]
                        `
                    }
                  `}
                >
                  <span
                    className={`
                      font-roboto
                      text-sm
                      font-semibold
                      ${isActive ? "text-red-100" : "text-slate-400"}
                    `}
                  >
                    EP
                  </span>

                  <span
                    className={`
                      mt-1
                      font-roboto
                      text-2xl
                      font-bold
                      ${isActive ? "text-white" : "text-slate-300"}
                    `}
                  >
                    {episode.episode_number}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Season Select */}
        <div className="w-full shrink-0 lg:w-56">
          <label htmlFor="season-select" className="sr-only">
            Select Season
          </label>

          <select
            id="season-select"
            value={currentSeason}
            onChange={(event) => onSeasonChange(Number(event.target.value))}
            className="
            appearance-none
              h-15
              w-full
              cursor-pointer
              rounded-xl
              border-2
              border-neutral-700
              hover:border-red-600
              focus:border-red-800
              bg-[#242424]
              px-6
              font-roboto
              lg:text-lg
              text-[20px]
              font-bold
              text-white
              outline-none
              transition
              hover:bg-[#2b2b2b]
            "
          >
            {seasons.map((season) => (
              <option
                className="text-[13px] lg:text-lg"
                key={season.season_number}
                value={season.season_number}
              >
                {season.name || `Season ${season.season_number}`}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}

export default EpisodesSection;
