"use client";
import Link from "next/link";

import { useCart } from "@/hooks/react-query/cart/useCart";
import { pathNames } from "@/utils/constants/paths";
import { formatPrice } from "@/utils/formatPrice";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import CartDrawerItem from "./CartDrawerItem";

export default function CartDrawer() {
  const { data: cart } = useCart();
  const router = useRouter();
  const pathname = usePathname();
  const closeCart = () => {
    document
      ?.getElementById("cartDrawerOverlay")
      ?.classList.remove("page-overlay_visible");
    document?.getElementById("cartDrawer")?.classList.remove("aside_visible");
  };

  const handleShopNow = () => {
    const href = pathNames.STORE;
    if (pathname === href) {
      closeCart();
    } else {
      router.push(href);
    }
  };

  const subTotal = React.useMemo(() => {
    return cart?.reduce((prev, cur) => {
      const curQuantity = cur?.quantity || 0;
      const curPrice = cur?.product?.price || 0;
      return prev + curQuantity * curPrice;
    }, 0);
  }, [cart]);

  useEffect(() => {
    closeCart();
  }, [pathname]);

  return (
    <>
      <div
        className="aside aside_right overflow-hidden cart-drawer "
        id="cartDrawer"
      >
        <div className="aside-header d-flex align-items-center">
          <h3 className="text-uppercase fs-6 mb-0">
            Giỏ hàng (
            <span className="cart-amount js-cart-items-count">
              {cart?.length}
            </span>
            )
          </h3>
          <button
            onClick={closeCart}
            className="btn-close-lg js-close-aside btn-close-aside ms-auto"
          ></button>
        </div>
        {cart?.length ? (
          <div className="aside-content cart-drawer-items-list">
            {cart?.map((elm, i) => (
              <CartDrawerItem data={elm} key={i} />
            ))}

            {/* <!-- /.cart-drawer-item d-flex --> */}
          </div>
        ) : (
          <div className="fs-18 mt-5 px-5 text-center">
            Chưa có sản phẩm trong giỏ hàng.{" "}
            <span
              className="underline cursor-pointer text-blue-500"
              onClick={handleShopNow}
            >
              Mua hàng ngay!
            </span>
          </div>
        )}
        {/* <!-- /.aside-content --> */}

        <div className="cart-drawer-actions position-absolute start-0 bottom-0 w-100">
          <hr className="cart-drawer-divider" />
          <div className="d-flex justify-content-between">
            <h6 className="fs-base fw-medium">Tạm tính:</h6>
            <span className="cart-subtotal fw-medium">
              ${formatPrice(subTotal)}
            </span>
          </div>
          {/* <!-- /.d-flex justify-content-between --> */}
          {cart?.length ? (
            <>
              <Link href="/shop_cart" className="btn btn-light mt-3 d-block">
                Xem giỏ hàng
              </Link>
              <Link
                href="/shop_checkout"
                className="btn btn-primary mt-3 d-block"
              >
                Thanh toán
              </Link>
            </>
          ) : (
            <Link href={pathNames.STORE} className="btn btn-light mt-3 d-block">
              Mua hàng ngay
            </Link>
          )}
        </div>
        {/* <!-- /.aside-content --> */}
      </div>
      <div
        id="cartDrawerOverlay"
        onClick={closeCart}
        className="page-overlay"
      ></div>
    </>
  );
}
