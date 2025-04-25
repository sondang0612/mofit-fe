"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { allProducts } from "@/data/products";
import { useFavoriteProducts } from "@/hooks/react-query/auth/favorite-products/useFavoriteProducts";
import { useLikeProduct } from "@/hooks/react-query/auth/favorite-products/useLikeProduct";
import { useUnLikeProduct } from "@/hooks/react-query/auth/favorite-products/useUnLikeProduct";

export default function AccountWishlist() {
  const { data: products } = useFavoriteProducts();
  const { mutate: likeProduct } = useLikeProduct();
  const { mutate: unLikeProduct } = useUnLikeProduct();

  return (
    <div className="col-lg-9">
      <div className="page-content my-account__wishlist">
        <div className="fs-18">
          No products added to wishlist yet{" "}
          <div>
            <button
              onClick={() => likeProduct({ productId: 1 })}
              className="tw-bg-red-500"
            >
              Like
            </button>
          </div>
          <div>
            <button
              onClick={() => unLikeProduct({ productId: 1 })}
              className="tw-bg-blue-500"
            >
              unLike
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
