import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);

  return (
    <div>
      <div>Header</div>
      <div className="relative flex cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <BsBag className="text-2xl"/>
      </div>
    </div>
  );
};

export default Header;
