import React, { useContext } from "react";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import CartItem from "../components/CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, itemAmount, clearCart } = useContext(CartContext);

  return (
    <>
      <div
        onClick={handleClose}
        className={`${isOpen ? "bg-black/20 absolute" : "none bg-none"
          }  top-0 left-0 z-10 w-full h-full`}
      ></div>
      <div
        className={`${isOpen ? "right-0" : "-right-full"
          } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20`}
      >
        <div className="flex items-center justify-between p-4 text-white bg-red-500">
          <div className="text-sm font-semibold uppercase">Meu Carrinho ({itemAmount})</div>
          <div className="flex items-center justify-center w-8 h-8 cursor-pointer">
            <IoMdArrowForward onClick={handleClose} className="text-2xl" />
          </div>
        </div>

        <div className="p-4">
          {cart.map(item => {
            return <CartItem item={item} key={item.id} />
          })}
        </div>

        <div className="flex flex-col gap-y-3 p-4 mt-4">
          <div className="flex justify-between items-center">
            <div className="uppercase font-semibold">
              <span className="mr-2">Total:</span>R$ 1000.00
            </div>
            <div
              onClick={clearCart}
              className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl">
              <FiTrash2 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
