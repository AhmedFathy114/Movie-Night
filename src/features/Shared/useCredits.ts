import { getCredits } from "@/services/shared/allWithEndPoint";
import type { MovieCredits } from "@/types/Movies";
import { useQuery } from "@tanstack/react-query";

export function useCredits(id: number, type: string) {
  const { data: credits, isPending: isCreditLoading } = useQuery<MovieCredits>({
    queryKey: [`${type}-credits`, id],
    queryFn: () => getCredits(id, type),
    enabled: !!id,
  });

  return { credits, isCreditLoading };
}
