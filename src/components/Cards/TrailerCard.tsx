import type { Videos } from "@/types/AllTypes";

function TrailerCard({ video }: { video: Videos }) {
  return (
    <article
      className="
        group
        relative
        w-72
        shrink-0
        cursor-pointer
        transition-transform
        duration-300
        ease-out
        
        sm:w-80
        md:w-120
      "
    >
      {/* Video */}
      <div
        className="
          relative
          aspect-video
          w-full
          overflow-hidden
          rounded-2xl
          bg-neutral-900
          ring-1
          ring-white/10
          hover:scale-[1.01]
          transition-all duration-300
        "
      >
        <iframe
          src={`https://www.youtube.com/embed/${video.key}`}
          title={video.name || "Movie trailer"}
          className="absolute inset-0 h-full w-full"
          frameBorder="0"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>

      {/* Title */}
      <p
        className="
          mt-3
          px-1
          line-clamp-1
          font-roboto
          text-sm
          font-semibold
          leading-tight
          text-white
          transition-colors
          duration-300
          group-hover:text-red-500
          lg:text-[14px]
          overflow-hidden
        "
      >
        {video.name || "Untitled Trailer"}
      </p>

      <div className="flex text-neutral-400 text-xs pt-4 gap-5 ms-2">
        <p className="text-[9px] font-black uppercase tracking-wider text-red-600 bg-red-600/10 px-1.5 py-0.5 rounded">
          {video.type}
        </p>
        <p className="text-[11px] text-gray-500 font-medium">{video.site}</p>
        <p></p>
      </div>
    </article>
  );
}

export default TrailerCard;
