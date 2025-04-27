"use client";

import { useCart } from "@/hooks/react-query/cart/useCart";
import { useRemoveCartItem } from "@/hooks/react-query/cart-items/useRemoveCartItem";
import Link from "next/link";
import ListCartItems from "./ListCartItems";
import { pathNames } from "@/utils/constants/paths";
import CardLayout from "./CardLayout";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { formatPrice } from "@/utils/formatPrice";

export default function Cart() {
  const { data: cart } = useCart();
  const { mutate: removeCartItem } = useRemoveCartItem();
  const router = useRouter();

  const total = useMemo(() => {
    return cart?.reduce(
      (acc, item) => acc + (item?.quantity || 0) * (item.product?.price || 0),
      0
    );
  }, [cart]);

  return (
    <CardLayout
      leftChildren={
        <div className="tw-px-6 tw-pt-2 tw-pb-6 tw-bg-white">
          <div className="cart-table__wrapper">
            {cart?.length ? (
              <>
                <ListCartItems
                  data={cart}
                  onRemove={(cartItemId) => removeCartItem({ cartItemId })}
                />
              </>
            ) : (
              <>
                <div className="fs-20">Giỏ hàng đang trống</div>

                <button className="btn mt-3 btn-light">
                  <Link href={pathNames.STORE}>Mua hàng ngay!</Link>
                </button>
              </>
            )}
          </div>
        </div>
      }
      rightChildren={
        <div className="tw-bg-white tw-p-6">
          <div className="tw-flex tw-items-center tw-justify-between tw-border-b tw-pb-4 tw-border-[#EBEBF0]">
            <div className="tw-text-[#808089]">Tạm tính</div>
            <div className="">{formatPrice(total)}</div>
          </div>
          <div className="tw-pt-4">
            <button
              onClick={() => router.push("/shop_checkout")}
              className="hover:tw-bg-red-600 tw-transition-all tw-bg-[#EC1A23] tw-h-[40px] tw-w-full tw-rounded tw-text-white"
            >
              Tiến hành đặt hàng
            </button>
          </div>
        </div>
      }
    />
  );
}
