import React from "react";

interface Props {
  text: string;
}

const BlinkingHot = (props: Props) => {
  const { text } = props;
  return (
    <div className="tw-flex tw-justify-center tw-items-center">
      <div className="tw-animate-blink">
        <h1 className="tw-text-xl tw-font-extrabold tw-text-center !tw-mb-0">
          <span className="tw-bg-gradient-to-r tw-from-red-600 tw-to-orange-500 tw-text-transparent tw-bg-clip-text">
            {text}
          </span>
        </h1>
      </div>

      <style jsx global>{`
        @keyframes blink {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            opacity: 1;
          }
        }

        .tw-animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </div>
  );
};

export default BlinkingHot;
