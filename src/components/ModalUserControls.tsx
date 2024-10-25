"use client";

import { Details } from "@/hooks/useTmdb";
import { useFavoritesStore } from "@/store/favorites-store";
import { MinusIcon, PlayIcon, PlusIcon } from "lucide-react";
import Link from "next/link";

type ModalUserControlProps = {
  id: string;
  data: Details;
};
export const ModalUserControls = ({ id, data }: ModalUserControlProps) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();

  const videoKey = data.videos.results.find(
    (video) => video.key && video.site === "YouTube",
  )?.key;

  const isFavoriteMovie = isFavorite(id as string);
  return (
    <div className="flex items-center justify-start gap-10">
      {isFavoriteMovie ? (
        <button
          onClick={() => removeFavorite(id as string)}
          className="flex w-fit items-center gap-5 text-[8px] text-white md:text-[24px]"
        >
          <MinusIcon size={32} />
          Remove from favorites
        </button>
      ) : (
        <button
          className="flex w-fit items-center gap-2 rounded-lg p-3 hover:bg-[rgba(0,0,0,0.1)] md:gap-5"
          onClick={() => data && addFavorite({ ...data, id: id as string })}
        >
          <PlusIcon size={32} color="white" />
          <span className="text-[12px] text-white md:text-[24px]">
            Add to favorites
          </span>
        </button>
      )}
      <Link
        href={`/watch?videoKey=${videoKey}`}
        className="flex w-fit items-center gap-5 rounded-lg p-3 hover:bg-[rgba(0,0,0,0.1)]"
      >
        <PlayIcon size={32} color="white" />
        <span className="text-[12px] text-white md:text-[24px]">Play</span>
      </Link>
    </div>
  );
};
