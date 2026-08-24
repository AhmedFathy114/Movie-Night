import { getRecommended } from "@/services/shared/allWithEndPoint";
import { useQuery } from "@tanstack/react-query";

export function useRecommended<T>(id: number, type: string) {
  const { data: Recommended, isPending: isRecommendedLoading } = useQuery<T>({
    queryKey: [`${type}-recommends`, id],
    queryFn: () => getRecommended(id, type),
    enabled: !!id,
  });

  return { Recommended, isRecommendedLoading };
}
