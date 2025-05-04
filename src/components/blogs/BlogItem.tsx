"use client";
import { pathNames } from "@/utils/constants/paths";
import { useRouter } from "next/navigation";
import React from "react";
import BlinkingHot from "./BlinkingHot";

interface Props {
  data?: any;
}

export const BlogItem = (props: Props) => {
  const router = useRouter();
  const { data } = props;
  return (
    <div>
      <img
        src={data?.coverImage}
        alt="blog_image"
        className="tw-w-full tw-rounded-md tw-cursor-pointer"
        onClick={() => router.push(`${pathNames.BLOGS}/${data?.id}`)}
      />
      <div className="md:tw-mt-10 tw-mt-6">
        <div className="tw-flex tw-items-center tw-justify-between">
          <div className="tw-flex tw-flex-row tw-gap-5">
            <span className="tw-text-sm tw-text-gray-500">
              {data?.createdAt}
            </span>
            <span className="tw-text-sm tw-text-black">
              {data?.categoryName}
            </span>
          </div>
          <BlinkingHot text="HOT!" />
        </div>
        <div
          className="tw-text-xl tw-text-black tw-font-bold md:tw-my-4 tw-my-2 tw-line-clamp-2 hover:tw-opacity-75 tw-cursor-pointer"
          onClick={() => router.push(`${pathNames.BLOGS}/${data?.id}`)}
        >
          {data?.title}
        </div>
        <div className="tw-line-clamp-3">{data?.subDescription}</div>
      </div>
    </div>
  );
};
