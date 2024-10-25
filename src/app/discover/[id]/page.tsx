"use client";

import { ModalUserControls } from "@/components/ModalUserControls";
import { useDetails } from "@/hooks/useTmdb";
import { useParams } from "next/navigation";

export default function ModalIntercept() {
  const { id } = useParams();
  const { data, isLoading } = useDetails(id as string);

  const videoKey = data?.videos.results.find(
    (video) => video.key && video.site === "YouTube",
  )?.key;

  if (isLoading) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <h1 className="mt-20 text-[48px] text-white">Loading information...</h1>
      </div>
    );
  }
  if (!data) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <h1 className="mt-20 text-[48px] text-white">No movie with this ID</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 px-5 md:px-20">
      <h2 className="mt-5 text-[24px] text-white md:text-[44px]">
        {data.title}
      </h2>
      <ModalUserControls id={id as string} data={data} />
      <iframe
        width="100%"
        height="300"
        loading="lazy"
        className="h-[300px] min-h-[300px] md:h-[700px] lg:h-[1024px]"
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <p className="text-[16px] text-gray-600">{data.overview}</p>
    </div>
  );
}
