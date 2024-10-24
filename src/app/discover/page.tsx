"use client";

import { SliderRow } from "../../components/SliderRow";
import { useGenres } from "../../hooks/useTmdb";

export default function Discover() {
  const { data: genres } = useGenres("movie");

  return (
    <>
      <div id="modal-root" />
      <div className="hide-scrollbar md:mt-20px-0 mt-5 h-[calc(100vh-160px)] snap-y snap-mandatory overflow-y-auto overscroll-contain sm:px-10">
        {genres?.slice(0, 5).map((genre) => (
          <div
            className="relative mx-0 flex h-full snap-center flex-col gap-10 sm:mx-5 md:gap-20"
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
