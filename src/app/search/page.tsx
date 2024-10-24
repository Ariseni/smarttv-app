"use client";

import { useSearchParams } from "next/navigation";
import { SliderRow } from "../../components/Slider/SliderRow";

export default function Search() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  return (
    <>
      <div id="modal-root" />
      <div className="max-h-full">
        <SliderRow
          listType="search"
          filterParams={{
            query: query || "",
          }}
        />
      </div>
    </>
  );
}
