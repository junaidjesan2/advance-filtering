import React from "react";
import SideBar from "../shared/sideBar";
import Nav from "../shared/nav";
import Home from "../pages/Home";

export default function HomeLayout() {
  return ( 
    <div className="flex flex-row mx-auto">
      <div className="w-3/12 min-h-screen border-r-2 border-b-slate-700">
        <SideBar />
      </div>
      <div className="w-9/12 min-h-screen">
        <div className="h-20 py-5 border-b-2 border-b-slate-700">
          <Nav />
        </div>
        <div>
          <Home />
        </div>
      </div>
    </div>
  );
}