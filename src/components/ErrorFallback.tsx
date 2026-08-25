import { RotateCcw, TriangleAlert } from "lucide-react";
import type { FallbackProps } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const errorMessage =
    error instanceof Error ? error.message : "An unexpected error occurred.";

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] px-5 font-roboto">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-700/10 blur-[140px]" />

      <div className="relative z-10 w-full max-w-lg text-center">
        <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-3xl border border-red-900/40 bg-red-950/20 shadow-2xl shadow-red-950/20">
          <TriangleAlert size={36} strokeWidth={1.7} className="text-red-600" />
        </div>

        <p className="mb-3 text-[10px] font-black uppercase tracking-[0.35em] text-red-600">
          Movie Night
        </p>

        <h1 className="text-3xl font-black tracking-wider text-white sm:text-4xl">
          Something went wrong
        </h1>

        <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-neutral-500 sm:text-[15px]">
          Something unexpected happened while loading this page. Don't worry,
          you can try again or go back.
        </p>

        <div className="mx-auto mt-6 max-w-md rounded-2xl border border-white/5 bg-neutral-900/50 px-4 py-3 text-left backdrop-blur-md">
          <p className="truncate font-mono text-xs text-neutral-600">
            {errorMessage}
          </p>
        </div>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <button
            onClick={resetErrorBoundary}
            className="
              group flex items-center justify-center gap-2
              rounded-2xl
              border border-red-600
              bg-red-600
              px-7 py-3.5
              text-xs font-black uppercase tracking-widest
              text-white
              shadow-lg shadow-red-900/20
              transition-all duration-300
              hover:bg-red-700
              hover:shadow-red-900/30
              active:scale-95
            "
          >
            <RotateCcw
              size={16}
              className="transition-transform duration-500 group-hover:rotate-180"
            />
            Try Again
          </button>
        </div>

        <div className="mx-auto mt-10 h-px w-24 bg-linear-to-r from-transparent via-red-700/60 to-transparent" />
      </div>
    </main>
  );
}

export default ErrorFallback;
