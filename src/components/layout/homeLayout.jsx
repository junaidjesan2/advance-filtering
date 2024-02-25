import React from "react";
import Nav from "../shared/nav";
import Home from "../pages/Home";
export default function HomeLayout() {
  return (
    <div>
      <div className="min-h-screen">
        <div className="h-20 py-5 border-b-2 mx-auto border-b-slate-700">
          <Nav />
        </div>
        <div>
          <Home />
        </div>
      </div>
    </div>
  );
}
