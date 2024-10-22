'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter(); // Get the router instance

  const handleSearch = () => {
    router.push(`/search?q=${searchQuery}`);
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <nav className="flex space-x-4">
        <Link href="/" className="text-white px-3 py-2 rounded hover:bg-gray-700">
          Home
        </Link>
        <Link
          href="/discover"
          className="text-white px-3 py-2 rounded hover:bg-gray-700"
        >
          Discover
        </Link>
        <Link
          href="/search"
          className="text-white px-3 py-2 rounded hover:bg-gray-700"
        >
          Search
        </Link>
      </nav>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          className="px-3 py-1 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </header>
  );
};

export default Header;
