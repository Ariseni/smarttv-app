"use client";
import { Modal } from "./modal";
import { useParams } from "next/navigation";
import { useDetails } from "@/hooks/useTmdb";
import { useFavoritesStore } from "@/store/favorites-store";
import { MinusIcon, PlayIcon, PlusIcon } from "lucide-react";
import Link from "next/link";

export default function ModalIntercept() {
  const { id } = useParams();
  const { data } = useDetails(id as string);
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();

  const isFavoriteMovie = isFavorite(id as string);

  const videoKey = data?.videos.results.find(
    (video) => video.key && video.site === "YouTube",
  )?.key;

  //TODO !data handling
  return (
    <Modal>
      <div className="flex flex-col gap-5" onClick={(e) => e.stopPropagation()}>
        <h2 className="mt-5 text-[24px] md:text-[44px]">{data?.title}</h2>
        <div className="flex items-center justify-start gap-10">
          {isFavoriteMovie ? (
            <button
              onClick={() => removeFavorite(id as string)}
              className="flex w-fit items-center gap-5 text-[8px] md:text-[24px]"
            >
              <MinusIcon size={32} />
              Remove from favorites
            </button>
          ) : (
            <button
              className="flex w-fit items-center gap-2 rounded-lg p-3 text-[12px] hover:bg-[rgba(0,0,0,0.1)] md:gap-5 md:text-[24px]"
              onClick={() => data && addFavorite({ ...data, id: id as string })}
            >
              <PlusIcon size={32} color="black" />
              <span>Add to favorites</span>
            </button>
          )}
          <Link
            href={`/watch?videoKey=${videoKey}`}
            className="flex w-fit items-center gap-5 rounded-lg p-3 text-[12px] hover:bg-[rgba(0,0,0,0.1)] md:text-[24px]"
          >
            <PlayIcon size={32} color="black" />
            <span>Play</span>
          </Link>
        </div>
        <iframe
          width="100%"
          height="300"
          loading="lazy"
          className="h-[300px] min-h-[300px] md:h-[480px]"
          src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <p className="text-[16px] text-gray-600">{data?.overview}</p>
      </div>
    </Modal>
  );
}
