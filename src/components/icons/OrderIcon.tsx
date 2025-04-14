import * as React from "react";

const OrderIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="25"
    fill="none"
    viewBox="0 0 24 25"
  >
    <path
      fill="#9B9B9B"
      d="M13 12.21h7v1.5h-7zm0-2.5h7v1.5h-7zm0 5h7v1.5h-7zm8-10.5H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-13c0-1.1-.9-2-2-2m0 15h-9v-13h9z"
    ></path>
  </svg>
);

export default OrderIcon;
