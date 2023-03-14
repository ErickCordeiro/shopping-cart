import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../components/CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart } = useContext(CartContext);

  return (
    <>
      <div
        onClick={handleClose}
        className={`${
          isOpen ? "bg-black/20 absolute" : "none bg-none"
        }  top-0 left-0 z-10 w-full h-full`}
      ></div>
      <div
        className={`${
          isOpen ? "right-0" : "-right-full"
        } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20`}
      >
        <div className="flex items-center justify-between p-4 text-white bg-red-500">
          <div className="text-sm font-semibold uppercase">Meu Carrinho (0)</div>
          <div className="flex items-center justify-center w-8 h-8 cursor-pointer">
            <IoMdArrowForward onClick={handleClose} className="text-2xl" />
          </div>
        </div>

      <div className="p-4">
        {cart.map(item => {
          return <CartItem item={item} key={item.id} />
        })}
      </div>  
      </div>
    </>
  );
};

export default Sidebar;
