import Link from "next/link";
import { imageUrl } from "../constants/constants";
import { AnchorHTMLAttributes } from "react";

export type Movie = {
  id: string;
  poster_path: string;
  backdrop_path: string;
  title: string;
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
  ...rest
}: MovieCardProps) => {
  return (
    <Link href={`/${listType}/${id}`} {...rest}>
      <div key={id} className="flex flex-col items-center gap-5">
        <img
          src={imageUrl + poster_path}
          alt={title}
          style={{ width: "100%", height: "auto" }}
        />
        <h3 className="text-white">{title}</h3>
      </div>
    </Link>
  );
};
