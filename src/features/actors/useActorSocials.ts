import { getActorSocials } from "@/services/actors/actors";
import { useQuery } from "@tanstack/react-query";

export function useActorSocials(id: number) {
  const { data: socials, isPending: isActorSocialLoading } = useQuery({
    queryKey: ["actor-socials", id],
    queryFn: () => getActorSocials(id),
  });

  return { socials, isActorSocialLoading };
}
