import { ReactNode } from "react";

export default function DiscoverLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <div className="w-full px-0 sm:px-10 h-full">
      {children}
      {modal}
    </div>
  );
}
