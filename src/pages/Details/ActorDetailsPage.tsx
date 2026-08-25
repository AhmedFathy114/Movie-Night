import CollectionCard from "@/components/Cards/CollectionCard";
import PageLoader from "@/features/Shared/PageLoader";
import ActorHero from "@/features/actors/ActorHero";
import { useActorDetails } from "@/features/actors/useActorDetails";
import { useActorMovies } from "@/features/actors/useActorMovies";
import { useActorSocials } from "@/features/actors/useActorSocials";
import DetailsSection from "@/features/Shared/DetailsSection";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
function ActorDetails() {
  const { actorId, slug } = useParams<{ actorId: string; slug: string }>();
  const { actor, isActorDetailsLoading } = useActorDetails(Number(actorId));
  const { socials } = useActorSocials(Number(actorId));
  const { movies } = useActorMovies(Number(actorId));

  useEffect(
    function () {
      document.title = slug
        ? `${slug.replaceAll("-", " ")} | Movie Night`
        : "Movie Night";
    },
    [slug],
  );

  if (isActorDetailsLoading || !actor)
    return <PageLoader message="Loading Actor Details" />;
  return (
    <>
      <PageLoader message="Loading Actor Details" />
      <ActorHero actor={actor} socials={socials} />
      {(movies?.cast.length ?? 0) > 1 && (
        <DetailsSection
          id={Number(actorId)}
          title="Filmography"
          key={actorId}
          items={movies?.cast ?? []}
          renderItem={(item) => (
            <CollectionCard key={item.id} data={item} type="movie" />
          )}
        />
      )}
    </>
  );
}

export default ActorDetails;
