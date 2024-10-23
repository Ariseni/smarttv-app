"use client";

import Slider, { Settings } from "react-slick";
import { Movie, MovieCard } from "./MovieCard";
import {
  DiscoverFilterParams,
  SearchFilterParams,
  useDiscover,
} from "../hooks/useTmdb";
import { tmdbApiUrl } from "../constants/constants";

type SliderRowProps<T extends "search" | "discover"> = {
  listType: T;
  list?: "movie" | "tv";
  filterParams: T extends "discover"
    ? DiscoverFilterParams
    : SearchFilterParams;
};

export const SliderRow = <T extends "search" | "discover">({
  list = "movie",
  filterParams,
  listType,
}: SliderRowProps<T>) => {
  const { data, hasNextPage, isFetchingNextPage, fetchNextPage } = useDiscover({
    url: `${tmdbApiUrl}/${listType}/${list}`,
    filterParams,
  });
  function beforeChange(index: number, nextIndex: number) {
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

  const settings: Settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    adaptiveHeight: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
    beforeChange,
  };

  return (
    <Slider {...settings}>
      {data?.pages.flatMap((page) =>
        page.results.map((movie: Movie) => {
          return <MovieCard listType={listType} key={movie.id} {...movie} />;
        })
      )}
    </Slider>
  );
};
