import NavMenu from "./NavMenu";
import { Search } from "./Search";

/* Header component 
    includes: 
      general navigation
      search
*/
const Header = () => {
  return (
    <header className="fixed top-0 z-50 flex h-20 w-full items-center justify-between bg-gray-800 p-0 text-white">
      <NavMenu />
      <Search />
    </header>
  );
};

export default Header;
