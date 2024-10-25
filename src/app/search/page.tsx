"use client";

import { useSearchParams } from "next/navigation";
import { SliderRow } from "../../components/Slider/SliderRow";
import { FavoritesSlider } from "@/components/Slider/FavoritesSlider";

export default function Search() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  return (
    <>
      <div className="mt-10 flex flex-col justify-between gap-20 md:mt-20">
        <div className="mx-0 flex flex-col sm:mx-5">
          <h1 className="text-[36px] text-white">Search: "{query}"</h1>
          {query && query.length > 0 ? (
            <SliderRow
              listType="search"
              filterParams={{
                query: query || "",
              }}
            />
          ) : (
            <span className="text-[32px] text-white">search for something</span>
          )}
        </div>
        <FavoritesSlider />
      </div>
    </>
  );
}
