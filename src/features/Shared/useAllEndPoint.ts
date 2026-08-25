import { fetchAllTypes } from "@/services/shared/AllWithEndPoint";
import { keepPreviousData, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

interface PaginatedResponse {
  total_pages: number;
}

export function useAllEndPoint<T extends PaginatedResponse>(
  endpoint: string,
  params?: Record<string, string | number | boolean>,
  shouldFetch: boolean = false,
) {
    const [searchParam] = useSearchParams();
    const currentPage = !searchParam.get("page") ? 1 : Number(searchParam.get("page"));
    const queryClient = useQueryClient();
  const { data, isPending } = useQuery<T>({
    queryKey: ["all-types", endpoint, params],
    queryFn: () => fetchAllTypes(endpoint, params),
    enabled: shouldFetch,
    placeholderData: keepPreviousData,
  });

    if(currentPage<(data?.total_pages ?? 1)){
      const nextParams = {
      ...params,
      page: currentPage+1,
    };
    queryClient.prefetchQuery({
      queryKey: ["all-types", endpoint, nextParams],
      queryFn: () => fetchAllTypes(endpoint, nextParams),
    })
  }

    if(currentPage>1){
      const nextParams = {
      ...params,
      page: currentPage-1,
    };
    queryClient.prefetchQuery({
      queryKey: ["all-types", endpoint, nextParams],
      queryFn: () => fetchAllTypes(endpoint, nextParams),
    })
  }


  return { data, isPending };
}
