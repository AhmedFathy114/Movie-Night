import { useQuery } from "@tanstack/react-query";
import { getAllAlooy } from "@/services/Alooy/Alooy";

export function useAllAlooy() {
  const {
    data: alooyItems,
    isLoading: isAlooyLoading,
    isError: isAlooyError,
  } = useQuery({
    queryKey: ["alooy-all"],
    queryFn: getAllAlooy,
  });

  return {
    alooyItems,
    isAlooyLoading,
    isAlooyError,
  };
}