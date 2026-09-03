import PageLoader from "@/features/Shared/PageLoader";
import { useParams, useSearchParams } from "react-router-dom";
import CategorySection from "@/features/Shared/CategorySection";
import { useEffect, useState } from "react";
import { useAllEndPoint } from "@/features/Shared/useAllEndPoint";
import type { MovieResponse, TVResponse } from "@/types/AllTypes";
import { language } from "@/lib/Variables";
import Pagination from "@/features/Shared/Pagination";
import { capitalizeWords } from "@/lib/utils";

type MediaType = "movie" | "tv";

function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const [type, setType] = useState<MediaType>("movie");
  const [searchParam] = useSearchParams();

  const currentPage = !searchParam.get("page")
    ? 1
    : Number(searchParam.get("page"));

  const endpoints = {
    explore: `/discover/${type}`,

    arabic: `/discover/${type}`,

    trending: `/trending/${type}/day`,

    popular: `/${type}/popular`,

    "top-rated": `/${type}/top_rated`,

    upcoming: type === "movie" ? "/movie/upcoming" : "/tv/airing_today",

    "now-playing": type === "movie" ? "/movie/now_playing" : "/tv/on_the_air",

    "trending-arabic": `/discover/${type}`,
  } as const;

  const endPoint = endpoints[slug as keyof typeof endpoints];

  const { data, isPending } = useAllEndPoint<MovieResponse | TVResponse>(
    endPoint,
    {
      language,
      page: currentPage,
      ...(slug === "trending-arabic"
        ? {
            with_original_language: "ar",
            sort_by: "popularity.desc",
          }
        : {}),
    },
    Boolean(slug && type),
  );

  useEffect(() => {
    document.title = `${capitalizeWords(slug ?? "Movie-Night")} | Movie Night`;
  }, [slug]);

  if (isPending)
    return (
      <PageLoader key={slug} message={`Loading ${slug} movie and tv shows`} />
    );

  const maxPage = Math.min(data?.total_pages ?? 1, 500);

  return (
    <>
      <PageLoader key={slug} message={`Loading ${slug} movie and tv shows`} />;
      <CategorySection
        key={slug}
        title={slug ?? ""}
        type={type}
        setType={setType}
        data={data?.results ?? []}
      />
      <Pagination count={maxPage ?? 1} />
    </>
  );
}

export default CategoryPage;
