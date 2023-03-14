import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import Logo from '../img/logo.svg'

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  return (
    <header className="">
      <div>
        <Link to={"/"}>
          <div className="">
            <img className="w-[40px]" src={Logo} alt="" />
          </div>
        </Link>
      </div>

      <div className="relative flex cursor-pointer max-w-[50px]" onClick={() => setIsOpen(!isOpen)}>
        <BsBag className="text-2xl" />
        <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">{itemAmount}</div>
      </div>
    </header>
  );
};

export default Header;
