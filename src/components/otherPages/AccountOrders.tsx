"use client";
import { QueryParam, QueryValue, useFetch } from "@/hooks/react-query/useFetch";
import { Order as IOrder, OrderItem } from "@/types/api";
import { ITEMS_PER_PAGE } from "@/utils/constants";
import { apiEndpoints } from "@/utils/constants/apiEndpoints";
import { EDefaultValue } from "@/utils/constants/default-value.enum";
import {
  EOrderStatus,
  EOrderStatusLabel,
  EPaymentMethod,
  EPaymentMethodLabel,
} from "@/utils/constants/order.enum";
import { formatPrice } from "@/utils/formatPrice";
import Image from "next/image";
import React from "react";
import Pagination from "../shoplist/Pagination";
import Link from "next/link";

const orderStatusTabs = [
  { key: "all", label: "Tất cả đơn" },
  { key: "pending", label: "Chờ thanh toán" },
  { key: "processing", label: "Đang xử lý" },
  { key: "shipped", label: "Đang vận chuyển" },
  { key: "delivered", label: "Đã giao" },
  { key: "canceled", label: "Đã huỷ" },
];

const translateStatus = {
  draft: "Đơn nháp",
  pending: "Đang xử lý",
  processing: "Đang giao",
  shipped: "Giao hàng thành công",
  delivered: "Đã giao",
  canceled: "Đã huỷ",
};

const AccountOrders = () => {
  const [page, setPage] = React.useState(1);
  const [activeStatus, setActiveStatus] = React.useState("all");
  const [searchTerm, setSearchTerm] = React.useState("");
  const [queryText, setQueryText] = React.useState("");

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
      QueryParam.STATUS,
      QueryParam.QUERY_TEXT,
    ],
    queryValues: [
      QueryValue.CREATED_AT,
      QueryValue.DESC,
      activeStatus,
      queryText,
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
                  className={`nav-link ${
                    activeStatus === tab.key ? "active" : ""
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
              placeholder="Tìm đơn hàng theo Mã đơn hàng hoặc Tên sản phẩm"
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
          <div className="text-center py-5">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : orders && orders.length > 0 ? (
          <div className="orders-list">
            <div className="order-items">
              {orders.map((order) => (
                <div key={order.id} className="order-item ">
                  <div className="order-item-status fw-medium mb-4">
                    {translateStatus?.[order.status]}
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
                </div>
              ))}
            </div>

            <div className="order-summary">
              <div className="">
                <div className="order-total">
                  Tổng tiền:{" "}
                  <span className="text-danger fw-bold">
                    {formatPrice(
                      orders.reduce(
                        (sum, order) => sum + +(order.totalPrice || 0),
                        0
                      )
                    )}
                  </span>
                </div>
                <div className="order-actions">
                  <button className="btn btn-sm btn-outline-primary me-2">
                    Mua lại
                  </button>
                  <button className="btn btn-sm btn-primary">
                    Xem chi tiết
                  </button>
                </div>
              </div>
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
