import AlooySection from "@/features/Alooy/AlooySection";
import { useAllAlooy } from "@/features/Alooy/useAllAlooy";
import PageLoader from "@/features/Shared/PageLoader";
import { useSearchParams } from "react-router-dom";

function AlooyPage() {
  const [searchParams] = useSearchParams();

  const currentPage = Math.max(1, Number(searchParams.get("page")) || 1);

  const { alooyItems, isAlooyLoading, isAlooyError } = useAllAlooy(currentPage);

  const results = alooyItems?.results ?? [];

  if (isAlooyLoading && !alooyItems) {
    return <PageLoader message="Loading Alooy movie and TV shows" />;
  }

  if (isAlooyError) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-black">
        <p className="text-gray-400">Failed to load Alooy content.</p>
      </section>
    );
  }

  return (
    <>
      <PageLoader message="Loading Alooy movie and TV shows" />
      <AlooySection alooyItems={results} />;
    </>
  );
}

export default AlooyPage;
