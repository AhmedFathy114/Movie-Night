import { useQuery, useQueryClient } from "@tanstack/react-query";
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

  const queryClient = useQueryClient();

  if(page > 1){
    const newPage = page-1;
    queryClient.prefetchQuery({
      queryKey:['alooy-all',newPage],
      queryFn:() => getAllAlooy(newPage)
    })
  }

  if(page < 59){
    const newPage = page+1;
    queryClient.prefetchQuery({
      queryKey:['alooy-all',newPage],
      queryFn:() => getAllAlooy(newPage)
    })
  }

  return {
    alooyItems,
    isAlooyLoading,
    isAlooyError,
  };
}