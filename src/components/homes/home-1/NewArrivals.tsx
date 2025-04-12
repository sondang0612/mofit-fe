"use client";
import { useNewestCategory } from "@/hooks/react-query/categories/useNewestCategories";
import { EDefaultValue } from "@/utils/constants/default-value.enum";
import { pathNames } from "@/utils/constants/paths";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const NewArrivals = () => {
  const { data: category } = useNewestCategory();

  return (
    <div className="products-carousel mx-4">
      <h2 className="section-title mb-4 pb-xl-2 mb-xl-2 text-center text-text-uppercase">Mới ra mắt</h2>

      <div className="position-relative grid grid-cols-3 gap-4">
        {category?.subCategories?.map?.((elm, i) => (
          <div
            className="pc__img-wrapper position-relative"
            key={i}
            style={{ paddingTop: "125%" }}
          >
            <div className="absolute insets-0 z-100 bg-overlay-20">
              <p className="absolute top-4 text-10 text-white text-right uppercase font-bold" style={{ right: "20%" }}>
                {elm?.name?.split(' ').map((word, index, array) => (
                  <React.Fragment key={index}>
                    {index > 0 && ' '}
                    {word}
                    {(index + 1) % 2 === 0 && index < array.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>

            <Link href={`${pathNames.STORE}?activeCategory=${elm.id}`}>
              <Image
                loading="lazy"
                src={elm.imgSrc || EDefaultValue.IMAGE}
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
