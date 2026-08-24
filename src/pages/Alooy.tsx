import AlooySection from "@/features/Alooy/AlooySection";
import { useAllAlooy } from "@/features/Alooy/useAllAlooy";
import PageLoader from "@/features/Shared/PageLoader";
import { PAGE_SIZE } from "@/lib/Variables";
import { useSearchParams } from "react-router-dom";

function Alooy() {
  const [searchParam, setSearchParam] = useSearchParams();
  const { alooyItems, isAlooyLoading } = useAllAlooy();

  if (isAlooyLoading) return <PageLoader message="Loading movie and Tv show" />;

  const currentPage = !searchParam.get("page")
    ? 1
    : Number(searchParam.get("page"));
  const pageCount = Math.ceil((alooyItems?.total ?? 0) / PAGE_SIZE);

  function handleNext() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    searchParam.set("page", `${next}`);
    setSearchParam(searchParam);
  }

  function handlePrev() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParam.set("page", `${prev}`);
    setSearchParam(searchParam);
  }

  if (pageCount <= 1) return null;

  const items = alooyItems?.result
    ?.filter((item) => item.title && item.image)
    .slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  return (
    <>
      <PageLoader message="Loading movie and Tv show" />
      {alooyItems?.result.length && (
        <AlooySection
          alooyItems={items ?? []}
          handleNext={handleNext}
          handlePrev={handlePrev}
          currentPage={currentPage}
          pageCount={pageCount}
        />
      )}
    </>
  );
}

export default Alooy;
