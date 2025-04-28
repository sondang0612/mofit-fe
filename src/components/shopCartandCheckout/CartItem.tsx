import { useUpdateCartItem } from "@/hooks/react-query/cart-items/useUpdateCartItem";
import { CartItem as CardItemType } from "@/types/api";
import { EDefaultValue } from "@/utils/constants/default-value.enum";
import { formatPrice } from "@/utils/formatPrice";
import { getTotalPrice } from "@/utils/getTotalPrice";
import Image from "next/image";
import React from "react";
import TrashIcon from "../icons/TrashIcon";

type Props = {
  data: CardItemType;
  canEdit?: boolean;
  onRemove?: (id?: number) => void;
};
const CartItem: React.FC<Props> = ({ data, canEdit = true, onRemove }) => {
  const { mutate: updateCartItem } = useUpdateCartItem();

  const [quantity, setQuantity] = React.useState<number>(1);

  const handleQuantityChange = (newQuantity: number) => {
    console.log("🚀 ~ handleQuantityChange ~ newQuantity:", newQuantity);
    setQuantity(newQuantity);

    if (data?.product?.id) {
      updateCartItem({
        productId: data.product.id,
        quantity: newQuantity,
      });
    }
  };

  React.useEffect(() => {
    setQuantity(data?.quantity || 1);
  }, [data?.quantity]);
  return (
    <tr>
      <td>
        <div className="shopping-cart__product-item">
          <Image
            loading="lazy"
            src={data?.product?.imgSrc || EDefaultValue.IMAGE}
            width="80"
            height="80"
            alt="image"
          />
        </div>
      </td>
      <td>
        <div className="shopping-cart__product-item__detail">
          <h4>{data?.product?.title}</h4>
          <ul className="shopping-cart__product-item__options">
            <li>Loại: {data?.product?.category?.name}</li>
            <li>Mã: {data?.product?.id}</li>
          </ul>
        </div>
      </td>
      <td>
        <span className="shopping-cart__product-price tw-font-semibold !tw-text-[#FF424E]">
          {formatPrice(data?.product?.price)}
        </span>
      </td>
      <td>
        {canEdit ? (
          <div className="tw-flex tw-w-fit tw-items-center tw-border tw-border-[#C8C8C8] tw-rounded ">
            <div
              onClick={
                quantity > 1
                  ? () => handleQuantityChange(quantity - 1)
                  : undefined
              }
              className="tw-w-[23px] hover:tw-cursor-pointer tw-text-center"
            >
              -
            </div>
            <input
              type="number"
              name="quantity"
              value={quantity}
              onChange={(e) => handleQuantityChange(+e.target.value || 1)}
              min={1}
              className="tw-border-l tw-border-r tw-border-[#C8C8C8] tw-outline-none tw-text-center no-spin tw-max-w-[32px] tw-flex-1"
            />

            <div
              onClick={() => handleQuantityChange(quantity + 1)}
              className="tw-w-[23px] hover:tw-cursor-pointer tw-text-center"
            >
              +
            </div>
          </div>
        ) : (
          <span className="shopping-cart__product-price">{data.quantity}</span>
        )}
      </td>
      <td>
        <span className="shopping-cart__subtotal !tw-text-[#FF424E] tw-font-semibold">
          {formatPrice(getTotalPrice(data?.product?.price, data?.quantity))}
        </span>
      </td>
      {onRemove && canEdit && (
        <td>
          <a className="remove-cart" onClick={() => onRemove(data?.id)}>
            <TrashIcon width={17} />
          </a>
        </td>
      )}
    </tr>
  );
};

export default CartItem;
