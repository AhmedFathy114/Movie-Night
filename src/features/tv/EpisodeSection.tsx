import type { TVEpisode } from "@/types/AllTypes";

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
    <section className="mt-10">
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <div className="h-8 w-1 rounded-full bg-red-700" />

        <h3 className="text-3xl font-bold text-white">
          episodes ({episodes.length})
        </h3>
      </div>

      {/* Season Select */}
      {seasons.length > 1 && (
        <div className="mb-6 w-full sm:w-56">
          <label htmlFor="season-select" className="sr-only">
            Select Season
          </label>

          <select
            id="season-select"
            value={currentSeason}
            onChange={(event) => onSeasonChange(Number(event.target.value))}
            className="
              h-12
              w-full
              cursor-pointer
              appearance-none
              rounded-xl
              border-2
              border-neutral-800
              bg-neutral-900/40
              px-4
              font-roboto
              text-sm
              font-bold
              text-white
              outline-none
              transition
              hover:border-red-600
              focus:border-red-600
            "
          >
            {seasons.map((season) => (
              <option
                key={season.season_number}
                value={season.season_number}
                className="bg-neutral-900 text-white"
              >
                {season.name || `Season ${season.season_number}`}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Episodes Grid */}
      <div
        className="
          grid
          grid-cols-2
          gap-3
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-6
          xl:grid-cols-8
        "
      >
        {episodes.map((episode) => {
          const isActive = episode.episode_number === currentEpisode;

          return (
            <button
              key={episode.id}
              type="button"
              onClick={() => {
                onEpisodeChange(episode.episode_number);
                window.scrollTo({ top: 350, behavior: "smooth" });
              }}
              className={`
                    group relative flex flex-col items-center justify-center overflow-hidden rounded-xl border p-3 transition-all duration-300
                    ${
                      isActive
                        ? "border-red-600 bg-red-600/10 text-red-500"
                        : "border-neutral-800 bg-neutral-900/40 text-neutral-400 hover:border-neutral-600 hover:text-white"
                    }
                  `}
            >
              <span className="text-sm font-bold uppercase tracking-wider">
                {episode.episode_number
                  ? `EP#${episode.episode_number}`
                  : episode.name}
              </span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default EpisodesSection;
