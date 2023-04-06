import React from "react";
import s from "./style.module.scss";
import first from "./assets/Frame.svg";
import second from "./assets/Frame-2.svg";
import third from "./assets/Frame-3.svg";
import fourth from "./assets/Frame-4.svg";

export default function Logo() {
  return (
    <div className={s.logo}>
      <img src={first} alt="" />
      <img src={second} alt="" />
      <img src={third} alt="" />
      <img src={fourth} alt="" />
    </div>
  );
}
