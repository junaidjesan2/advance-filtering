import React from "react";
import { FcLike } from "react-icons/fc";
import { FaShoppingCart, FaUser } from "react-icons/fa";

export default function Nav() {
  return (
    <div className="flex justify-around">
      <div className="">
        <input
          className="py-2 px-3 rounded-lg border-2"
          type="text"
          placeholder="Type your"
        />
      </div>
      <div className="flex gap-5 my-auto">
        <FcLike className="h-8 w-8 py-1 px-1 rounded-full hover:bg-slate-300"/>
        <FaShoppingCart className="h-8 w-8 py-1 px-1 rounded-full hover:bg-slate-300"/>
        <FaUser className="h-8 w-8 py-1 px-1 rounded-full hover:bg-slate-300"/>
      </div>
    </div>
  );
}
