import { getActorDetails } from "@/services/actors/actors";
import { useQuery } from "@tanstack/react-query";

export function useActorDetails(id: number) {
  const { data: actor, isPending: isActorDetailsLoading } = useQuery({
    queryKey: ["actor-details", id],
    queryFn: () => getActorDetails(id),
  });

  return { actor, isActorDetailsLoading };
}
