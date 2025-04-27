import { CartItem as CartItemType } from "@/types/api";
import { EDefaultValue } from "@/utils/constants/default-value.enum";
import { formatPrice } from "@/utils/formatPrice";
import { getTotalPrice } from "@/utils/getTotalPrice";
import Image from "next/image";
import React from "react";
import TrashIcon from "../icons/TrashIcon";
import CartItem from "./CartItem";

interface Props {
  data?: CartItemType[] | undefined;
  canEdit?: boolean;
  onRemove?: (id?: number) => void;
}

const ListCartItems = (props: Props) => {
  const { data, canEdit = true, onRemove } = props;

  return (
    <table className="cart-table w-full">
      <thead>
        <tr>
          <th>Sản phẩm</th>
          <th></th>
          <th>Đơn giá</th>
          <th>Số lượng</th>
          <th>Thành tiền</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data?.map((elm, i) => (
          <CartItem data={elm} canEdit={canEdit} key={i} onRemove={onRemove} />
        ))}
      </tbody>
    </table>
  );
};

export default ListCartItems;
