import Header1 from "@/components/headers/Header1";
import PoliciesNav from "@/components/policies/PoliciesNav";
import React from "react";

const PolicyLayout = ({ children }: { children: any }) => {
  return (
    <div className="tw-bg-white tw-py-10">
      <Header1 />
      <div className="tw-mt-20 tw-px-10 tw-flex md:tw-gap-20 tw-gap-3 md:tw-flex-row tw-flex-col tw-w-full">
        <div className="md:tw-w-[30%] tw-w-full t">
          <PoliciesNav />
        </div>
        <div className="md:tw-w-[70%] tw-w-full">{children}</div>
      </div>
    </div>
  );
};

export default PolicyLayout;
