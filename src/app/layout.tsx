import "../styles/global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactQueryProvider from "../components/ReactQueryProvider";
import { Header } from "../components/header/Header";
import { ReactNode } from "react";
import { Metadata } from "next";
import { BrowserGuard } from "@/components/BrowserGuard";

export const metadata: Metadata = {
  title: "Smart TV App",
};

export default async function RootLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/monitor.png" />
      </head>
      <body>
        <BrowserGuard />
        <Header />
        <ReactQueryProvider>
          <main id="root" className="mt-20 h-[calc(100vh-100px)]">
            {children}
            {modal}
            <div id="modal-root" />
          </main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
