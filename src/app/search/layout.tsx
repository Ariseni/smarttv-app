export default function DiscoverLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="w-full px-0 sm:px-10 h-full">
      {children}
      {modal}
    </div>
  );
}
