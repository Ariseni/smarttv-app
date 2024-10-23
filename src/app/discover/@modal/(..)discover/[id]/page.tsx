"use client";
import { imageUrl } from "@/constants/constants";
import { Modal } from "./modal";
import { useSearchParams } from "next/navigation";

type ModalInterceptProps = {
  id: string;
};
export default function ModalIntercept({ id }: ModalInterceptProps) {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const poster_path = searchParams.get("poster_path");

  //todo fetch video data from id on modal open
  const videoUrl = `https://www.youtube.com/embed/LYaJVfiwv0w?autoplay=1`;
  return (
    <Modal>
      <div className="flex flex-col" onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        <img src={`${imageUrl}${poster_path}`} alt={title as string} />
        <iframe
          width="100%"
          height="480"
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <p>description</p>
      </div>
    </Modal>
  );
}
