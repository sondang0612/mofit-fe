"use client";
import { useFavoriteProducts } from "@/hooks/react-query/auth/favorite-products/useFavoriteProducts";
import Product from "../shoplist/Product";

export default function AccountWishlist() {
  const { data: products } = useFavoriteProducts();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(price);
  };

  return (
    <div className="tw-w-full tw-flex-1">
      <div className="tw-bg-white tw-rounded-lg tw-shadow-sm tw-p-6">
        {!products || products?.length === 0 ? (
          <div className="tw-text-lg tw-text-gray-600 tw-text-center tw-py-12">
            No products added to wishlist yet
          </div>
        ) : (
          <div>
            <h2 className="tw-text-2xl tw-font-bold tw-mb-6 tw-text-gray-800">
              Your Wishlist
            </h2>
            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-6">
              {products.map((item) => (
                <Product data={item.product as any} key={item.id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
