import React, { useLayoutEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Brands from "./Brands";
import Explore from "./Explore";
import Product from "./Product";
import PdfEditor from "./PdfEditor";

export default function Home() {
  return <PdfEditor />;
  return (
    <>
      <Header />
      <Hero />
      <Brands />
      <Explore />
      <Product />
    </>
  );
}
