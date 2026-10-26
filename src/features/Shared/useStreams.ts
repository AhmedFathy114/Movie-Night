import { GetStreams } from "@/services/shared/GetStreams";
import { useQuery } from "@tanstack/react-query";

export function useStreams(type: string) {
  const {
    data,
    isPending: isStreamsLoading,
    isError: isStreamsError,
  } = useQuery({
    queryKey: ["streams"],
    queryFn: GetStreams,
    staleTime: Infinity,
    gcTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    retry: false,
  });

  const streams =
    data?.filter((stream) => stream.media_type === type) ?? [];

  return {
    streams,
    isStreamsLoading,
    isStreamsError,
  };
}
