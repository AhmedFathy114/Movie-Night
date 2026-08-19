import MovieHero from "@/features/movies/MovieHero";
import { useMovieDetails } from "@/features/movies/useMovieDetails";
import { useMovieVideos } from "@/features/movies/useMovieVideos";
import PageLoader from "@/features/Shared/PageLoader";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const { movieId } = useParams<{ movieId: string }>();
  const { movie, isMovieLoading } = useMovieDetails(Number(movieId));
  const { videos } = useMovieVideos(Number(movieId));

  if (isMovieLoading || !movie)
    return <PageLoader message="Loading Movie Details" />;

  const finalTrailer =
    videos?.results.find(
      (video) =>
        video.site === "YouTube" &&
        video.type === "Trailer" &&
        video.name.toLowerCase().includes("final trailer"),
    ) ??
    videos?.results.find(
      (video) =>
        video.site === "YouTube" &&
        video.type === "Trailer" &&
        video.name.toLowerCase().includes("official trailer"),
    ) ??
    videos?.results.find(
      (video) => video.site === "YouTube" && video.type === "Trailer",
    );

  return (
    <>
      <PageLoader key={movieId} message="Loading Movie Details" />

      <MovieHero finalTrailer={finalTrailer} movie={movie} />
    </>
  );
}

export default MovieDetails;
