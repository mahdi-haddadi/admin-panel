import classNames from "classnames";
import { Fragment, useContext } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarContext } from "../context/SidebarContext";
const HeadSidebar = () => {
  const {isOpen,toggle} = useContext(SidebarContext)
  return (
    <Fragment>
      <div className="head py-5 flex justify-between px-6">
        <Link to={"/"}>
          <img src="./images/logo.png" alt="logo" className="mx-auto w-24" />
        </Link>
        <button onClick={toggle} className={classNames('transition-transform',{'rotate-180':isOpen})}>
          <AiOutlineDoubleRight color="#fff" />
        </button>
      </div>
      <hr />
    </Fragment>
  );
};

export default HeadSidebar;
