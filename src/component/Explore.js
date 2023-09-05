import React, { useState } from "react";

export default function Explore() {
  const [state, setstate] = useState("Demo text");
  console.log(state, "Hell");

  return (
    <div className="explore">
      <p className="title">Explore more of our product</p>
      <p className="sub_title">
        <span>
          All the collections we need, you can find from us without <br /> any
          hassle
        </span>
      </p>
      <div className="category" onClick={() => setstate("hellose")}>
        <ul>
          <li className="cat_name active">All</li>
          <li className="cat_name">Men</li>
          <li className="cat_name">Women</li>
          <li className="cat_name">Children</li>
        </ul>
      </div>
    </div>
  );
}
