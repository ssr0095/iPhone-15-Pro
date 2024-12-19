import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { animateWithGsap } from "../utils/animations";
import { explore1Img, explore2Img, exploreVideo } from "../utils";

const Features = () => {
  const videoRef = useRef();

  useGSAP(() => {
    animateWithGsap("#features_title", { y: 0, opacity: 1 });
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete() {
        videoRef.current.play();
      },
    });

    animateWithGsap(
      ".g_grow",
      { scale: 1, opacity: 1, ease: "power1" },
      { scrub: 5.5 },
    );
    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);
  return (
    <section className="common-padding relative overflow-hidden bg-zinc">
      <div className="screen-max-width">
        <div id="features_title" className="section-heading mb-12 w-full">
          <h1>Explore the full story.</h1>
        </div>
      </div>
      <div className="flex flex-col items-start justify-center overflow-hidden">
        <div className="mb-24 mt-32 pl-24">
          <h1 className="text-5xl lg:text-7xl">iPhone.</h1>
          <h1 className="text-5xl lg:text-7xl">Forged in titanium.</h1>
        </div>

        <div className="flex-center screen-max-width flex-col sm:px-10">
          {/* video */}
          <div className="flex h-[50vh] w-full items-center justify-center">
            <video
              type="video/mp4"
              id="exploreVideo"
              className="h-full w-full object-cover object-center"
              playsInline
              // preload="none"
              src={exploreVideo}
              muted
              autoPlay
              ref={videoRef}
            />
          </div>
          {/* images */}
          <div className="flex w-full flex-col items-center gap-5 md:flex-row">
            <div className="feature-video-container">
              <div className="h-[50vh] flex-1 overflow-hidden">
                <img
                  src={explore1Img}
                  alt="explore1"
                  className="feature-video g_grow"
                />
              </div>
              <div className="h-[50vh] flex-1 overflow-hidden">
                <img
                  src={explore2Img}
                  alt="explore2"
                  className="feature-video g_grow"
                />
              </div>
            </div>
          </div>
          {/* text */}
          <div className="feature-text-container">
            <div className="flex-center flex-1">
              <p className="feature-text g_text">
                iPhone 15 Pro is{" "}
                <span className="text-white">
                  the first iPhone to feature an aerospace-grade titanium design
                </span>
                , using the same alloy that spacecrafts use for missions to
                Mars.
              </p>
            </div>

            <div className="flex-center flex-1">
              <p className="feature-text g_text">
                Titanium has one of the best strength-to-weight ratios of any
                metal, making these our{" "}
                <span className="text-white">lightest Pro models ever.</span>
                You'll notice the difference the moment you pick one up.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
