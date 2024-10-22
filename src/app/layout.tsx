import "../styles/global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BrowserCheck from "./browserVersion/page";
import ReactQueryProvider from "../components/ReactQueryProvider";
import Header from "../components/Header";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BrowserCheck />
        <Header />
        <ReactQueryProvider>
          <main id="root">{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
