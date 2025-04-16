"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useOrder } from "@/hooks/react-query/orders/useOrder";
import { useParams } from "next/navigation";
import {
  EOrderStatus,
  EOrderStatusLabel,
  EPaymentMethodLabel,
} from "@/utils/constants/order.enum";
import { formatPrice } from "@/utils/formatPrice";
import { useOrderTimeLine } from "@/hooks/react-query/orders/useOrderTimeLine";
import { formatDate } from "@/utils/constants/formatDate";
import { time } from "console";
import Spinner from "../loading/Spinner";
import OrderTimeline from "../timeline/OrderTimeline";

const mockOrder = {
  id: "#250406517",
  views: 1,
  status: "Thành công",
  createdAt: "06/04/2025, 10:49",
  deliveryDate: "06/04/2025 13:00 (2h)",
  paymentMethod: "Thanh toán khi nhận hàng",
  shippingFee: 0,
  discount: 0,
  address: {
    type: "Nhà riêng",
    name: "Tiên Mai",
    phone: "0792756317",
    detail: "3 Đường 546, Phường Phước Long A, Quận 9, Hồ Chí Minh",
  },
  items: [
    {
      id: 1,
      title: "Sữa Chống Nắng Bioré Trang Điểm Mỏng Nhẹ, Mịn Lì 30ml",
      brand: "Bioré",
      imgSrc: "/assets/images/products/product-1-1.jpg",
      price: 94000,
      quantity: 1,
      size: "30ml",
      discount: "18%",
    },
  ],
  total: 94000,
  timeline: [
    { status: "Đặt hàng", time: "10:49 06/04/2025", completed: true },
    { status: "Đang xử lý", time: "10:50 06/04/2025", completed: true },
    { status: "Sẵn sàng giao", time: "10:50 06/04/2025", completed: true },
    { status: "Đang giao", time: "10:50 06/04/2025", completed: true },
    { status: "Giao thành công", time: "19:50 06/04/2025", completed: true },
  ],
};

const AccountOrderDetail = () => {
  // const order = mockOrder;
  const { id } = useParams();
  const { data, isLoading } = useOrder({ id: Number(id) });
  const { data: timeline } = useOrderTimeLine({ id: Number(id) });
  console.log("data", data);
  console.log("timeline", timeline);
  return (
    <div className="container col-lg-9 bg-white order-detail-page py-4 tw-text-text">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="tw-flex tw-flex-col lg:tw-flex-row tw-gap-y-4 tw-pb-[40px] tw-border-b tw-border-dashed tw-border-[#D9D9D9]">
            <div className="tw-w-full lg:tw-w-[55%]">
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
                  Thanh toán khi nhận hàng
                </div>
              </div>
              <div className="tw-flex tw-ítems-center tw-justify-between tw-mt-4">
                <div>Tạm tính (1)</div>
                <div>{formatPrice(data?.totalPrice)}</div>
              </div>
              <div className="tw-flex tw-ítems-center tw-justify-between tw-mt-4">
                <div>Giảm giá</div>
                <div>-{formatPrice(data?.discount)}</div>
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

              <div className="tw-text-primary tw-border-l tw-pl-2">
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
                      src={item?.product?.imgSrc || ""}
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
            <OrderTimeline timeline={timeline as any} />
          </div>
        </>
      )}
    </div>
  );
};

export default AccountOrderDetail;
