"use client";

export default function FallbackPage() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <h1 className="text-[64px] text-white">Unsupported Browser Version</h1>
      <p className="text-[32px] text-white">
        You are using an older version of Chrome. Please update your browser to
        access this site.
      </p>
    </div>
  );
}
