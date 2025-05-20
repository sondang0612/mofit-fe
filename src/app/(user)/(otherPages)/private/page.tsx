import Header1 from "@/components/headers/Header1";
import Private1 from "@/components/private/private1";
import Private2 from "@/components/private/private2";
import Private3 from "@/components/private/private3";
import Private4 from "@/components/private/private4";
import Private5 from "@/components/private/private5";
import Private6 from "@/components/private/private6";
import Private7 from "@/components/private/private7";
import Private8 from "@/components/private/private8";
import React from "react";

const Page = () => {
  return (
    <div className="tw-bg-white tw-py-10">
      <Header1 />
      <div className="tw-mt-20 tw-px-10 tw-flex tw-gap-3 tw-flex-col tw-w-full">
        <Private1 />
        <Private2 />
        <Private3 />
        <Private4 />
        <Private5 />
        <Private6 />
        <Private7 />
        <Private8 />
      </div>
    </div>
  );
};

export default Page;
