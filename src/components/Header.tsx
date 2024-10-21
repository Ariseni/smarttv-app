import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    // Navigate to a search route with query
    navigate(`/search?q=${searchQuery}`);
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Buttons (as Links) */}
      <nav className="flex space-x-4">
        <Link to="/" className="text-white px-3 py-2 rounded hover:bg-gray-700">
          Home
        </Link>
        <Link
          to="/movies"
          className="text-white px-3 py-2 rounded hover:bg-gray-700"
        >
          Movies
        </Link>
        <Link
          to="/tv-shows"
          className="text-white px-3 py-2 rounded hover:bg-gray-700"
        >
          TV Shows
        </Link>
      </nav>

      {/* Search Input */}
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
