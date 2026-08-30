/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { ChevronLeft, Play } from "lucide-react";
import { useAlooyDetails } from "@/features/Alooy/useAlooyDetails";
import PageLoader from "@/features/Shared/PageLoader";

function AlooyPlayerPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const url = searchParams.get("url");
  const title = searchParams.get("title") || "مشاهدة";

  const { details, isDetailsLoading, isDetailsError } = useAlooyDetails(url);

  const [activeEpIndex, setActiveEpIndex] = useState(0);

  useEffect(() => {
    setActiveEpIndex(0);
  }, [url]);

  if (!url) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-black">
        <p className="text-gray-400">الرابط غير صحيح أو مفقود.</p>
      </section>
    );
  }

  if (isDetailsLoading) {
    return <PageLoader message="Loading Alooy player" />;
  }

  if (isDetailsError || !details) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-black">
        <p className="text-gray-400">فشل في تحميل تفاصيل العرض.</p>
      </section>
    );
  }

  const episodes = details.episodes || [];
  const currentEpisode = episodes[activeEpIndex];

  return (
    <section className="relative min-h-screen bg-black pt-20 px-3 sm:px-6 md:px-10 lg:px-20 pb-10">
      <div className="mb-6 flex flex-col gap-4">
        <button
          onClick={() => navigate(-1)}
          className="flex w-fit items-center gap-2 rounded-xl bg-neutral-900/50 px-4 py-2 text-sm text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white"
        >
          <ChevronLeft className="h-5 w-5" />
          <span>عودة</span>
        </button>
        <h1 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
          {title}{" "}
          {episodes.length > 1 && (
            <span className="text-red-600">- {currentEpisode?.title}</span>
          )}
        </h1>
      </div>

      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-neutral-900 shadow-2xl border border-white/5">
        {currentEpisode?.video ? (
          <video
            key={currentEpisode.video}
            controls
            autoPlay
            className="h-full w-full"
            controlsList="nodownload"
          >
            <source
              src={currentEpisode.video}
              type={currentEpisode.videoType || "video/mp4"}
            />
          </video>
        ) : (
          <div className="flex h-full w-full items-center justify-center flex-col gap-3">
            <Play className="h-12 w-12 text-neutral-600" />
            <p className="text-neutral-500">
              لا يوجد مصدر فيديو متاح لهذه الحلقة.
            </p>
          </div>
        )}
      </div>

      {episodes.length > 1 && (
        <div className="mt-10">
          <div className="mb-6 flex items-center gap-3">
            <div className="h-6 w-1 rounded-full bg-red-700" />
            <h3 className="text-xl font-bold text-white">
              الحلقات ({details.count})
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
            {episodes.map((ep, index) => {
              const isActive = activeEpIndex === index;
              return (
                <button
                  key={ep.url}
                  onClick={() => {
                    setActiveEpIndex(index);
                    window.scrollTo({ top: 0, behavior: "smooth" });
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
                    {ep.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}

export default AlooyPlayerPage;
