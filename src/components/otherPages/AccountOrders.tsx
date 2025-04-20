"use client";
import { QueryParam, QueryValue, useFetch } from "@/hooks/react-query/useFetch";
import { Order as IOrder } from "@/types/api";
import { ITEMS_PER_PAGE } from "@/utils/constants";
import { apiEndpoints } from "@/utils/constants/apiEndpoints";
import { EDefaultValue } from "@/utils/constants/default-value.enum";
import { EOrderStatus, EOrderStatusLabel } from "@/utils/constants/order.enum";
import { pathNames } from "@/utils/constants/paths";
import { formatPrice } from "@/utils/formatPrice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Spinner from "../loading/Spinner";
import Pagination from "../shoplist/Pagination";

const orderStatusTabs = [
  { key: "", label: "Tất cả đơn" },
  { key: EOrderStatus.PENDING, label: "Chờ thanh toán" },
  { key: EOrderStatus.PROCESSING, label: "Đang xử lý" },
  { key: EOrderStatus.DELIVERED, label: "Đang vận chuyển" },
  { key: EOrderStatus.SHIPPED, label: "Đã giao" },
  { key: EOrderStatus.CANCELED, label: "Đã huỷ" },
  { key: EOrderStatus.DRAFT, label: "Đơn nháp" },
];

const AccountOrders = () => {
  const [page, setPage] = React.useState(1);
  const [activeStatus, setActiveStatus] = React.useState("");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [queryText, setQueryText] = React.useState("");
  // const { data: orderTimeline } = useOrderTimeLine({ id: 1 });
  // const { data: order } = useOrder({ id: 1 });
  const router = useRouter();

  const {
    data: orders,
    isFetching,
    totalElements,
  } = useFetch<IOrder>({
    page: page,
    endpoint: `${apiEndpoints.ORDERS}`,
    limit: ITEMS_PER_PAGE,
    queryParams: [
      QueryParam.SORT_BY,
      QueryParam.SORT,
      ...(activeStatus ? [QueryParam.STATUS] : []),
      ...(queryText ? [QueryParam.ORDER_PRODUCT_TITLE] : []),
    ],
    queryValues: [
      QueryValue.CREATED_AT,
      QueryValue.DESC,
      ...(activeStatus ? [activeStatus] : []),
      ...(queryText ? [queryText] : []),
    ],
  });

  const handleTabChange = (status: string) => {
    setActiveStatus(status);
    setPage(1);
    setQueryText("");
  };

  const onPageChange = (page: number) => {
    setPage(page);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setQueryText(searchTerm);
  };

  return (
    <div className="col-lg-9">
      <div className="page-content my-account__order">
        <div
          className="mb-3"
          style={{
            fontSize: "19px",
          }}
        >
          Đơn hàng của tôi
        </div>

        {/* Order status tabs */}
        <div className="order-tabs mb-3">
          <ul className="nav nav-tabs border-0">
            {orderStatusTabs.map((tab) => (
              <li className="nav-item" key={tab.key}>
                <a
                  className={`nav-link ${activeStatus === tab.key ? "active" : ""
                    }`}
                  onClick={() => handleTabChange(tab.key)}
                >
                  {tab.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Search box */}
        <div className="order-search mb-4">
          <form onSubmit={handleSearch} className="position-relative">
            <input
              type="text"
              className="form-control"
              placeholder="Tìm đơn hàng tên sản phẩm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="btn btn-primary position-absolute order-search-btn"
            >
              Tìm đơn hàng
            </button>
          </form>
        </div>

        {/* Orders list */}
        {isFetching ? (
          <Spinner />
        ) : orders && orders.length > 0 ? (
          <div className="orders-list">
            <div className="order-items">
              {orders.map((order) => (
                <div key={order.id} className="order-item ">
                  <div className="order-item-status fw-medium mb-4">
                    {EOrderStatusLabel?.[
                      order.status as keyof typeof EOrderStatusLabel
                    ] ?? order.status}
                  </div>
                  {order.orderItems &&
                    order.orderItems.map((item, index) => (
                      <div
                        key={index}
                        className="order-product-item d-flex mb-3"
                      >
                        <div className="order-product-image me-3">
                          <Image
                            width={80}
                            height={80}
                            src={item.product?.imgSrc || EDefaultValue.IMAGE}
                            alt={item.product?.title || "Product"}
                            className="border"
                          />
                        </div>
                        <div className="order-product-details flex-grow-1">
                          <div className="mb-1">{item.product?.title}</div>
                          <p className="text-muted mb-1">x{item.quantity}</p>
                        </div>
                        <div className="order-product-price text-end">
                          <div className="fw-bold">
                            {formatPrice(item.product?.price || 0)}
                          </div>
                        </div>
                      </div>
                    ))}

                  <div className="order-summary">
                    <div className="">
                      <div className="order-total">
                        Tổng tiền:{" "}
                        <span className="text-danger fw-bold">
                          {formatPrice(
                            order?.orderItems?.reduce(
                              (sum, order) =>
                                sum +
                                +(
                                  +(order?.product?.price || 0) *
                                  (order?.quantity || 1) || 0
                                ),
                              0
                            )
                          )}
                        </span>
                      </div>
                      <div className="order-actions">
                        <button className="btn btn-sm btn-outline-primary me-2 tw-rounded">
                          Mua lại
                        </button>
                        <button
                          className="btn btn-sm btn-primary tw-rounded"
                          onClick={() =>
                            router.push(
                              `${pathNames.ORDER_DETAIL.replace(
                                ":id",
                                String(order.id)
                              )}`
                            )
                          }
                        >
                          Xem chi tiết
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Pagination
              totalItems={totalElements || 0}
              onChange={onPageChange}
            />
          </div>
        ) : (
          <div className="text-center py-5">
            <p>Không có đơn hàng nào</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountOrders;
