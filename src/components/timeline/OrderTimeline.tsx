import React from "react";
import { EOrderStatus } from "@/utils/constants/order.enum";
import { formatDate } from "@/utils/constants/formatDate";

type OrderStatusStep = {
  status: string;
  label: string;
  icon: string;
  timestamp?: string;
};

interface OrderTimelineProps {
  currentStatus?: EOrderStatus;
  steps?: OrderStatusStep[];
  timeline: { [key in EOrderStatus]: string };
}

const defaultSteps: OrderStatusStep[] = [
  {
    status: EOrderStatus.PENDING,
    label: "Đặt hàng",
    icon: "pending",
  },
  {
    status: EOrderStatus.PROCESSING,
    label: "Đang xử lý",
    icon: "processing",
  },
  {
    status: EOrderStatus.DELIVERED,
    label: "Đang vận chuyển",
    icon: "delivered",
  },
  {
    status: EOrderStatus.SHIPPED,
    label: "Giao thành công",
    icon: "shipped",
  },
];

const OrderTimeline: React.FC<OrderTimelineProps> = ({
  currentStatus = EOrderStatus.PENDING,
  steps = defaultSteps,
  timeline,
}) => {
  // Determine which steps are completed based on currentStatus
  const getStepStatus = (stepStatus: string) => {
    const statusOrder: EOrderStatus[] = [
      EOrderStatus.PENDING,
      EOrderStatus.PROCESSING,
      EOrderStatus.DELIVERED,
      EOrderStatus.SHIPPED,
    ];

    const currentIndex = statusOrder.indexOf(currentStatus);
    const stepIndex = statusOrder.indexOf(stepStatus as EOrderStatus);

    if (currentIndex === -1 || stepIndex === -1) return "inactive";

    return stepIndex <= currentIndex ? "active" : "inactive";
  };

  return (
    <div className="order-timeline mt-4">
      <div className="timeline-container d-flex justify-content-between align-items-start position-relative">
        <div
          className="timeline-line position-absolute"
          style={{
            top: "2.25rem",
            left: 0,
            right: 0,
            height: "3px",
            backgroundColor: "#EBEBEB",
            zIndex: 0,
          }}
        ></div>

        {steps.map((step, index) => (
          <div
            key={index}
            className="timeline-step text-center position-relative"
            style={{ flex: 1 }}
          >
            <div className="icon-container mb-2">
              <div
                className={`icon-circle d-inline-flex align-items-center justify-content-center rounded-circle ${
                  getStepStatus(step.status) === "active"
                    ? "bg-white"
                    : "bg-white"
                }`}
                style={{
                  width: "4.375rem",
                  height: "4.375rem",

                  backgroundColor: "#fff",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <img
                  src={`/assets/images/order/${step.icon}.svg`}
                  alt={step.label}
                  style={{
                    width: "4.375rem",
                    height: "4.375rem",
                    opacity: getStepStatus(step.status) === "active" ? 1 : 0.5,
                  }}
                />
              </div>
            </div>

            <div className="step-label">
              <div
                className={` ${
                  getStepStatus(step.status) === "active"
                    ? "fw-bold tw-text-textBlack"
                    : "text-muted"
                }`}
              >
                {step.label}
              </div>
              {timeline?.[step.status as EOrderStatus] && (
                <div className="mb-1">
                  {formatDate(
                    timeline?.[step.status as EOrderStatus],
                    "HH:mm DD/MM/YYYY"
                  )}
                </div>
              )}

              {step.timestamp && (
                <div className="timestamp small text-muted">
                  {step.timestamp}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderTimeline;
