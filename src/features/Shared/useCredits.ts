import { getCredits } from "@/services/shared/AllWithEndPoint";
import type { MovieCredits } from "@/types/AllTypes";
import { useQuery } from "@tanstack/react-query";

export function useCredits(id: number, type: string) {
  const { data: credits, isPending: isCreditLoading } = useQuery<MovieCredits>({
    queryKey: [`${type}-credits`, id],
    queryFn: () => getCredits(id, type),
    enabled: !!id,
  });

  return { credits, isCreditLoading };
}
