"use client";
import { useSiteSettings } from "@/hooks/react-query/useSiteSettings";
import { EDefaultValue } from "@/utils/constants/default-value.enum";
import Image from "next/image";
import React from "react";

const TryNow = () => {
  const [showVideo, setShowVideo] = React.useState(false);
  const { data: siteSettings } = useSiteSettings();
  return (
    <div className="w-full h-full relative overflow-hidden">
      <Image
        src={siteSettings?.home?.tryNow || EDefaultValue.IMAGE}
        loading="eager"
        alt="Try Now"
        width={0}
        height={600}
        sizes="100vw"
        className="w-full h-full"
      />
      <h4 className="try-now__text tw-font-anton">
        Bạn đã <br /> thử chưa
      </h4>
      <button
        className="try-now__play-video tw-px-3 tw-py-1 tw-text-uppercase tw-rounded-full tw-bg-white"
        onClick={() => setShowVideo(true)}
      >
        Xem video
      </button>

      {showVideo && (
        <div className="videoOverlay" onClick={() => setShowVideo(false)}>
          <div className="videoContainer">
            <button className="closeButton" onClick={() => setShowVideo(false)}>
              ✕
            </button>
            <iframe
              className="videoFrame"
              src={siteSettings?.home.should_try_video}
              title="Video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default TryNow;
