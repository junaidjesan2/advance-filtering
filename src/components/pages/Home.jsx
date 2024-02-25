import React from "react";
import Data from "../../db/db";
import Products from "../shared/products";

export default function Home() {
  return (
    <div className="grid grid-cols-5 gap-3 my-8">
      {Data.map((product) => (
        <Products product={product} />
      ))}
    </div>
  );
}
