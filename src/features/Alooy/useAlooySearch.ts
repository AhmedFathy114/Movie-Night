import { useQuery } from "@tanstack/react-query";
import { searchAlooy } from "@/services/alooy/alooy";

export function useAlooySearch(q?: string) {
  const query = q?.trim() ?? "";

  const {
    data: alooySearch,
    isLoading: isAlooySearchLoading,
    isError: isAlooySearchError,
  } = useQuery({
    queryKey: ["alooy-search", query],
    queryFn: () => searchAlooy(query),
    enabled: Boolean(query),
  });

  return {
    alooySearch,
    isAlooySearchLoading,
    isAlooySearchError,
  };
}