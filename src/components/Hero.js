import React from "react";
/* CSS */
import "@css/typography.css";
import "@css/hero.css";
/* Image */
import logo from "@images/CRP-Logo.png";

function Hero(props) {
  const { alt, children, h1, img, video } = props;
  return (
    <div className="hero">
      <div className="hero-background">
        {img && <img alt={alt} className="hero-background" src={img} />}
        {video && (
          <video
            width="1920"
            height="1080"
            id="aF-asdfgasdf-video"
            className="background-video"
            src={video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source type="video/mp4" src={video} />
            <a href={video}>{video}</a>
          </video>
        )}
      </div>
      <div className="hero-layout">
        <div className="hero-content">
          {/* <img className="hero-logo" src={logo} alt="CR Productions logo" /> */}
          {h1 && <h1>{h1}</h1>}
          {children && children}
        </div>
      </div>
    </div>
  );
}

export default Hero;
