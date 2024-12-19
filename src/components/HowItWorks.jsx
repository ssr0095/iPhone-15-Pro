import React, { useRef } from "react";
import { chipImg, frameImg, frameVideo } from "../utils/index";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils/animations";
const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom ",
        toggleActions: "restart none none none",
      },
      duration: 2,
      opacity: 0,
      scale: 2,
      ease: "power2.inOut",
    });

    animateWithGsap(".g_fadeIn", {
      y: 0,
      duration: 1,
      opacity: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center my-20 w-full">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>
        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            A17 Pro chip
            <br />A monster win for gaming
          </h2>
          <p className="hiw-subtitle">
            It’s here. The biggest redesign in the history of Apple GPUs.
          </p>
        </div>
        <div className="mb-14 mt-10 md:mt-20">
          <div className="flex-center pointer-events-none relative">
            <img src={frameImg} alt="frame" className="relative z-10" />
            <div className="hiw-video">
              <video
                src={frameVideo}
                type="video/mp4"
                playsInline
                preload="none"
                muted
                autoPlay
                loop
                ref={videoRef}
              />
            </div>
          </div>

          <p className="mt-3 text-center font-semibold text-gray">
            Honkai: Star Rail
          </p>
        </div>

        <div className="hiw-text-container">
          <div className="flex flex-1 flex-col justify-center">
            <p className="hiw-text g_fadeIn">
              A17 Pro is an entirely new class of iPhone chip that delivers our{" "}
              <span className="text-white">
                best graphic performance by far
              </span>
              .
            </p>
            <br />
            <p className="hiw-text g_fadeIn">
              Mobile{" "}
              <span className="text-white">
                games will look and feel so immersive
              </span>
              , with incredibly detailed environments and more realistic
              characters. And with industry-leading speed and efficiency, A17
              Pro takes fast and runs with it.
            </p>
          </div>

          <div className="g_fadeIn flex flex-1 flex-col justify-center">
            <p className="hiw-text">New</p>
            <p className="hiw-bigtext">Pro-class GPU</p>
            <p className="hiw-text">with 6 cores</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
