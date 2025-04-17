import * as React from "react";

const EditIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        fill="none"
        viewBox="0 0 25 24"
    >
        <path
            stroke="#1890FF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 21h18"
        ></path>
        <path
            stroke="#1890FF"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 13.36V17h3.659L20 6.654 16.348 3z"
        ></path>
    </svg>
);

export default EditIcon;
