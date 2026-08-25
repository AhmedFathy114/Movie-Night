import { getDetails } from "@/services/shared/AllWithEndPoint";
import { useQuery } from "@tanstack/react-query";

export function useDetails<T>(id: number, type: string) {
  const { data: details, isPending: isLoadingDetails } = useQuery<T>({
    queryKey: [`${type}-details`, id],
    queryFn: () => getDetails(id, type),
    enabled: !!id,
  });

  return { details, isLoadingDetails };
}
