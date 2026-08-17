export default function Loading() {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-black">
      <div className="relative flex flex-col items-center">
        <div className="absolute inset-0 -m-8 animate-ping rounded-full border-4 border-red-600/40" />

        <h1 className="font-bebas text-6xl font-black tracking-widest text-red-700/70 md:text-8xl">
          Movie Night
        </h1>

        <p className="mt-4 text-xs font-bold uppercase tracking-widest text-zinc-500 animate-pulse">
          Summoning Stars...
        </p>
      </div>
    </div>
  );
}