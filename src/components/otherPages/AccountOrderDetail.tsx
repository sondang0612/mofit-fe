"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useOrder } from "@/hooks/react-query/orders/useOrder";
import { useParams } from "next/navigation";
import {
  EOrderStatus,
  EOrderStatusLabel,
  EPaymentMethod,
  EPaymentMethodLabel,
  EPaymentStatus,
  EPaymentStatusLabel,
} from "@/utils/constants/order.enum";
import { formatPrice } from "@/utils/formatPrice";
import { useOrderTimeLine } from "@/hooks/react-query/orders/useOrderTimeLine";
import { formatDate } from "@/utils/constants/formatDate";
import { time } from "console";
import Spinner from "../loading/Spinner";
import OrderTimeline from "../timeline/OrderTimeline";
import { useCancelOrder } from "@/hooks/react-query/orders/useCancelOrder";

const AccountOrderDetail = () => {
  // const order = mockOrder;
  const { id } = useParams();
  const { data, isLoading } = useOrder({ id: Number(id) });
  const { data: timeline } = useOrderTimeLine({ id: Number(id) });
  const { mutate: cancelOrder } = useCancelOrder();

  return (
    <div
      className={`container col-lg-9 bg-white order-detail-page py-4 tw-text-text  ${
        data?.status === EOrderStatus.CANCELED &&
        "tw-opacity-60 tw-cursor-not-allowed"
      }`}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div
            className={`tw-flex tw-flex-col lg:tw-flex-row tw-gap-y-4 tw-pb-[40px] tw-border-b tw-border-dashed tw-border-[#D9D9D9]`}
          >
            <div className="tw-w-full lg:tw-w-[55%] tw-relative">
              <div className="">
                Mã đơn hàng:{" "}
                <span className="tw-font-bold tw-text-textBlack">
                  #{data?.id}
                </span>{" "}
                {`(${data?.cart?.reduce(
                  (acc, item) => acc + (item.quantity || 0),
                  0
                )} sản phẩm/ ${data?.cart?.length} kiện)`}
              </div>
              <div className="">
                Ngày đặt:{" "}
                <span className="tw-text-textBlack">
                  {formatDate(timeline?.pending || "", "DD/MM/YYYY, HH:mm")}
                </span>
              </div>
              <div className="tw-mt-4">
                <div className="tw-font-bold tw-text-textBlack">
                  Địa chỉ nhận hàng
                </div>
                <div className="tw-mt-2 tw-text-textBlack">
                  {data?.address?.lastName} {data?.address?.firstName} -{" "}
                  {data?.address?.phoneNumber}
                </div>
                <div>
                  {data?.address?.district}, {data?.address?.city},{" "}
                  {data?.address?.streetAddress}
                </div>
              </div>
            </div>
            <div className="tw-flex-1 lg:tw-pl-4 tw-pl-0 lg:tw-border-l tw-border-none">
              <div className="tw-flex tw-ítems-center tw-justify-between">
                <div className="tw-font-bold">Hình thức thanh toán</div>
                <div className="tw-text-[#1890FF] tw-bg-[#F0F8FF] tw-px-2 tw-rounded-md tw-py-1">
                  {EPaymentMethodLabel[data?.paymentMethod as EPaymentMethod]}
                </div>
              </div>
              <div className="tw-flex tw-ítems-center tw-justify-between tw-mt-4">
                <div>Tạm tính (1)</div>
                <div>{formatPrice(data?.totalPrice)}</div>
              </div>
              <div className="tw-flex tw-ítems-center tw-justify-between tw-mt-4">
                <div>Giảm giá</div>
                <div>{formatPrice(data?.discount, "-")}</div>
              </div>
              <div className="tw-flex tw-ítems-center tw-justify-between tw-mt-4">
                <div>Phí vận chuyển</div>
                <div>{formatPrice(data?.shippingPrice)}</div>
              </div>
              <div className="tw-flex tw-ítems-center tw-justify-between tw-mt-4">
                <div>Thành tiền (Đã VAT)</div>
                <div className="tw-text-red-500 tw-text-lg tw-font-bold">
                  {formatPrice(data?.subTotal)}
                </div>
              </div>
              {(data?.payment?.status === EPaymentStatus.REFUNDING ||
                data?.payment?.status === EPaymentStatus.REFUNDED) && (
                <div className="tw-flex tw-ítems-center tw-justify-between tw-mt-4">
                  <div>Trạng thái hoàn tiền</div>
                  <div className="tw-text-sm">
                    {
                      EPaymentStatusLabel[
                        data?.payment?.status as EPaymentStatus
                      ]
                    }
                  </div>
                </div>
              )}
              {data?.canCancel && (
                <div className="tw-flex tw-items-center tw-justify-end tw-mt-2">
                  <div
                    className="tw-text-white tw-cursor-pointer tw-text-sm tw-bg-red-500 tw-rounded-sm tw-w-fit tw-px-3 tw-py-2 hover:tw-bg-red-400"
                    onClick={() => cancelOrder({ orderId: data?.id })}
                  >
                    Huỷ đơn
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="tw-py-4">
            <div className="tw-flex tw-items-center tw-gap-2">
              <div>Kiện 1/1</div>
              {data?.status === EOrderStatus.SHIPPED && timeline?.shipped && (
                <div className=" tw-border-l tw-pl-2">
                  Giao:{" "}
                  <span className="tw-text-primary tw-font-bold">
                    {formatDate(timeline?.shipped)}
                  </span>
                </div>
              )}

              <div
                className={`${
                  data?.status === EOrderStatus.CANCELED
                    ? "tw-text-red-500"
                    : "tw-text-primary"
                } tw-border-l tw-pl-2`}
              >
                {
                  EOrderStatusLabel[
                    data?.status as keyof typeof EOrderStatusLabel
                  ]
                }
              </div>
            </div>
            <div className="tw-mt-4">
              {data?.cart?.map((item, index) => (
                <div
                  key={index}
                  className="tw-flex tw-items-center tw-justify-between"
                >
                  <div className="tw-flex tw-gap-2 tw-max-w-[70%]">
                    <Image
                      width={80}
                      height={80}
                      src={item?.product?.images?.cover || ""}
                      alt={item?.product?.title || "Product"}
                      className="tw-border tw-mr-3"
                    />
                    <div>
                      <div className="tw-text-textBlack">
                        {item?.product?.title}
                      </div>
                      <div className="tw-line-clamp-1">
                        {item?.product?.shortDescription}
                      </div>
                    </div>
                  </div>
                  <div>
                    {item.quantity}{" "}
                    <span className="tw-px-2 tw-font-bold">X</span>
                    <span className="tw-font-bold tw-text-textBlack">
                      {formatPrice(item?.product?.price)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="tw-mt-8">
            <OrderTimeline
              timeline={timeline as any}
              currentStatus={data?.status}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default AccountOrderDetail;
