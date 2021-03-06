import { useContext } from "react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { SidebarContext } from "../../components/sidebar/context/SidebarContext";
import Actions from "./components/Actions";

const Header = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  return (
    <header className="w-100 flex justify-between items-center sticky left-0 top-0 bg-transparent p-4">
      <div className="search-box cursor-pointer">
        <div className="flex p-2 justify-center items-center">
          <span className="mr-4 md:hidden" onClick={toggleSidebar}>
            <AiOutlineMenu size={"1.2rem"} color={"#626477"} />
          </span>
          <span>
            <AiOutlineSearch size={"1.3rem"} color="#626477" />
          </span>
          <span className="ml-4 text-slate-400 hidden md:block">
            Search (Ctril + /)
          </span>
        </div>
      </div>
      <Actions />
    </header>
  );
};

export default Header;
