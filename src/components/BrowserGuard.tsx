"use client";

import { createContext, useContext, useEffect, ReactNode } from "react";
import { useRouter } from "next/navigation";

const BrowserGuardContext = createContext<{
  isBrowserCompatible: boolean;
} | null>(null);

const isChromeOlderThan66 = (): boolean => {
  const userAgent = window.navigator.userAgent;
  const chromeVersionMatch = userAgent.match(/Chrome\/(\d+)/);

  if (chromeVersionMatch) {
    const chromeVersion = parseInt(chromeVersionMatch[1], 10);
    return chromeVersion < 66;
  }

  return false;
};

export function BrowserGuardProvider({ children }: { children: ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    if (isChromeOlderThan66()) {
      router.push("/fallback");
    }
  }, [router]);

  return (
    <BrowserGuardContext.Provider
      value={{ isBrowserCompatible: !isChromeOlderThan66() }}
    >
      {children}
    </BrowserGuardContext.Provider>
  );
}

export function useBrowserGuard() {
  const context = useContext(BrowserGuardContext);
  if (!context) {
    throw new Error(
      "useBrowserGuard must be used within a BrowserGuardProvider",
    );
  }
  return context;
}
