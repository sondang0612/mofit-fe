"use client";

import { useRemoveCartItem } from "@/hooks/react-query/cart-items/useRemoveCartItem";
import { useCart } from "@/hooks/react-query/cart/useCart";
import { useCreateOrder } from "@/hooks/react-query/orders/useCreateOrder";
import { useFetch } from "@/hooks/react-query/useFetch";
import { useUrlParams } from "@/hooks/useUrlParams";
import { Address as IAddress } from "@/types/api";
import { apiEndpoints } from "@/utils/constants/apiEndpoints";
import { EPaymentMethod, EShippingMethod } from "@/utils/constants/order.enum";
import { pathNames } from "@/utils/constants/paths";
import {
  EVnpayResponseCode,
  EVnpayTransactionNo,
  EVnpayTransactionStatus,
} from "@/utils/constants/vnpay.enum";
import { getSubTotal } from "@/utils/getSubTotal";
import { getTotal } from "@/utils/getTotal";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";
import AddressCart from "../otherPages/address/AddressCart";
import CardLayout from "./CardLayout";
import ListCartItems from "./ListCartItems";
import { formatPrice } from "@/utils/formatPrice";
import { getTotalPrice } from "@/utils/getTotalPrice";

const paymentMethods = [
  {
    id: "checkout_payment_method_1",
    value: EPaymentMethod.COD,
    label: "Thanh toán khi nhận hàng",
  },
  {
    id: "checkout_payment_method_2",
    value: EPaymentMethod.PAYMENT_GATEWAY,
    label: "Thanh toán bằng thẻ",
  },
];

export default function Checkout() {
  const router = useRouter();
  const { getParam } = useUrlParams();
  const { mutate: removeCartItem } = useRemoveCartItem();

  const txnRef = getParam("vnp_TxnRef");
  const transactionStatus = getParam("vnp_TransactionStatus");
  const responseCode = getParam("vnp_ResponseCode");
  const transactionNo = getParam("vnp_TransactionNo");

  const isSuccess = React.useMemo(() => {
    return (
      transactionStatus === EVnpayTransactionStatus.SUCCESS &&
      responseCode === EVnpayResponseCode.SUCCESS &&
      transactionNo !== EVnpayTransactionNo.FAIL
    );
  }, [
    transactionStatus === EVnpayTransactionStatus.SUCCESS &&
      responseCode === EVnpayResponseCode.SUCCESS &&
      transactionNo !== EVnpayTransactionNo.FAIL,
  ]);

  const { data: cart } = useCart();
  const { data: addresses } = useFetch<IAddress>({
    page: 1,
    endpoint: apiEndpoints.ADDRESSES,
    limit: 1,
  });
  const { mutate: createOrder } = useCreateOrder();

  const [paymentMethod, setPaymentMethod] = React.useState<EPaymentMethod>(
    EPaymentMethod.PAYMENT_GATEWAY
  );

  const subTotal = React.useMemo(() => {
    return getSubTotal(cart);
  }, [cart]);

  const checkValid = () => {
    if (addresses?.length === 0 || !addresses) {
      toast.error("Vui lòng chọn địa chỉ nhận hàng");
      return false;
    }

    if (cart?.length === 0 || !cart) {
      toast.error("Vui lòng thêm sản phẩm vào giỏ hàng");
      return false;
    }

    return true;
  };

  const handleCreateOrder = () => {
    const isValid = checkValid();

    if (!isValid) return;

    createOrder({
      addressId: addresses[0].id,
      cartItemIds: cart?.map((item) => item.id),
      discount: 0,
      vat: 0,
      paymentMethod,
      shippingMethod: EShippingMethod.OWN_DELIVERY,
      shippingPrice: 0,
      subTotal,
      totalPrice: getTotal(subTotal, 0, 0),
    });
  };

  React.useEffect(() => {
    if (isSuccess) {
      router.push(`${pathNames.SHOP_ORDER_COMPLETE}?txnRef=${txnRef}`);
    }
  }, [isSuccess]);

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
        // <div className="checkout__totals-wrapper">
        //   <div className="sticky-content">
        //     <div className="checkout__totals">
        //       <h3>Đơn hàng của bạn</h3>
        //       <table className="checkout-cart-items">
        //         <thead>
        //           <tr>
        //             <th>Sản phẩm</th>
        //             <th>Tạm tính</th>
        //           </tr>
        //         </thead>
        //         <tbody>
        //           {cart?.map((elm, i) => (
        //             <tr key={i}>
        //               <td style={{ width: "65%" }}>
        //                 {elm.product?.title} x {elm.quantity}
        //               </td>
        //               <td>
        //                 {formatPrice(
        //                   getTotalPrice(elm?.product?.price, elm?.quantity)
        //                 )}
        //               </td>
        //             </tr>
        //           ))}
        //         </tbody>
        //       </table>
        //       <table className="checkout-totals">
        //         <tbody>
        //           <tr>
        //             <th>Tổng phụ</th>
        //             <td>{formatPrice(subTotal)}</td>
        //           </tr>
        //           <tr>
        //             <th>Vận chuyển</th>
        //             <td>Free shipping</td>
        //           </tr>
        //           <tr>
        //             <th>VAT</th>
        //             <td>{formatPrice(0)}</td>
        //           </tr>
        //           <tr>
        //             <th>Tổng tiền</th>
        //             <td>{formatPrice(getTotal(subTotal, 0, 0))}</td>
        //           </tr>
        //         </tbody>
        //       </table>
        //     </div>
        //     <div className="checkout__totals">
        //       {addresses && addresses?.length > 0 && (
        //         <Address data={addresses[0]} />
        //       )}
        //       <span
        //         className="underline cursor-pointer text-blue-500"
        //         onClick={() =>
        //           router.push("/account_edit_address?redirect=shop_checkout")
        //         }
        //       >
        //         {addresses && addresses?.length > 0
        //           ? "Đặt lại địa chỉ mặc định"
        //           : "Thêm địa chỉ giao hàng"}
        //       </span>
        //     </div>
        //     <div className="checkout__payment-methods">
        //       {paymentMethods.map((method) => (
        //         <div className="form-check" key={method.id}>
        //           <input
        //             className="form-check-input form-check-input_fill"
        //             type="radio"
        //             name="checkout_payment_method"
        //             id={method.id}
        //             checked={paymentMethod === method.value}
        //             onChange={() => setPaymentMethod(method.value)}
        //             aria-label={method.label}
        //           />
        //           <label className="form-check-label" htmlFor={method.id}>
        //             {method.label}
        //           </label>
        //         </div>
        //       ))}
        //       <div className="policy-text">
        //         Your personal data will be used to process your order, support
        //         your experience throughout this website, and for other purposes
        //         described in our{" "}
        //         <Link href="/terms" target="_blank">
        //           privacy policy
        //         </Link>
        //         .
        //       </div>
        //     </div>
        //     <button
        //       className="btn btn-primary btn-checkout"
        //       onClick={handleCreateOrder}
        //     >
        //       {paymentMethod === EPaymentMethod.COD ? "Đặt hàng" : "Thanh toán"}
        //     </button>
        //   </div>
        // </div>
        <div className="tw-space-y-[12px]">
          <div className="tw-bg-white tw-px-4 tw-pt-2 tw-pb-4">
            <div>
              {addresses && addresses?.length > 0 && (
                <AddressCart data={addresses[0]} />
              )}
              {addresses && addresses?.length <= 0 && (
                <div
                  className="tw-mt-2 underline cursor-pointer text-blue-500"
                  onClick={() =>
                    router.push("/account_edit_address?redirect=shop_checkout")
                  }
                >
                  Thêm địa chỉ giao hàng
                </div>
              )}
            </div>
          </div>
          <div className="tw-bg-white tw-p-6">
            <div className="tw-space-y-2">
              <div className="tw-flex tw-justify-between tw-items-center">
                <div className="tw-text-[#808089]">Tạm tính</div>
                <div>{formatPrice(subTotal)}</div>
              </div>
              <div className="tw-flex tw-justify-between tw-items-center">
                <div className="tw-text-[#808089]">Vận chuyển</div>
                <div className="tw-text-[#00AB56]">{formatPrice(0)}</div>
              </div>
              <div className="tw-flex tw-justify-between tw-items-center">
                <div className="tw-text-[#808089]">VAT</div>
                <div className="tw-text-[#00AB56]">{formatPrice(0)}</div>
              </div>
            </div>
            <div className="tw-h-[1px] tw-w-full tw-bg-[#EBEBF0] tw-my-4"></div>
            <div className="tw-flex tw-items-center tw-justify-between tw-font-bold">
              <div className="tw-text-[#27272A]">Tổng tiền</div>
              <div className="tw-text-[#FF424E]">
                {formatPrice(getTotal(subTotal, 0, 0))}
              </div>
            </div>
            <div className="tw-mt-4">
              {paymentMethods.map((method) => (
                <div className="form-check !tw-mb-0" key={method.id}>
                  <input
                    className="form-check-input form-check-input_fill"
                    type="radio"
                    name="checkout_payment_method"
                    id={method.id}
                    checked={paymentMethod === method.value}
                    onChange={() => setPaymentMethod(method.value)}
                    aria-label={method.label}
                  />
                  <label className="form-check-label" htmlFor={method.id}>
                    {method.label}
                  </label>
                </div>
              ))}
            </div>
            <div className="tw-mt-4">
              <button
                onClick={handleCreateOrder}
                className="tw-bg-[#EC1A23] tw-h-[40px] tw-text-center w-full tw-text-white tw-rounded hover:tw-bg-red-600 tw-transition-al"
              >
                {paymentMethod === EPaymentMethod.COD
                  ? "Đặt hàng"
                  : "Thanh toán"}
              </button>
            </div>
          </div>
        </div>
      }
    />
  );
}
