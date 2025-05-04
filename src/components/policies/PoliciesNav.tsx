"use client";
import { pathNames } from "@/utils/constants/paths";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const data = [
  { label: "Chính sách thanh toán", pathName: pathNames.PAYMENT_POLICY },
  { label: "Chính sách xử lý khiếu nại", pathName: pathNames.COMPLAINT_POLICY },
  {
    label: "Chính sách vận chuyển vào giao nhận",
    pathName: pathNames.SHIPPING_AND_DELIVERY_POLICY,
  },
  {
    label: "Chính sách đổi trả và hoàn tiền",
    pathName: pathNames.RETURN_AND_REFUND_POLICY,
  },
  { label: "Chính sách kiểm hàng", pathName: pathNames.INSPECTION_POLICY },
  { label: "Chính sách bảo mật thông tin", pathName: pathNames.PRIVATE_POLICY },
  {
    label: "Hướng dẫn thanh toán VNPAY",
    pathName: pathNames.VNPAY_PAYMENT_INSTRUCTION,
  },
];

export default function PoliciesNav() {
  const [isOpen, setIsOpen] = useState(true);

  const pathName = usePathname();
  const router = useRouter();
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="tw-w-full">
        <button
          onClick={toggleAccordion}
          className="tw-w-full tw-flex tw-justify-between tw-items-center tw-bg-white tw-px-4 tw-py-3 tw-font-semibold tw-text-left tw-rounded-md tw-transition"
        >
          <span className="tw-text-sm tw-font-bold">
            Chính Sách Và Quy Định
          </span>
          <svg
            className={`tw-w-5 tw-h-5 tw-transform tw-transition-transform ${
              isOpen ? "tw-rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        <div
          className={`tw-overflow-hidden tw-transition-all tw-duration-300 tw-ease-linear ${
            isOpen ? "tw-max-h-[500px]" : "tw-max-h-0"
          } tw-bg-white tw-border tw-rounded-b-md tw-shadow tw-space-y-2 tw-flex tw-gap-4 tw-px-4 tw-flex-col tw-rounded-md tw-border-none`}
        >
          {data.map((item, index) => (
            <Link
              href={item.pathName}
              key={item.pathName}
              className={`tw-block tw-text-gray-700 !tw-mt-0 hover:tw-text-red-500 tw-pt-4 ${
                index === 0 && "tw-pt-4"
              } ${index === data.length - 1 && "tw-pb-4"} ${
                pathName === item.pathName && "tw-text-red-500"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
