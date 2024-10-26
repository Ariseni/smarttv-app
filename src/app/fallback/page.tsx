"use client";

import { useBrowserGuard } from "@/components/BrowserGuard";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function FallbackPage() {
  const router = useRouter();
  const { isBrowserCompatible } = useBrowserGuard();

  useEffect(() => {
    if (isBrowserCompatible) {
      router.replace("/discover");
    }
  }, []);

  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1 className="text-[64px] text-white">Unsupported Browser Version</h1>
      <p className="text-[32px] text-white">
        You are using an older version of Chrome. Please update your browser to
        access this site.
      </p>
    </div>
  );
}
