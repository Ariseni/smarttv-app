"use client";

import Slider from "react-slick";
import { Movie, MovieCard } from "../MovieCard/MovieCard";
import { useSlider } from "@/hooks/useSlider";
import { useFavoritesStore } from "@/store/favorites-store";

export default function FavoritesSlider() {
  const { sliderRef, dragging, settings } = useSlider();
  const { favorites } = useFavoritesStore();

  return (
    <div className="relative mx-0 flex snap-center flex-col gap-10 sm:mx-5 md:gap-20">
      <div className="px-5 text-[32px] font-bold text-white">Favorites</div>
      <Slider {...settings} ref={sliderRef}>
        {favorites.map((movie: Movie) => {
          return (
            <MovieCard
              listType="discover"
              key={movie.id}
              {...movie}
              video="false"
              adult="false"
              onClick={(e) => {
                if (dragging) {
                  e.preventDefault();
                }
              }}
            />
          );
        })}
      </Slider>
    </div>
  );
}
