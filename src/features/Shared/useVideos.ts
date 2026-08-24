import { getVideos } from "@/services/shared/allWithEndPoint";
import { useQuery } from "@tanstack/react-query";

export function useVideos<T>(id: number, type: string) {
  const { data: videos, isPending: isVideoLoading } = useQuery<T>({
    queryKey: [`${type}-videos`, id],
    queryFn: () => getVideos(id, type),
  });

  return { videos, isVideoLoading };
}
