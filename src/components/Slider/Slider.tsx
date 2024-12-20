"use client";

import Slider, { Settings } from "react-slick";
import { Movie, MovieCard } from "../MovieCard/MovieCard";
import {
  DiscoverFilterParams,
  SearchFilterParams,
  useDiscover,
} from "../../hooks/useTmdb";
import { useRef, useState } from "react";
import { CustomNextArrow, CustomPrevArrow } from "./Arrows";
import { useSlider } from "@/hooks/useSlider";

type SliderRowProps<T extends "search" | "discover"> = {
  listType: T;
  list?: "movie" | "tv";
  filterParams: T extends "discover"
    ? DiscoverFilterParams
    : SearchFilterParams;
};

export default function SliderRow<T extends "search" | "discover">({
  list = "movie",
  filterParams,
  listType,
}: SliderRowProps<T>) {
  const [dragging, setDragging] = useState(false);
  const intersectionRef = useRef<HTMLDivElement>(null);
  const { sliderRef } = useSlider(intersectionRef);

  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } = useDiscover({
    url: `${process.env.NEXT_PUBLIC_TMDB_API_URL}/${listType}/${list}`,
    filterParams,
  });

  function beforeChange(index: number, nextIndex: number) {
    setDragging(true);
    const totalSlides = data?.pages.flatMap((page) => page.results).length || 0;
    if (
      index > 0 &&
      nextIndex + (settings.slidesToShow || 5) >= totalSlides &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage();
    }
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
    <>
      <div
        ref={intersectionRef}
        className="absolute left-[50%] top-[50%] h-20 w-20 md:h-[300px] md:w-[300px]"
      />
      {data ? (
        <Slider {...settings} ref={sliderRef}>
          {data?.pages.flatMap((page) =>
            page.results.map((movie: Movie) => {
              return (
                <MovieCard
                  onClick={(e) => {
                    if (dragging) {
                      e.preventDefault();
                    }
                  }}
                  listType={listType}
                  key={movie.id}
                  {...movie}
                  video="false"
                  adult="false"
                />
              );
            }),
          )}
        </Slider>
      ) : (
        <span className="text-[32px] text-white">no data</span>
      )}
    </>
  );
}
