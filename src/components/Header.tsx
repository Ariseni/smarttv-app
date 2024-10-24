
import Link from "next/link";
import { Search } from "./Search";

/* Header component 
    includes: 
      general navigation
      search
*/
const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center h-20">
      <nav className="flex space-x-4">
        <Link
          href="/discover"
          className="text-white px-3 py-2 rounded hover:bg-gray-700"
        >
          Discover
        </Link>
      </nav>
      <Search/>
    </header>
  );
};

export default Header;
