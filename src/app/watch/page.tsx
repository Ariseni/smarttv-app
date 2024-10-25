"use client";

import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

const VideoPlayer = dynamic(() => import("../../components/VideoPlayer"), {
  ssr: false,
});

function Watch() {
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

export default function SuspendedWatch() {
  return (
    <Suspense>
      <Watch />
    </Suspense>
  );
}
