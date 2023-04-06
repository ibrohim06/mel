import React from "react";
import s from "./style.module.scss";
import first from "./assets/IMAGE.png";
import product from "./assets/product-1.png";
import product_2 from "./assets/product-2.png";
import product_3 from "./assets/product_3.png";
import product_4 from "./assets/product-4.png";

export default function Product() {
  return (
    <div className={s.product}>
      <div className={s.product_flex}>
        <div className={s.product_card}>
          <img src={first} alt="" />
          <p>Hard BOILED Egg and Avocado</p>
        </div>
        <div className={s.product_card}>
          <img src={first} alt="" />
          <p>Hard BOILED Egg and Avocado</p>
        </div>
        <div className={s.product_card}>
          <img src={first} alt="" />
          <p>Hard BOILED Egg and Avocado</p>
        </div>
      </div>
      <div className={s.product_info}>
        <div className={s.product_box}>
          <div className={s.product_title}>
            <h2>From our powerhouse to your house.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
          <div className={s.product_img} id={s.transform_left}>
            <img src={product} alt="" />
            <p>Use this text to describe the first step...</p>
          </div>
        </div>
        <div className={s.product_box}>
          <div className={s.product_title} id={s.transform_right}>
            <img src={product_2} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
          </div>
          <div className={s.product_img}>
            <img src={product_3} alt="" />
            <p>...aaand the third one...</p>
          </div>
        </div>
        <div className={s.product_box}>
          <div className={s.product_img} id={s.transform_right}>
            <img src={product_4} alt="" />
            <p>...This is the last fourth step of how it works.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
