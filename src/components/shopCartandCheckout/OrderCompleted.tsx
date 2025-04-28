"use client";

import { QueryParam, useFetch } from "@/hooks/react-query/useFetch";
import { useUrlParams } from "@/hooks/useUrlParams";
import { Order } from "@/types/api";
import { apiEndpoints } from "@/utils/constants/apiEndpoints";
import { formatPrice } from "@/utils/formatPrice";
import Link from "next/link";
import { useRouter } from "next/navigation";

const paymentMethodTxt = {
  payment_gateway: "Chuyển khoản ngân hàng",
  cod: "Thanh toán tiền mặt",
};

// Loading skeleton component
const OrderSkeleton = () => {
  return (
    <div className="tw-max-w-lg tw-mt-16 tw-mx-auto tw-bg-white tw-rounded-2xl tw-shadow-sm tw-overflow-hidden">
      <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-py-10 tw-px-6">
        <div className="tw-bg-gray-200 tw-rounded-full tw-p-4 tw-mb-4 tw-animate-pulse">
          <div className="tw-w-10 tw-h-10"></div>
        </div>
        <div className="tw-bg-gray-200 tw-h-8 tw-w-2/3 tw-rounded tw-mb-6 tw-animate-pulse"></div>

        <div className="tw-w-full">
          {[1, 2, 3].map((item) => (
            <div key={item} className="tw-flex tw-justify-between tw-py-3">
              <div className="tw-bg-gray-200 tw-h-6 tw-w-1/3 tw-rounded tw-animate-pulse"></div>
              <div className="tw-bg-gray-200 tw-h-6 tw-w-1/4 tw-rounded tw-animate-pulse"></div>
            </div>
          ))}

          <div className="tw-border-b tw-border-dashed tw-my-2"></div>

          {[1, 2].map((item) => (
            <div key={item} className="tw-flex tw-justify-between tw-py-3">
              <div className="tw-bg-gray-200 tw-h-6 tw-w-1/3 tw-rounded tw-animate-pulse"></div>
              <div className="tw-bg-gray-200 tw-h-6 tw-w-1/4 tw-rounded tw-animate-pulse"></div>
            </div>
          ))}
        </div>

        <div className="tw-w-full tw-mt-6">
          <div className="tw-bg-gray-200 tw-h-12 tw-w-full tw-rounded-md tw-animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default function OrderCompleted() {
  const { getParam } = useUrlParams();
  const txnRef = getParam("txnRef");
  const orderId = getParam("orderId");
  const router = useRouter();

  const { data: orders, isLoading } = useFetch<Order>({
    endpoint: apiEndpoints.ORDERS,
    limit: 1,
    queryParams: [QueryParam.ORDER_ID, QueryParam.TXN_REF],
    queryValues: [orderId, txnRef],
    enabled: !!txnRef || !!orderId,
  });

  if (!txnRef && !orderId) {
    return <div>Shop now</div>;
  }

  const order = orders[0];

  if (isLoading) {
    return <OrderSkeleton />;
  }

  return (
    <div className="tw-max-w-lg tw-mt-16 tw-mx-auto tw-bg-white tw-rounded-2xl tw-shadow-sm tw-overflow-hidden">
      <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-py-10 tw-px-6">
        <div className="tw-bg-green-100 tw-rounded-full tw-p-4 tw-mb-4">
          <svg
            className="tw-w-10 tw-h-10 tw-text-green-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <h2 className="tw-text-2xl tw-font-medium tw-text-gray-800 tw-mb-6">
          Đặt hàng thành công
        </h2>

        <div className="tw-w-full">
          <div className="tw-flex tw-justify-between tw-py-3">
            <span className="tw-text-gray-500">Mã đơn hàng</span>
            <span className="tw-font-medium tw-text-gray-800">{order?.id}</span>
          </div>

          <div className="tw-flex tw-justify-between tw-py-3">
            <span className="tw-text-gray-500">Ngày đặt hàng</span>
            <span className="tw-font-medium tw-text-gray-800">
              {new Date(order?.createdAt || new Date())
                .toLocaleDateString("vi-VN", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                })
                .replace(",", "")}
            </span>
          </div>

          <div className="tw-flex tw-justify-between tw-py-3">
            <span className="tw-text-gray-500">Phương thức thanh toán</span>
            <div className="tw-flex tw-items-center">
              {order?.paymentMethod === "payment_gateway" && (
                <img
                  src="/assets/images/vn-pay.png"
                  alt="VNPAY"
                  className="tw-w-[21px] tw-mr-2"
                />
              )}
              <span className="tw-font-medium tw-text-gray-800">
                {paymentMethodTxt[
                  order?.paymentMethod as "payment_gateway" | "cod"
                ] || "VNPAY"}
              </span>
            </div>
          </div>

          <div className="tw-border-b tw-border-dashed"></div>

          <div className="tw-flex tw-justify-between tw-py-3">
            <span className="tw-text-gray-500">VAT</span>
            <span className="tw-font-medium tw-text-gray-800">
              {formatPrice(order?.vat || 0)}
            </span>
          </div>

          <div className="tw-flex tw-justify-between tw-py-3">
            <span className="tw-text-gray-500 tw-text-lg">Tổng cộng</span>
            <span className="tw-font-bold tw-text-gray-800 tw-text-lg">
              {formatPrice(order?.totalPrice || 0)}
            </span>
          </div>
        </div>

        <div className="tw-w-full tw-mt-6">
          <button
            onClick={() => router.push(`/account_orders/${orderId}`)}
            className="tw-w-full tw-bg-black tw-text-white tw-py-3 tw-rounded-md tw-font-medium tw-flex tw-items-center tw-justify-center tw-transition-colors hover:tw-bg-gray-800 "
          >
            Xem đơn hàng
          </button>
        </div>
      </div>
    </div>
  );
}
