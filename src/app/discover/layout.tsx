import { ReactNode } from "react";

export default function DiscoverLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <div className="w-full">
      <div id="modal-root" />
      {children}
      {modal}
    </div>
  );
}
