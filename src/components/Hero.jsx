import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo,
  );
  const handleVideoSrc = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };
  useGSAP(() => {
    gsap.to("#hero-title", { opacity: 1, delay: 2 });
    gsap.to("#cta", { opacity: 1, y: -50, delay: 2 });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrc);

    return () => window.removeEventListener("resize", handleVideoSrc);
  }, []);

  return (
    <section className="nav-height relative w-full bg-black">
      <div className="flex-center h-5/6 w-full flex-col">
        <p id="hero-title" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="pointer-events-none w-9/12 md:w-10/12">
          <video
            src={videoSrc}
            type="video/mp4"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          />
        </div>
      </div>
      <div
        id="cta"
        className="cta flex translate-y-20 flex-col items-center opacity-0"
      >
        <a className="btn">Buy</a>
        <p className="text-xl font-normal">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
