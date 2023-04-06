import React from "react";
import Info from "./info";
import Logo from "./logo";
import Navbar from "./navbar";
import Product from "./product";
import Showcase from "./showcase";

export default function Main() {
  return (
    <div>
      <Navbar />
      <Showcase />
      <Product />
      <Info />
      <Logo />
    </div>
  );
}
