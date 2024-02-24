import React from "react";
import { MdOutlineCancel } from "react-icons/md";

export default function SideBar({ setOpenSideBar }) {
  return (
    <div>
      <div className="">
        <p className="font-semibold text-xl mt-3">Filter Now</p>
        <MdOutlineCancel
          onClick={() => setOpenSideBar(false)}
          className="text-white absolute bg-black rounded-full right-5 top-5"
        />
      </div>
      <div className="flex flex-col gap-8 my-10">
        <div className="w-3/5 mx-auto">
          <p className="font-medium">Category</p>
          <div className="flex gap-3">
            <input type="checkbox" name="All" id="" />
            <h1>All</h1>
          </div>
          <div className="flex gap-3">
            <input type="checkbox" name="All" id="" />
            <h1>Sneakers</h1>
          </div>
          <div className="flex gap-3">
            <input type="checkbox" name="All" id="" />
            <h1>Flats</h1>
          </div>
          <div className="flex gap-3">
            <input type="checkbox" name="All" id="" />
            <h1>Sandals</h1>
          </div>
          <div className="flex gap-3">
            <input type="checkbox" name="All" id="" />
            <h1>Heels</h1>
          </div>
        </div>
        <div className="w-3/5 mx-auto">
          <p className="font-medium">Price</p>
          <div className="flex gap-3">
            <input type="checkbox" name="All" id="" />
            <h1>All</h1>
          </div>
          <div className="flex gap-3">
            <input type="checkbox" name="All" id="" />
            <h1>$0 - $50</h1>
          </div>
          <div className="flex gap-3">
            <input type="checkbox" name="All" id="" />
            <h1>$50 - $100</h1>
          </div>
          <div className="flex gap-3">
            <input type="checkbox" name="All" id="" />
            <h1>$100 - $150</h1>
          </div>
          <div className="flex gap-3">
            <input type="checkbox" name="All" id="" />
            <h1>Over $150</h1>
          </div>
        </div>
        <div className="w-3/5 mx-auto">
          <p className="font-medium">Colors</p>
          <div className="flex gap-3">
            <input type="checkbox" name="All" id="" />
            <h1>All</h1>
          </div>
          <div className="flex gap-3">
            <input type="checkbox" name="All" id="" />
            <h1>White</h1>
          </div>
          <div className="flex gap-3">
            <input type="checkbox" className="accent-black" name="All" id="" />
            <h1>Black</h1>
          </div>
          <div className="flex gap-3">
            <input type="checkbox" name="All" id="" />
            <h1>Blue</h1>
          </div>
          <div className="flex gap-3">
            <input type="checkbox" name="All" id="" />
            <h1>Red</h1>
          </div>
          <div className="flex gap-3">
            <input type="checkbox" name="All" id="" />
            <h1>Green</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
