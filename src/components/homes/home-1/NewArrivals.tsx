"use client";
import { useSiteSettings } from "@/hooks/react-query/useSiteSettings";
import { EDefaultValue } from "@/utils/constants/default-value.enum";
import { pathNames } from "@/utils/constants/paths";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewArrivals = () => {
  const { data: siteSettings } = useSiteSettings();

  return (
    <div className="products-carousel mx-4">
      <h2 className="tw-font-anton section-title tw-text-black mb-4 pb-xl-2 mb-xl-2 text-center text-text-uppercase">
        Mới ra mắt
      </h2>

      <div className="position-relative grid grid-cols-3 gap-4">
        {siteSettings?.home?.news?.map?.((elm, i) => (
          <div
            className="pc__img-wrapper position-relative"
            key={i}
            style={{ paddingTop: "125%" }}
          >
            <Link href={`${pathNames.STORE}`}>
              <Image
                loading="lazy"
                src={elm || EDefaultValue.IMAGE}
                width="348"
                height="348"
                alt="Cropped Faux leather Jacket"
                className="pc__img"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
