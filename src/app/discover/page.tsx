"use client";

import { SliderRow } from "../../components/SliderRow";
import { useGenres } from "../../hooks/useTmdb";

export default function Discover() {
  const { data: genres } = useGenres("movie");
  return (
    <div>
      <div id="modal-root" />
      {genres?.slice(0, 5).map((genre) => (
        <div className="flex flex-col gap-5 mx-5" key={genre.id}>
          <div className="text-[32px] font-bold">{genre.name}</div>
          <SliderRow
            listType="discover"
            filterParams={{
              with_genres: genre.id.toString(),
            }}
          />
        </div>
      ))}
    </div>
  );
}
