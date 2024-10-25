"use client";

import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="z-10 w-fit">
      <button
        onClick={toggleDropdown}
        className="ml-5 block w-fit rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white focus:outline-none"
      >
        <MenuIcon color="white" />
      </button>

      {isOpen ? (
        <div
          className="fixed top-20 h-full w-screen bg-[rgba(0,0,0,0.2)]"
          onClick={toggleDropdown}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="fixed z-10 flex h-[100vh] w-screen flex-col items-center gap-2 rounded-lg bg-gray-800 pt-20 shadow-lg md:top-20 md:h-[calc(100vh-80px)] md:w-[200px] md:min-w-[100px] md:pt-0"
          >
            <Link
              href="/discover"
              className="w-full rounded px-3 py-4 text-center text-white hover:bg-gray-700"
              onClick={toggleDropdown}
            >
              Discover
            </Link>
            <div className="mx-auto flex h-[1px] w-full bg-white md:hidden" />
            <Link
              href="/search"
              className="w-full rounded px-3 py-4 text-center text-white hover:bg-gray-700"
              onClick={toggleDropdown}
            >
              Search
            </Link>
            <XIcon
              className="fixed bottom-10 flex lg:hidden"
              size={32}
              color="white"
              onClick={toggleDropdown}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
