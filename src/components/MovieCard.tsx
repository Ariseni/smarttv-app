import Link from "next/link";
import { imageUrl } from "../constants/constants";

export type Movie = {
  id: string;
  poster_path: string;
  backdrop_path: string;
  title: string;
};

export type MovieCardProps = Movie & {
  listType: "discover" | "search";
};

export const MovieCard = ({
  id,
  poster_path,
  title,
  listType,
}: MovieCardProps) => {
  return (
    <Link
      href={`/${listType}/${id}?poster_path=${encodeURIComponent(
        poster_path
      )}&title=${encodeURIComponent(title)}`}
    >
      <div key={id} className="flex flex-col">
        <img
          src={imageUrl + poster_path}
          alt={title}
          style={{ width: "100%", height: "auto" }}
        />
        <h3>{title}</h3>
      </div>
    </Link>
  );
};
