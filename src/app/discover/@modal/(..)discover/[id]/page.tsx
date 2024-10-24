"use client";
import { Modal } from "./modal";
import { useParams } from "next/navigation";
import { useDetails } from "@/hooks/useTmdb";
import { useFavoritesStore } from "@/store/favorites-store";
import { Check, MinusIcon, PlusIcon } from "lucide-react";

export default function ModalIntercept() {
  const { id } = useParams();
  const { data } = useDetails(id as string);
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();

  const isFavoriteMovie = isFavorite(id as string);

  const videoKey = data?.videos.results.find(
    (video) => video.key && video.site === "Youtube",
  );

  //TODO !data handling
  return (
    <Modal>
      <div className="flex flex-col gap-5" onClick={(e) => e.stopPropagation()}>
        <h2>{data?.title}</h2>
        {isFavoriteMovie ? (
          <button
            onClick={() => removeFavorite(id as string)}
            className="flex items-center gap-5 text-[24px]"
          >
            <MinusIcon size={32} />
            Remove from favorites
          </button>
        ) : (
          <button
            className="flex items-center gap-5 text-[24px]"
            onClick={() => data && addFavorite({ ...data, id: id as string })}
          >
            <PlusIcon size={32} color="black" />
            Add to favorites
          </button>
        )}
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
