import Link from "next/link";
import { imageUrl } from "../../constants/constants";
import { AnchorHTMLAttributes } from "react";
import "./MovieCard.css";
import { Star, StarIcon } from "lucide-react";
import { truncateText } from "@/utils/text";

export type Movie = {
  id: string;
  poster_path: string;
  backdrop_path: string;
  title: string;
  overview: string;
  original_language: string;
  release_date: string;
  vote_average: number;
  video: string;
  adult: string;
};

export type MovieCardProps = Movie &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    listType: "discover" | "search";
  };

export const MovieCard = ({
  id,
  poster_path,
  title,
  listType,
  overview,
  original_language,
  release_date,
  vote_average,
  ...rest
}: MovieCardProps) => {
  return (
    <Link href={`/${listType}/${id}`} {...rest}>
      <div
        key={id}
        className="flex h-full flex-col items-center justify-center gap-5 object-contain"
      >
        {poster_path ? (
          <div className="group relative aspect-[2/3] h-[60vh]">
            <img src={imageUrl + poster_path} alt={title} />
            <div className="pointer-events-none absolute top-0 flex h-full w-full flex-col items-center justify-center gap-5 bg-[rgba(0,0,0,0.8)] p-5 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 md:gap-10 md:p-10 lg:gap-20 lg:p-20">
              <h3 className="text-[40px] text-white sm:text-[64px]">{title}</h3>
              <div className="flex w-full justify-center gap-20">
                <span className="text-white">
                  Language: {original_language.toUpperCase()}
                </span>
                <span className="text-white">Release: {release_date}</span>
                <div className="flex gap-5 text-white">
                  <StarIcon color="yellow" fill="yellow" />
                  {vote_average}
                </div>
              </div>
              <p className="text-white">{truncateText(overview, 200)}</p>
            </div>
          </div>
        ) : (
          <div className="poster-placeholder">
            <div className="poster-text">Poster not available</div>
          </div>
        )}
      </div>
    </Link>
  );
};
