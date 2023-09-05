import React, { useEffect, useLayoutEffect, useRef } from "react";
import hero_img from "../assets/img/hero.png";
import { gsap } from "gsap";

export default function Hero() {
  const refs = useRef();
  const maskRef = useRef(null);

  useLayoutEffect(() => {
    gsap.to(".img_", {
      duration: 1,
      y: -50, // Move the element 100 units up
      opacity: 1, // Start with 0 opacity
      ease: "power1.out",
      lazy: true,
    });
  }, []);

  return (
    <div className="hero_section">
      <div className="left_side">
        <p className="title">
          <span>
            Elevate your
            <br /> wardrobe with our <br /> fashion essentials
          </span>
        </p>
        <p className="sub_title">
          <span>
            Experience the ultimate relaxation with our collection of serene and
            tarnquil spa-inspired designs.
          </span>
        </p>{" "}
        <button className="btns">
          <span>Browse</span>
        </button>
      </div>

      <div className="right_side">
        <img className="img_ " ref={refs} src={hero_img} />
      </div>
    </div>
  );
}
