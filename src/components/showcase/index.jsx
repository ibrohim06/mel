import React from "react";
import s from "./style.module.scss";
import first from "./assets/IMAGE.svg";
import second from "./assets/IMAGE-2.svg";
import third from "./assets/IMAGE-3.svg";

export default function Showcase() {
  return (
    <div className={s.showcase}>
      <div className={s.showcase_card}>
        <img src={first} alt="" />
        <div className={s.showcase_img}>
          <img src={second} alt="" />
          <img src={third} alt="" />
        </div>
      </div>
      <div className={s.showcase_info}>
        <h3>
          Shop hundreds of enamel pins from artists. The best cool pin badges to
          decorate your backpack, denim jean jacket, lapel, and festival hat for
          sale in our online store.
        </h3>
      </div>
      <div className={s.showcase_min}>
        <div className={s.showcase_mcard}>
          <p>1</p>
          <h3>Cruelty Free</h3>
          <h4>Free digital proofs and best design advice</h4>
        </div>
        <div className={s.showcase_mcard}>
          <p>2</p>
          <h3>Cruelty Free</h3>
          <h4>Free digital proofs and best design advice</h4>
        </div>
        <div className={s.showcase_mcard}>
          <p>3</p>
          <h3>Cruelty Free</h3>
          <h4>Free digital proofs and best design advice</h4>
        </div>
      </div>
    </div>
  );
}
