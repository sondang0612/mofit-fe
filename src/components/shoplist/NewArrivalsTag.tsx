import React from "react";

const NewArrivalsTag = () => {
  return (
    <div className="tw-w-full tw-p-4">
      <button className="tw-relative tw-w-full tw-h-10 tw-rounded tw-overflow-hidden">
        {/* SVG animation as background */}
        <svg
          className="tw-absolute tw-inset-0 tw-w-full tw-h-full"
          viewBox="0 0 400 64"
          preserveAspectRatio="none"
        >
          {/* Background rectangle */}
          <rect width="400" height="64" fill="#F97316" />

          {/* Animated gradient definition */}
          <defs>
            <linearGradient
              id="buttonGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#F97316">
                <animate
                  attributeName="stop-color"
                  values="#F97316;#FB923C;#F97316"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="100%" stopColor="#FB923C">
                <animate
                  attributeName="stop-color"
                  values="#FB923C;#FDBA74;#FB923C"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>

            {/* Glow effect */}
            <filter
              id="buttonGlow"
              x="-10%"
              y="-10%"
              width="120%"
              height="120%"
            >
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Border animation */}
          <rect
            x="1"
            y="1"
            width="398"
            height="62"
            rx="4"
            ry="4"
            fill="none"
            stroke="url(#buttonGradient)"
            strokeWidth="2"
            filter="url(#buttonGlow)"
          >
            <animate
              attributeName="stroke-dasharray"
              values="1,920;20,900;1,920"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-dashoffset"
              from="920"
              to="0"
              dur="3s"
              repeatCount="indefinite"
            />
          </rect>

          {/* Light effect moving across button */}
          <rect
            x="-100"
            y="0"
            width="50"
            height="64"
            fill="white"
            opacity="0.2"
          >
            <animate
              attributeName="x"
              from="-100"
              to="500"
              dur="2s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>

        {/* Button text */}
        <span className="tw-relative tw-z-10 tw-text-base tw-text-white tw-px-4">
          Mới về
        </span>
      </button>
    </div>
  );
};

export default NewArrivalsTag;
