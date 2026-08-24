import { useQuery } from "@tanstack/react-query";

import { getAlooyDetails } from "@/services/Alooy/Alooy";
import type { AlooyDetails } from "@/types/Alooy";

export function useAlooyDetails(id?: string) {
  const {
    data: alooyDetails,
    isLoading: isAlooyDetailsLoading,
    isError: isAlooyDetailsError,
  } = useQuery<AlooyDetails>({
    queryKey: ["alooy-details", id],
    queryFn: () => getAlooyDetails(id!),
    enabled: !!id,
  });

  return {
    alooyDetails,
    isAlooyDetailsLoading,
    isAlooyDetailsError,
  };
}