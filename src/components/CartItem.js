import React from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";

const CartItem = ({ item }) => {
  const { id, title, image, price, amount } = item;

  return (
    <div className="flex">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px]" src={image} alt="" />
        </Link>

        <div className="flex flex-col w-full">
          <div className="flex justify-between mb-2">
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline"
            >
              {title}
            </Link>
            <div className="text-xl cursor-pointer">
              <IoMdClose className="text-gray-500 transition hover:text-red-500" />
            </div>
          </div>

          <div className="bg-pink-200 flex gap-x-2 h-[36px] items-center">
            <div className="bg-blue-300 flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              <div className="flex items-center justify-center flex-1 h-full cursor-pointer">
                <IoMdRemove />
              </div>
              <div className="flex items-center justify-center h-full px-2">
                {amount}
              </div>
              <div className="flex items-center justify-center flex-1 h-full cursor-pointer">
                <IoMdAdd />
              </div>
            </div>
            <div>{item.price}</div>
            <div>Final {item.price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
