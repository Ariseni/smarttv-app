"use client";

import Slider from "react-slick";
import { Movie, MovieCard } from "../MovieCard/MovieCard";
import { useSlider } from "@/hooks/useSlider";
import { useFavoritesStore } from "@/store/favorites-store";
import { CustomNextArrow, CustomPrevArrow } from "./Arrows";
import { useRef } from "react";

export default function FavoritesSlider() {
  const intersectionRef = useRef<HTMLDivElement>(null);
  const { dragging, settings, sliderRef } = useSlider(intersectionRef);
  const { favorites } = useFavoritesStore();

  return (
    <div className="relative mt-10 mx-0 flex snap-center flex-col gap-10 md:gap-10">
      <div className="px-5 text-[32px] font-bold text-white">Favorites</div>
      {/* intersectionRef is used to see which slider is currently fully visible to enable keyboard slide */}
      <div
        ref={intersectionRef}
        className="absolute left-[50%] top-[50%] h-20 w-20 md:h-[300px] md:w-[300px]"
      />
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
