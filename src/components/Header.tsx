import Link from "next/link";
import { Search } from "./Search";

/* Header component 
    includes: 
      general navigation
      search
*/
const Header = () => {
  return (
    <header className="flex h-20 items-center justify-between bg-gray-800 p-4 text-white">
      <nav className="flex space-x-4">
        <Link
          href="/discover"
          className="rounded px-3 py-2 text-white hover:bg-gray-700"
        >
          Discover
        </Link>
        <Link
          href="/search"
          className="rounded px-3 py-2 text-white hover:bg-gray-700"
        >
          Search
        </Link>
      </nav>
      <Search />
    </header>
  );
};

export default Header;
