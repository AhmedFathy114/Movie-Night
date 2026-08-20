import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useWeeklyMovies } from "./useWeeklyMovie";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import CarouselSwiperSlide from "./CarouselSwiperSlide";
import type { Movie } from "@/types/Movies";

function Carousel() {
  const { weekMovies } = useWeeklyMovies();

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        className=" md:h-screen
        [&_.swiper-button-prev]:text-red-500!
        [&_.swiper-button-next]:text-red-500!
        [&_.swiper-button-prev]:hidden!
        [&_.swiper-button-next]:hidden!
        md:[&_.swiper-button-prev]:block!
        md:[&_.swiper-button-next]:block!
        [&_.swiper-button-prev]:left-6
        [&_.swiper-button-next]:right-6
        [&_.swiper-button-prev]:h-10!
        [&_.swiper-button-next]:h-10!
        [&_.swiper-button-prev]:w-12!
        [&_.swiper-button-next]:w-12!
      [&_.swiper-pagination-bullet]:bg-red-600!
      [&_.swiper-pagination-bullet-active]:bg-red-500!
        [&_.swiper-pagination-bullet]:mb-2!
        md:[&_.swiper-pagination-bullet]:mb-0!
        [&_.swiper-pagination-bullet-active]:mb-2!    
        md:[&_.swiper-pagination-bullet-active]:mb-0! "
      >
        {weekMovies?.results?.map((movie: Movie) => (
          <SwiperSlide key={movie.id}>
            <CarouselSwiperSlide movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Carousel;
