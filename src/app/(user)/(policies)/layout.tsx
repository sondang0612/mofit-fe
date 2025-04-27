import React from "react";

const PolicyLayout = ({ children }: { children: any }) => {
  return (
    <div className=" tw-bg-blue-200 tw-px-8 md:tw-px-[30rem]">
      <div className="tw-text-sm tw-font-bold tw-cursor-pointer">
        Các Chính Sách Và Quy Định
      </div>
      {children}
    </div>
  );
};

export default PolicyLayout;
