"use client";

import React, { useEffect, useState } from "react";
import { Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/thumbs";
import "swiper/css";
import "photoswipe/dist/photoswipe.css";

import { Gallery, Item } from "react-photoswipe-gallery";
import Image from "next/image";
import tippy from "tippy.js";
import { Product } from "@/types/api";
import { EDefaultValue } from "@/utils/constants/default-value.enum";

interface Props {
  product?: Product;
}

export default function ProductSlider1(props: Props) {
  const { product } = props;
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  // Temporary images for demo
  const demoImages = [
    EDefaultValue.IMAGE,
    EDefaultValue.IMAGE,
    EDefaultValue.IMAGE,
    EDefaultValue.IMAGE,
  ];

  const images = React.useMemo(() => {
    if (product?.images?.cover || product?.images?.other) {
      const result = [];
      if (product?.images?.cover) {
        result.push(product.images.cover);
      }
      if (product?.images?.other) {
        result.push(...product.images.other);
      }
      return result;
    }
    return demoImages;
  }, [product?.images?.cover, product?.images?.other]);

  useEffect(() => {
    tippy("[data-tippy-content]");
  }, []);

  return (
    <div className="tw-flex tw-flex-col tw-gap-4">
      {/* Main Image */}
      <div className="tw-relative tw-rounded-2xl tw-overflow-hidden tw-bg-white">
        <Gallery>
          <Swiper
            modules={[Navigation, Thumbs]}
            thumbs={{ swiper: thumbsSwiper }}
            navigation={{
              prevEl: ".main-prev",
              nextEl: ".main-next",
            }}
            className="tw-aspect-square tw-flex tw-items-center tw-justify-center"
          >
            {images.map((image, index) => (
              <SwiperSlide
                key={index}
                className="tw-flex tw-items-center tw-justify-center"
              >
                <Item
                  original={image}
                  thumbnail={image}
                  width={800}
                  height={800}
                >
                  {({ ref, open }) => (
                    <div className="tw-relative tw-aspect-square tw-w-full tw-flex tw-items-center tw-justify-center">
                      <Image
                        ref={ref as any}
                        src={image}
                        alt={`Product image ${index + 1}`}
                        fill
                        className="tw-object-contain"
                        onClick={open}
                      />
                    </div>
                  )}
                </Item>
              </SwiperSlide>
            ))}
          </Swiper>
        </Gallery>
      </div>

      {/* Thumbnails */}
      <div className="tw-relative">
        <Swiper
          onSwiper={setThumbsSwiper}
          modules={[Thumbs]}
          slidesPerView={"auto"}
          spaceBetween={10}
          className="tw-h-24"
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="tw-cursor-pointer tw-h-24 !tw-w-auto"
            >
              <div className="tw-relative tw-h-full tw-w-[88px] tw-rounded-lg tw-overflow-hidden tw-border tw-border-gray-200 tw-flex tw-items-center tw-justify-center">
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="tw-object-contain tw-p-2"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
