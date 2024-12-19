import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

import { pauseImg, playImg, replayImg } from "../utils";
import { hightlightsSlides } from "../constants";

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);
  const [video, setVideo] = useState({
    videoId: 0,
    isEnd: false,
    isPlaying: false,
    isLastVideo: false,
    startPlay: false,
  });
  const [loadedData, setLoadedData] = useState([]);
  const { videoId, isEnd, isLastVideo, isPlaying, startPlay } = video;

  const handleProcess = (type, i) => {
    switch (type) {
      case "video-end":
        setVideo((pre) => ({ ...pre, isEnd: true, videoId: i + 1 }));
        break;
      case "video-last":
        setVideo((pre) => ({ ...pre, isLastVideo: true }));
        break;
      case "video-reset":
        setVideo((pre) => ({ ...pre, isLastVideo: false, videoId: 0 }));
        break;
      case "play":
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
        break;
      case "pause":
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
        break;

      default:
        return video;
    }
  };

  //sliding animation
  useGSAP(() => {
    gsap.to("#slider", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 1.5,
    });
    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((pre) => ({ ...pre, startPlay: true, isPlaying: true }));
      },
    });
  }, [isEnd, videoId]);

  const handleLoadedMetaData = (i, e) => setLoadedData((pre) => [...pre, e]);

  // initial & after change video play|pause
  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId].pause();
      } else {
        startPlay && videoRef.current[videoId].play();
      }
    }
  }, [videoId, startPlay, isPlaying, loadedData]);

  // bottom progress
  useEffect(() => {
    let currentProgress = 0;
    let span = videoSpanRef.current;

    if (span[videoId]) {
      let animete = gsap.to(span[videoId], {
        onUpdate: () => {
          let progress = Math.ceil(animete.progress() * 100);

          if (currentProgress !== progress) {
            currentProgress = progress;

            gsap.to(videoDivRef.current[videoId], {
              width:
                window.innerWidth < 760
                  ? "10vw"
                  : window.innerWidth < 1200
                    ? "10vw"
                    : "4vw",
            });

            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: "white",
            });
          }
        },
        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], {
              width: "12px",
            });
            gsap.to(span[videoId], {
              backgroundColor: "#afafaf",
            });
          }
        },
      });
      if (videoId === 0) {
        animete.restart();
      }

      const animeUpdate = () => {
        animete.progress(
          videoRef.current[videoId].currentTime /
            hightlightsSlides[videoId].videoDuration,
        );
      };

      if (isPlaying) {
        gsap.ticker.add(animeUpdate);
      } else {
        gsap.ticker.remove(animeUpdate);
      }
    }
  }, [videoId, startPlay]);

  return (
    <>
      <div className="flex items-center">
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className="pr-10 sm:pr-20">
            <div className="video-carousel_container">
              <div className="flex-center h-full w-full overflow-hidden rounded-3xl bg-black">
                <video
                  id="video"
                  playsInline={true}
                  preload="auto"
                  muted
                  ref={(e) => (videoRef.current[i] = e)}
                  onPlay={() => {
                    setVideo((prevVid) => ({ ...prevVid, isPlaying: true }));
                  }}
                  onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}
                  onEnded={() =>
                    i !== 3
                      ? handleProcess("video-end", i)
                      : handleProcess("video-last")
                  }
                  className={`pointer-events-none ${list.id === 2 && "translate-x-44"}`}
                >
                  <source type="video/mp4" src={list.video} />
                </video>
              </div>
              {/* corner text */}
              <div className="absolute left-[5%] top-12 z-10">
                {list.textLists.map((text) => (
                  <p key={text} className="text-xl font-medium md:text-2xl">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* span */}
      <div className="flex-center relative mt-10">
        <div className="flex-center rounded-full bg-gray-300 px-7 py-5">
          {videoRef.current.map((_, i) => (
            <span
              key={i}
              ref={(e) => (videoDivRef.current[i] = e)}
              className="relative mx-2 size-3 cursor-pointer rounded-full bg-gray-200"
            >
              <span
                className="absolute size-full rounded-full"
                ref={(e) => (videoSpanRef.current[i] = e)}
              ></span>
            </span>
          ))}
        </div>
        <button>
          <img
            src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
            className="control-btn"
            alt={isLastVideo ? "replay" : !isPlaying ? "pause" : "paly"}
            onClick={
              isLastVideo
                ? () => handleProcess("video-reset")
                : !isPlaying
                  ? () => handleProcess("play")
                  : () => handleProcess("pause")
            }
          />
        </button>
      </div>
    </>
  );
};

export default VideoCarousel;
