import "../../styles/global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactNode } from "react";
import { Metadata } from "next";
import { BrowserGuardProvider } from "@/components/BrowserGuard";

export const metadata: Metadata = {
  title: "Smart TV App",
};

export default async function FallbackLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <BrowserGuardProvider>
      <div className="h-full w-full px-0 sm:px-10">{children}</div>
    </BrowserGuardProvider>
  );
}
