import "../styles/global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BrowserCheck from "./browserVersion/page";
import ReactQueryProvider from "../components/ReactQueryProvider";
import Header from "../components/Header";
import { ReactNode } from "react";

export default async function RootLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BrowserCheck />
        <Header />
        <ReactQueryProvider>
          <main id="root">
            {children}
            {modal}
            <div id="modal-root" />
          </main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
