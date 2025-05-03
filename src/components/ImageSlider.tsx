import { EDefaultValue } from "@/utils/constants/default-value.enum";
import React, { useState, useEffect } from "react";

const ImageSlider = ({ images = [] }: { images?: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (slideIndex: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(slideIndex);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // Return empty div if no images
  if (images.length === 0) {
    return (
      <img
        src={EDefaultValue.IMAGE}
        alt={EDefaultValue.ALT_IMAGE}
        className="tw-w-full tw-h-full tw-object-cover"
      />
    );
  }

  return (
    <div className="tw-relative tw-w-full tw-overflow-hidden">
      {/* Main slider */}
      <div
        className="tw-flex tw-transition-transform tw-duration-500 tw-ease-in-out tw-h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="tw-w-full tw-h-full tw-flex-shrink-0">
            <img
              src={image || EDefaultValue.IMAGE}
              alt={EDefaultValue.ALT_IMAGE || `Slide ${index + 1}`}
              className="tw-w-full tw-h-full tw-object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="tw-absolute tw-left-4 tw-top-1/2 tw-transform -tw-translate-y-1/2 tw-bg-black tw-bg-opacity-50 tw-text-white tw-p-2 tw-rounded-full tw-h-10 tw-w-10 tw-flex tw-items-center tw-justify-center tw-z-10 tw-hover:bg-opacity-70 tw-transition-all"
        aria-label="Previous slide"
      >
        <svg
          className="tw-w-6 tw-h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="tw-absolute tw-right-4 tw-top-1/2 tw-transform -tw-translate-y-1/2 tw-bg-black tw-bg-opacity-50 tw-text-white tw-p-2 tw-rounded-full tw-h-10 tw-w-10 tw-flex tw-items-center tw-justify-center tw-z-10 tw-hover:bg-opacity-70 tw-transition-all"
        aria-label="Next slide"
      >
        <svg
          className="tw-w-6 tw-h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Indicator dots */}
      <div className="tw-absolute tw-bottom-4 tw-left-1/2 tw-transform -tw-translate-x-1/2 tw-flex tw-space-x-2 tw-z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`tw-w-3 tw-h-3 tw-rounded-full tw-transition-all ${
              currentIndex === index
                ? "tw-bg-white tw-w-4"
                : "tw-bg-white tw-bg-opacity-50 tw-hover:bg-opacity-75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
