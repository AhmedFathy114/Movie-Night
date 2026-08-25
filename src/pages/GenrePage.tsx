import CategorySection from "@/features/Shared/CategorySection";
import PageLoader from "@/features/Shared/PageLoader";
import Pagination from "@/features/Shared/Pagination";
import { useAllEndPoint } from "@/features/Shared/useAllEndPoint";
import { genreItems } from "@/lib/Header/HeaderConstants";
import { language } from "@/lib/Variables";
import type { MovieResponse, TVResponse } from "@/types/AllTypes";
import { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
type MediaType = "movie" | "tv";

function GenrePage() {
  const { slug } = useParams<{ slug: string }>();
  const [type, setType] = useState<MediaType>("movie");
  const [searchParam] = useSearchParams();

  const currentPage = !searchParam.get("page")
    ? 1
    : Number(searchParam.get("page"));

  const genreItem = genreItems.find((item) => item.to === `/genre/${slug}`);

  const genreId =
    type === "movie" ? genreItem?.movieGenreId : genreItem?.tvGenreId;

  const { data, isPending } = useAllEndPoint<MovieResponse | TVResponse>(
    `/discover/${type}`,
    {
      language,
      page: currentPage,
      with_genres: genreId!,
    },
    Boolean(slug && type),
  );

  if (isPending)
    return (
      <PageLoader key={slug} message={`Loading ${slug} movie and tv shows`} />
    );

  const maxPage = Math.min(data?.total_pages ?? 1, 500);

  return (
    <>
      <PageLoader key={slug} message={`Loading ${slug} movie and tv shows`} />
      <CategorySection
        key={slug}
        title={slug ?? ""}
        type={type}
        setType={setType}
        data={data?.results ?? []}
      />
      <Pagination count={maxPage} />
    </>
  );
}

export default GenrePage;
