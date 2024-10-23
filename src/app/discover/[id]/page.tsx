"use client";

import { imageUrl } from "@/constants/constants";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  const poster_path = searchParams.get("poster_path");
  return (
    <div>
      <h2>{title}</h2>
      <img src={`${imageUrl}${poster_path}`} alt={title as string} />
      <p>description</p>
    </div>
  );
}
