import React from "react";
import s from "./style.module.scss";
import first from "./assets/IMAGE.png";

export default function Info() {
  return (
    <div className={s.info}>
      <div className={s.info_card}>
        <h1>Get the rest of the story</h1>
        <div className={s.info_flex}>
          <div className={s.info_img}>
            <img src={first} alt="" />
          </div>
          <div className={s.info_text}>
            <h4>
              “Best templates and support out there! They are always happy to
              help with any issues you may be having or even just showing how to
              edit things.”
            </h4>
            <p>Sam {`(Trustpilot)`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
