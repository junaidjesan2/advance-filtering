import React from "react";
import Data from "../../db/db";
import Card from "../shared/card";

export default function Home() {
  return (
    <div className="grid grid-cols-5 gap-3 my-8">
      {Data.map((product) => (
        <Card product={product} />
      ))}
    </div>
  );
}
