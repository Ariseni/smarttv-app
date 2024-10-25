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
      <div id="modal-root" />
      <div className="hide-scrollbar md:mt-20px-0 mt-5 h-[calc(100vh-100px)] snap-y snap-mandatory overflow-y-auto overscroll-contain sm:px-10">
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
            className="relative mx-0 mt-20 flex snap-center flex-col gap-10 sm:mx-5 md:gap-10"
            key={genre.id}
          >
            <Suspense
              fallback={
                <span className="text-[24px] text-white">
                  Loading {genre.name}...
                </span>
              }
            >
              <div className="text-[32px] font-bold text-white">
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
