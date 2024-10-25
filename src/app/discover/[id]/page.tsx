"use client";

import { useParams } from "next/navigation";
import { useDetails } from "@/hooks/useTmdb";

export default function ModalIntercept() {
  const { id } = useParams();
  const { data } = useDetails(id as string);

  const videoKey = data?.videos.results.find(
    (video) => video.key && video.site === "Youtube",
  );
  return (
    <div className="flex flex-col gap-5" onClick={(e) => e.stopPropagation()}>
      <h2>{data?.title}</h2>
      <iframe
        width="100%"
        height="480"
        loading="lazy"
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <p className="text-[16px] text-gray-600">{data?.overview}</p>
    </div>
  );
}
