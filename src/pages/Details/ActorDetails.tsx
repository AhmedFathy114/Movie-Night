import CollectionCard from "@/components/Cards/CollectionCard";
import PageLoader from "@/features/Shared/PageLoader";
import ActorHero from "@/features/actors/ActorHero";
import { useActorDetails } from "@/features/actors/useActorDetails";
import { useActorMovies } from "@/features/actors/useActorMovies";
import { useActorSocials } from "@/features/actors/useActorSocials";
import DetailsSection from "@/features/movies/movieDetails/DetailsSection";
import { useParams } from "react-router-dom";
function ActorDetails() {
  const { actorId } = useParams<{ actorId: string }>();
  const { actor, isActorDetailsLoading } = useActorDetails(Number(actorId));
  const { socials, isActorSocialLoading } = useActorSocials(Number(actorId));
  const { movies, isActorMoviesLoading } = useActorMovies(Number(actorId));
  if (
    isActorDetailsLoading ||
    !actor ||
    isActorSocialLoading ||
    isActorMoviesLoading
  )
    return <PageLoader message="Loading Actor Details" />;
  return (
    <>
      <PageLoader message="Loading Actor Details" />
      <ActorHero actor={actor} socials={socials} />
      {movies?.cast.length && (
        <DetailsSection
          movieId={Number(actorId)}
          title="Filmography"
          key={actorId}
          items={movies?.cast}
          renderItem={(item) => <CollectionCard key={item.id} movie={item} />}
        />
      )}
    </>
  );
}

export default ActorDetails;
