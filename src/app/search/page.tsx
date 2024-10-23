"use client";

import { useSearchParams } from "next/navigation";
import { SliderRow } from "../../components/SliderRow";
import { Suspense } from "react";

export function Search() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  return (
    <div className="flex flex-col gap-5 mx-5">
      
      <SliderRow
        listType="search"
        filterParams={{
          query: query || "",
        }}
      />
    </div>
  );
}

export default function WrappedSearch() {
  return (
    // You could have a loading skeleton as the `fallback` too
    <Suspense fallback={<>loading</>}>
      <Search />
    </Suspense>
  );
}
