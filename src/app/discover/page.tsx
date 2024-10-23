"use client";

import { SliderRow } from "../../components/SliderRow";
import { useGenres } from "../../hooks/useTmdb";

export default function Discover() {
  const { data: genres } = useGenres("movie");

  return (
    <>
      <div id="modal-root" />
      <div className="h-[100vh]">
        {genres?.slice(0, 5).map((genre) => (
          <div
            className="flex flex-col gap-5 mx-0 sm:mx-5 h-screen"
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
