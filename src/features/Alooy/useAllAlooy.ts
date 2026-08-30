import { useQuery } from "@tanstack/react-query";
import { getAllAlooy } from "@/services/alooy/alooy";

export function useAllAlooy(page: number) {
  const {
    data: alooyItems,
    isLoading: isAlooyLoading,
    isError: isAlooyError,
  } = useQuery({
    queryKey: ["alooy-all", page],
    queryFn: () => getAllAlooy(page),
    placeholderData: (previousData) => previousData,
  });

  return {
    alooyItems,
    isAlooyLoading,
    isAlooyError,
  };
}