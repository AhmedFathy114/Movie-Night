import { useEffect, useState } from "react";
import Carousel from "@/features/movies/Carousel";
import Section from "@/components/HeroSections";
import { createPortal } from "react-dom";
import LoadingModel from "@/components/Loaders/LoadingModel";

function Home() {
  const [showLoader, setShowLoader] = useState(true);
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideLoader(true);
      setTimeout(() => {
        setShowLoader(false);
      }, 600);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader &&
        createPortal(
          <div
            className={`fixed inset-0 z-9999 transition-opacity duration-600 ${
              hideLoader ? "opacity-0" : "opacity-100"
            }`}
          >
            <LoadingModel message="Loading home page" />
          </div>,
          document.body,
        )}

      <div>
        <Carousel />
        <Section
          title="Popular Movies"
          endpoint="/movie/popular"
          params={{
            language: "en-US",
            page: 1,
          }}
        />

        <Section
          title="Popular TV Shows"
          endpoint="/tv/popular"
          params={{
            language: "en-US",
            page: 1,
          }}
        />

        <Section
          title="Popular Actors"
          endpoint="/person/popular"
          params={{
            language: "en-US",
            page: 1,
          }}
        />

        <Section
          title="Now Playing Movies"
          endpoint="/movie/now_playing"
          params={{
            language: "en-US",
            page: 1,
          }}
        />

        <Section
          title="Anime Series"
          endpoint="/discover/tv"
          params={{
            language: "en-US",
            page: 1,
            with_genres: 16,
            with_keywords: 210024,
            with_original_language: "ja",
            include_adult: false,
            "air_date.gte": "2026-03-23",
          }}
        />

        <Section
          title="Airing Today TV Shows"
          endpoint="/tv/airing_today"
          params={{
            language: "en-US",
            page: 1,
          }}
        />

        <Section
          title="Popular Movies in Egypt"
          endpoint="/discover/movie"
          params={{
            language: "ar-EG",
            page: 1,
            region: "EG",
            with_origin_country: "EG",
            sort_by: "popularity.desc",
            "primary_release_date.gte": "2020-01-01",
          }}
        />
        <Section
          title="Trending TV Shows in Egypt"
          endpoint="/discover/tv"
          params={{
            language: "ar-EG",
            page: 1,
            region: "EG",
            with_origin_country: "EG",
            sort_by: "popularity.desc",
            "primary_release_date.gte": "2020-01-01",
          }}
        />
        <Section
          title="Top Rated Egyptian Movies"
          endpoint="/discover/movie"
          params={{
            language: "ar-EG",
            page: 1,
            with_origin_country: "EG",
            sort_by: "vote_average.desc",
            "vote_count.gte": 50,
          }}
        />
        <Section
          title="Action Movies"
          endpoint="/discover/movie"
          params={{
            language: "en-US",
            page: 1,
            with_genres: 28,
          }}
        />
        <Section
          title="Comedy Movies"
          endpoint="/discover/movie"
          params={{
            language: "en-US",
            page: 1,
            with_genres: 28,
          }}
        />
        <Section
          title="Anime Movies"
          endpoint="/discover/movie"
          params={{
            language: "en-US",
            page: 1,
            with_genres: 16,
          }}
        />
        <Section
          title="Coming Soon Movies"
          endpoint="/movie/upcoming"
          params={{
            language: "en-US",
            page: 1,
            with_genres: 16,
          }}
        />
        <Section
          title="Coming Soon TV Shows"
          endpoint="/tv/on_the_air"
          params={{
            language: "en-US",
            page: 1,
            with_genres: 16,
          }}
        />
        <Section
          title="Top Rated Movies"
          endpoint="/movie/top_rated"
          params={{
            language: "en-US",
            page: 1,
            with_genres: 16,
          }}
        />
        <Section
          title="Top Rated TV Shows"
          endpoint="/tv/top_rated"
          params={{
            language: "en-US",
            page: 1,
            with_genres: 16,
          }}
        />
        <Section
          title="Critically Acclaimed Movies"
          endpoint="/discover/movie"
          params={{
            language: "en-US",
            page: 1,
            "vote_average.gte": 7.5,
            "vote_count.gte": 1000,
          }}
        />
      </div>
      {/* )} */}
    </>
  );
}

export default Home;
