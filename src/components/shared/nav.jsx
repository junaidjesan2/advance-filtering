import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import SideBar from "./sideBar";

export default function Nav() {
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <div className="flex justify-around">
      {openSideBar == true && (
        <div className="w-3/12 absolute top-0 left-0 bottom-0 min-h-screen drop-shadow-xl overflow-y-scroll bg-slate-100">
          <SideBar setOpenSideBar={setOpenSideBar} />
        </div>
      )}
      <div>
        <CiMenuFries
          onClick={() => setOpenSideBar(true)}
          className="h-8 w-8 py-1 px-1 rounded-full hover:bg-slate-300"
        />
      </div>
      <div className="">
        <input
          className="py-2 px-3 rounded-lg border-2"
          type="text"
          placeholder="Type your"
        />
      </div>
      <div className="flex gap-5 my-auto">
        <FcLike className="h-8 w-8 py-1 px-1 rounded-full hover:bg-slate-300" />
        <FaShoppingCart className="h-8 w-8 py-1 px-1 rounded-full hover:bg-slate-300" />
        <FaUser className="h-8 w-8 py-1 px-1 rounded-full hover:bg-slate-300" />
      </div>
    </div>
  );
}
