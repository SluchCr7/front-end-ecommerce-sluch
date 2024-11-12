import React from 'react'
import { TiDelete } from "react-icons/ti";

const ErrorLoginBuy = ({ isOpen, onClose }) => {
  return (
    <div className={`absolute inset-0 flex items-center justify-center ${isOpen ? "flex" : "hidden"}`}>
      <div className="bg-white dark:bg-gray-800 rounded-md p-10 w-[400px] shadow-md">
        <span className="text-xl font-bold text-gray-900 dark:text-white">You Can not Buy Now</span>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">
          Please Login First , Then You Can Buy and Checkout
        </p>
        <button
          className="text-xl text-gray-900 dark:text-white absolute top-2 right-3"
          onClick={onClose}>
          <TiDelete />
        </button>
      </div>

    </div>
  );
};


export default ErrorLoginBuy