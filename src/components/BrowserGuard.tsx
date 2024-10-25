"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const isChromeOlderThan66 = (): boolean => {
  const userAgent = window.navigator.userAgent;
  const chromeVersionMatch = userAgent.match(/Chrome\/(\d+)/);

  if (chromeVersionMatch) {
    const chromeVersion = parseInt(chromeVersionMatch[1], 10);
    return chromeVersion < 66;
  }

  return false;
};

export function BrowserGuard() {
  const router = useRouter();

  useEffect(() => {
    if (isChromeOlderThan66()) {
      router.push("/fallback");
    } else {
      router.replace("/discover");
    }
  }, [router]);

  return null;
}
