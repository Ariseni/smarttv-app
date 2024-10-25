"use client";

import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";

const VideoPlayer = dynamic(() => import("../../components/VideoPlayer"), {
  ssr: false,
});

export default function page() {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const videoKey = searchParams.get("videoKey");

  if (!videoKey || videoKey.length === 0) {
    replace("/discover");
    return null;
  }
  return (
    <div>
      <VideoPlayer videoKey={videoKey} />
    </div>
  );
}
