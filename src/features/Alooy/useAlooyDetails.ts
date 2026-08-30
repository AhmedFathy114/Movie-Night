import { useQuery } from "@tanstack/react-query";
import { getAlooyDetails } from "@/services/alooy/alooy";

export function useAlooyDetails(url: string | null) {
  const {
    data: details,
    isLoading: isDetailsLoading,
    isError: isDetailsError,
  } = useQuery({
    queryKey: ["alooy-details", url],
    queryFn: () => getAlooyDetails(url!),
    enabled: !!url,
    refetchOnWindowFocus: false,
  });

  return {
    details,
    isDetailsLoading,
    isDetailsError,
  };
}