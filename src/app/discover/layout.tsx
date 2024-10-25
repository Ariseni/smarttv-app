export default function DiscoverLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="w-full">
      <div id="modal-root" />
      {children}
      {modal}
    </div>
  );
}
