"use client";

import { useSearchParams } from "next/navigation";
import { lazy, Suspense } from "react";
const FavoritesSlider = lazy(
  () => import("../../components/Slider/FavoritesSlider"),
);
const SliderRow = lazy(() => import("../../components/Slider/SliderRow"));

function Search() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  return (
    <>
      <div className="mt-10 flex flex-col justify-between gap-20 md:mt-20">
        <div className="mx-0 flex flex-col sm:mx-5">
          <h1 className="text-[36px] text-white">Search: "{query}"</h1>
          {query && query.length > 0 ? (
            <Suspense
              fallback={
                <span className="text-[24px] text-white">Loading items...</span>
              }
            >
              <SliderRow
                listType="search"
                filterParams={{
                  query: query || "",
                }}
              />
            </Suspense>
          ) : (
            <span className="text-[32px] text-white">search for something</span>
          )}
        </div>
        <Suspense
          fallback={
            <div className="text-[24px] text-white">Loading Favorites...</div>
          }
        >
          <FavoritesSlider />
        </Suspense>
      </div>
    </>
  );
}

export default function SuspendedWatch() {
  return (
    <Suspense>
      <Search />
    </Suspense>
  );
}
