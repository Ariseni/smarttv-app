import { imageUrl } from "../constants/constants";

export type Movie = {
  id: string;
  poster_path: string;
  backdrop_path: string;
  title: string;
};

export type MovieCardProps = Movie & {};

export const MovieCard = ({ id, poster_path, title }: MovieCardProps) => {
  return (
    <div key={id} className="flex flex-col">
      <img
        src={imageUrl + poster_path}
        alt={title}
        style={{ width: "100%", height: "auto" }}
      />
      <h3>{title}</h3>
    </div>
  );
};
