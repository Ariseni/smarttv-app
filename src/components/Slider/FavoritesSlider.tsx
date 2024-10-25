"use client";

import Slider from "react-slick";
import { Movie, MovieCard } from "../MovieCard/MovieCard";
import { useSlider } from "@/hooks/useSlider";
import { useFavoritesStore } from "@/store/favorites-store";
import { CustomNextArrow, CustomPrevArrow } from "./Arrows";
import { useRef } from "react";

export default function FavoritesSlider() {
  const sliderRef = useRef<Slider>(null);
  const { dragging, settings } = useSlider(sliderRef);
  const { favorites } = useFavoritesStore();

  return (
    <div className="relative mx-0 flex snap-center flex-col gap-10 md:gap-20">
      <div className="px-5 text-[32px] font-bold text-white">Favorites</div>
      <Slider
        {...settings}
        ref={sliderRef}
        nextArrow={<CustomNextArrow />}
        prevArrow={<CustomPrevArrow />}
      >
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
