import Link from "next/link";
import { AnchorHTMLAttributes } from "react";
import "./MovieCard.css";
import { Poster } from "./Poster";
import { useSearchParams } from "next/navigation";

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

export const MovieCard = (props: MovieCardProps) => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const { id, poster_path, listType, ...rest } = props;

  return (
    <Link href={`/${listType}/${id}?q=${query}`} {...rest}>
      <div
        key={id}
        className="flex flex-col items-center justify-center gap-5 object-contain"
      >
        {poster_path ? (
          <Poster {...props} />
        ) : (
          <div className="poster-placeholder">
            <div className="poster-text">Poster not available</div>
          </div>
        )}
      </div>
    </Link>
  );
};
