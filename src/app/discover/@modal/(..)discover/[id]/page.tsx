"use client";
import { Modal } from "./modal";
import { useParams } from "next/navigation";
import { useDetails } from "@/hooks/useTmdb";

export default function ModalIntercept() {
  const { id } = useParams();
  const { data } = useDetails(id as string);
  //todo fetch video data from id on modal open
  const videoKey = data?.videos.results.find(
    (video) => video.key && video.site === "Youtube"
  );
  return (
    <Modal>
      <div className="flex flex-col gap-5" onClick={(e) => e.stopPropagation()}>
        <h2>{data?.title}</h2>
        {/* <img src={`${imageUrl}${poster_path}`} alt={title as string} /> */}
        <iframe
          width="100%"
          height="480"
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p className="text-[16px] text-gray-600">{data?.overview}</p>
      </div>
    </Modal>
  );
}