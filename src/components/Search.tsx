"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Keyboard from "react-simple-keyboard";

export function Search() {
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    setKeyboardOpen(false);
    router.push(`/search?q=${searchQuery}`);
  };

  return (
    <div className="flex items-center space-x-2 ">
      <input
        type="text"
        className="px-3 py-2 bg-white  max-w-40 sm:max-w-80 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setKeyboardOpen(true)}
      />
      {keyboardOpen && (
        <div
          style={{ position: "absolute", top: "50px", left: "0", zIndex: 10 }}
        >
          <Keyboard
            onChange={setSearchQuery}
            layoutName="default"
            inputName="search"
          />
          <button
            onClick={() => setKeyboardOpen(false)}
            style={{ marginTop: "10px", padding: "5px" }}
          >
            Close Keyboard
          </button>
        </div>
      )}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}
