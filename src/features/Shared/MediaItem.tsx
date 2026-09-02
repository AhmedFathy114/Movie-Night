import CollectionCard from "@/components/Cards/CollectionCard";
import { useDetails } from "./useDetails";
import type { Movie, TVShow } from "@/types/AllTypes";

type MediaType = "movie" | "tv";

function MediaItem({
  media_id,
  media_type,
}: {
  media_id: number;
  media_type: MediaType;
}) {
  const { details } = useDetails<Movie | TVShow>(media_id, media_type);

  if (!details) return null;

  return <CollectionCard type={media_type} data={details} key={media_id} />;
}

export default MediaItem;
