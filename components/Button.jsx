import React from "react";

const Button = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="w-36 h-14 rounded-sm text outline outline-1 outline-yellow-700 hover:outline-none hover:bg-slate-500 hover:text-white duration-300 active:bg-neutral-700">
    {children}
  </button>
);

export default Button;
