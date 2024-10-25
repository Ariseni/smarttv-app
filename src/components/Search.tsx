"use client";

import { XIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

export function Search() {
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    setKeyboardOpen(false);
    router.push(`/search?q=${searchQuery}`);
  };

  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <input
          type="text"
          className="max-w-40 rounded border border-gray-400 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400 sm:max-w-80"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setKeyboardOpen(true)}
        />
        {keyboardOpen && (
          <div className="absolute right-0 top-[50px] z-10 flex flex-col items-end bg-white">
            <button
              className="rounded-lg bg-white"
              onClick={() => setKeyboardOpen(false)}
              style={{ marginTop: "10px", padding: "5px" }}
            >
              <XIcon />
            </button>
            <Keyboard
              onChange={setSearchQuery}
              layoutName="default"
              inputName="search"
            />
          </div>
        )}
      </div>
      <button
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 disabled:bg-gray-200 disabled:text-black disabled:hover:bg-gray-200"
        disabled={searchQuery.length === 0}
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}
