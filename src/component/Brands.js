import React from "react";
import cc from "../assets/img/cc.png";
import dior from "../assets/img/dior.png";
import gc from "../assets/img/gc.png";
import nike from "../assets/img/nike.png";
export default function Brands() {
  return (
    <div className="brands">
      <img src={cc} />
      <img src={nike} />
      <img src={dior} />
      <img src={gc} />
    </div>
  );
}
