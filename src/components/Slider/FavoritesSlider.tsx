"use client";

import Slider, { Settings } from "react-slick";
import { Movie, MovieCard } from "../MovieCard/MovieCard";
import { useState } from "react";
import { CustomNextArrow, CustomPrevArrow } from "./Arrows";
import { useSlider } from "@/hooks/useSlider";
import { useFavoritesStore } from "@/store/favorites-store";

export const FavoritesSlider = () => {
  const [dragging, setDragging] = useState(false);
  const { sliderRef } = useSlider();
  const { favorites } = useFavoritesStore();

  function beforeChange() {
    setDragging(true);
  }
  const afterChange = () => {
    setDragging(false);
  };

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    beforeChange,
    afterChange,
    className: "center",
    centerMode: true,
    variableWidth: true,
    arrows: true,
    responsive: [{ breakpoint: 480, settings: { arrows: false } }],
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="relative mx-0 flex h-full snap-center flex-col gap-10 sm:mx-5 md:gap-20">
      <div className="text-[32px] font-bold text-white">FAVORITES</div>
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
};
