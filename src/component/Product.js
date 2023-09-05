import React from "react";
import cotten from "../assets/img/cotten.png";
export default function Product() {
  return (
    <div className="product">
      <div className="product_card">
        <img src={cotten} />
        <p className="product_title">Cotten shirt</p>
        <p className="product_price">$122.08</p>
      </div>
    </div>
  );
}
