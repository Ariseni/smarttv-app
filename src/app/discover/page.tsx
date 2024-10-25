"use client";

import { useFavoritesStore } from "@/store/favorites-store";
import { useGenres } from "../../hooks/useTmdb";
import { lazy, Suspense } from "react";

const FavoritesSlider = lazy(
  () => import("../../components/Slider/FavoritesSlider"),
);
const SliderRow = lazy(() => import("../../components/Slider/SliderRow"));

export default function Discover() {
  const { data: genres } = useGenres("movie");
  const { favorites } = useFavoritesStore();

  return (
    <>
      <div className="hide-scrollbar mt-5 h-[calc(100vh-100px)] snap-y snap-mandatory overflow-y-auto overscroll-contain md:mt-[20px]">
        {favorites.length > 0 && (
          <Suspense
            fallback={
              <span className="text-[24px] text-white">
                Loading Favorites...
              </span>
            }
          >
            <FavoritesSlider />
          </Suspense>
        )}
        {genres?.slice(0, 5).map((genre) => (
          <div
            className="relative mx-0 mt-10 flex snap-center flex-col gap-10 md:gap-10"
            key={genre.id}
          >
            <Suspense
              fallback={
                <span className="text-[24px] text-white">
                  Loading {genre.name}...
                </span>
              }
            >
              <div className="px-5 text-[32px] font-bold text-white">
                {genre.name}
              </div>

              <SliderRow
                listType="discover"
                filterParams={{
                  with_genres: genre.id.toString(),
                }}
              />
            </Suspense>
          </div>
        ))}
      </div>
    </>
  );
}
