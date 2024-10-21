import { Outlet } from "react-router-dom";
import Header from "./Header";

export const Layout = () => {
  return (
    <div>
      {/* Global Header */}
      <Header />

      {/* Main Content */}
      <main className="p-4">
        <Outlet /> {/* This renders the matched route's content */}
      </main>
    </div>
  );
};
