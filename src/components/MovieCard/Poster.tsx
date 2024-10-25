import { imageUrl } from "../../constants/constants";
import { StarIcon } from "lucide-react";
import { truncateText } from "@/utils/text";

export type PosterProps = {
  title: string;
  poster_path: string;
  original_language: string;
  vote_average: number;
  release_date: string;
  overview: string;
};

export const Poster = ({
  title,
  poster_path,
  original_language,
  vote_average,
  release_date,
  overview,
}: PosterProps) => {
  return (
    <div className="group relative aspect-[2/3]  h-[50vh] overflow-hidden transition-all duration-200 hover:z-10 hover:scale-125">
      <img
        src={imageUrl + poster_path}
        alt={title}
        className="transition-all duration-200 group-hover:scale-110"
        loading="lazy"
      />
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
  );
};
