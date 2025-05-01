"use client";

import { useCreateCartItem } from "@/hooks/react-query/cart-items/useCreateCartItem";
import { useRemoveCartItem } from "@/hooks/react-query/cart-items/useRemoveCartItem";
import { useUpdateCartItem } from "@/hooks/react-query/cart-items/useUpdateCartItem";
import { CartItem } from "@/types/api";
import { EDefaultValue } from "@/utils/constants/default-value.enum";
import { formatPrice } from "@/utils/formatPrice";
import { getTotalPrice } from "@/utils/getTotalPrice";
import Image from "next/image";
import React from "react";
interface Props {
  data?: CartItem;
}

const CartDrawerItem = (props: Props) => {
  const { data } = props;
  const { mutate: removeCartItem } = useRemoveCartItem();
  const { mutate: updateCartItem } = useUpdateCartItem();
  const debounceTimeout = React.useRef<NodeJS.Timeout | null>(null);

  const [quantity, setQuantity] = React.useState<number>(1);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      if (data?.product?.id) {
        updateCartItem({
          productId: data.product.id,
          quantity: newQuantity,
        });
      }
    }, 1000);
  };

  React.useEffect(() => {
    setQuantity(data?.quantity || 1);
  }, [data?.quantity]);

  return (
    <React.Fragment>
      <div className="cart-drawer-item d-flex position-relative">
        <div className="position-relative">
          <Image
            loading="lazy"
            className="cart-drawer-item__img"
            width={330}
            height={400}
            style={{ height: "fit-content" }}
            src={data?.product?.images?.cover || EDefaultValue.IMAGE}
            alt="image"
          />
        </div>
        <div className="cart-drawer-item__info flex-grow-1">
          <h6 className="cart-drawer-item__title fw-normal">
            {data?.product?.title}
          </h6>
          <p className="cart-drawer-item__option text-secondary">
            Loại: {data?.product?.category?.name}
          </p>
          <p className="cart-drawer-item__option text-secondary">
            Mã: {data?.product?.id}
          </p>
          <div className="d-flex align-items-center justify-content-between mt-1">
            <div className="qty-control position-relative">
              <input
                type="number"
                name="quantity"
                value={quantity}
                onChange={(e) => handleQuantityChange(+e.target.value || 1)}
                min={1}
                className="qty-control__number border-0 text-center"
              />
              <div
                className="qty-control__reduce text-start"
                onClick={
                  quantity > 1
                    ? () => handleQuantityChange(quantity - 1)
                    : undefined
                }
              >
                -
              </div>
              <div
                className="qty-control__increase text-end"
                onClick={() => handleQuantityChange(quantity + 1)}
              >
                +
              </div>
            </div>

            <span className="cart-drawer-item__price money price">
              {formatPrice(getTotalPrice(data?.product?.price, quantity))}
            </span>
          </div>
        </div>

        <button
          className="btn-close-xs position-absolute top-0 end-0 js-cart-item-remove"
          onClick={() => removeCartItem({ cartItemId: data?.id })}
        ></button>
      </div>
      {/* <!-- /.cart-drawer-item d-flex --> */}

      <hr className="cart-drawer-divider" />
    </React.Fragment>
  );
};

export default CartDrawerItem;
