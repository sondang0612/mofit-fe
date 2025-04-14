import * as React from "react";

const BellIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="25"
    fill="none"
    viewBox="0 0 24 25"
  >
    <path
      fill="#9B9B9B"
      d="M12 22.21c1.1 0 2-.9 2-2h-4a2 2 0 0 0 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32v-.68c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.57 6 8.13 6 11.21v5l-2 2v1h16v-1z"
    ></path>
  </svg>
);

export default BellIcon;
