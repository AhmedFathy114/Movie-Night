import { getSimilar } from "@/services/shared/AllWithEndPoint";
import { useQuery } from "@tanstack/react-query";

export function useSimilar<T>(id: number, type: string) {
  const { data: Similar, isPending: isSimilarLoading } = useQuery<T>({
    queryKey: [`${type}-similar`, id],
    queryFn: () => getSimilar(id, type),
    enabled: !!id,
  });

  return { Similar, isSimilarLoading };
}
