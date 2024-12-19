import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { rightImg, watchImg } from "../utils/index";
import VideoCarousel from "./VideoCarousel";
import { animateWithGsap } from "../utils/animations";

const HighLights = () => {
  useGSAP(() => {
    animateWithGsap("#title", { opacity: 1, y: 0 });
    animateWithGsap(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);
  return (
    <section className="common-padding h-full w-screen overflow-hidden bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full items-end justify-between md:flex">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film <img src={watchImg} className="ml-2" alt="watch" />
            </p>
            <p className="link">
              Watch the event
              <img src={rightImg} className="ml-2" alt="watch" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default HighLights;
