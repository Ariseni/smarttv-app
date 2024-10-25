"use client";

import { useFavoritesStore } from "@/store/favorites-store";
import { SliderRow } from "../../components/Slider/SliderRow";
import { useGenres } from "../../hooks/useTmdb";
import { FavoritesSlider } from "@/components/Slider/FavoritesSlider";

export default function Discover() {
  const { data: genres } = useGenres("movie");
  const { favorites } = useFavoritesStore();

  return (
    <>
      <div id="modal-root" />
      <div className="hide-scrollbar md:mt-20px-0 mt-5 h-[calc(100vh-100px)] snap-y snap-mandatory overflow-y-auto overscroll-contain sm:px-10">
        {favorites.length > 0 && <FavoritesSlider />}
        {genres?.slice(0, 5).map((genre) => (
          <div
            className="relative mx-0 flex snap-center mt-20 flex-col gap-10 sm:mx-5 md:gap-10"
            key={genre.id}
          >
            <div className="text-[32px] font-bold text-white">{genre.name}</div>
            <SliderRow
              listType="discover"
              filterParams={{
                with_genres: genre.id.toString(),
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
}
