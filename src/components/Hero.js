import React from "react";
/* CSS */
import "@css/typography.css";
import "@css/hero.css";
/* Image */
import logo from "@images/CRP-Logo.png";

function Hero(props) {
  const { alt, children, h1, img } = props;
  return (
    <div className="hero">
      {img && <img alt={alt} className="hero-background" src={img} />}
      <div className="hero-content">
        <img className="hero-logo" src={logo} alt="CR Productions logo" />
        <h1>{h1}</h1>
        {/* {children} */}
      </div>
    </div>
  );
}

export default Hero;
