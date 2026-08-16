import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import Carousel from "@/features/movies/Carousel";
import Section from "@/components/HeroSections";

function Home() {
  const [showLoader, setShowLoader] = useState(true);
  const [hideLoader, setHideLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHideLoader(true);
      setTimeout(() => {
        setShowLoader(false);
      }, 600);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader ? (
        <div
          className={`fixed inset-0 z-100 transition-opacity duration-600 ${
            hideLoader ? "opacity-0" : "opacity-100"
          }`}
        >
          <Loading />
        </div>
      ) : (
        <div>
          <Carousel />
          <Section title="Popular Movies" endpoint="/movie/popular" />
          <Section title="Popular TV Shows" endpoint="/tv/popular" />
        </div>
      )}
    </>
  );
}

export default Home;
