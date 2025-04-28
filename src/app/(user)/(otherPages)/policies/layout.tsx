import PoliciesNav from "@/components/policies/PoliciesNav";
import React from "react";

const PolicyLayout = ({ children }: { children: any }) => {
  return (
    <div className="tw-bg-white tw-px-10 tw-flex md:tw-gap-20 tw-gap-3 md:tw-flex-row tw-flex-col tw-py-10">
      <div className="md:tw-w-[30%] tw-w-full">
        <PoliciesNav />
      </div>
      <div className="md:tw-w-[70%] tw-w-full">{children}</div>
    </div>
  );
};

export default PolicyLayout;
