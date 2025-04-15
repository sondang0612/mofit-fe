import React from "react";
import Image from "next/image";
import Link from "next/link";

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
  const order = mockOrder;
  return (
    <div className="container order-detail-page py-4">
      <div className="order-header mb-3">
        <div className="row align-items-start">
          <div className="col-md-7">
            <div className="d-flex align-items-center mb-2">
              <h4 className="mb-0 me-2">Mã đơn hàng: {order.id}</h4>
              <span className="text-secondary">
                ({order.items.length} sản phẩm/ {order.views} kiện)
              </span>
            </div>
            <div className="text-secondary">Ngày đặt: {order.createdAt}</div>
          </div>
          <div className="col-md-5">
            <div className="row">
              <div className="col-6 text-md-end">
                <div className="text-secondary mb-2">Hình thức thanh toán</div>
              </div>
              <div className="col-6">
                <div className="mb-2">{order.paymentMethod}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-md-7">
          <div className="order-address bg-white p-3 rounded shadow-sm h-100">
            <h5 className="mb-3">Địa chỉ nhận hàng</h5>
            <div className="d-flex align-items-start">
              <span className="address-badge me-2">{order.address.type}</span>
              <div>
                <div className="fw-medium">
                  {order.address.name} - {order.address.phone}
                </div>
                <div className="text-secondary">{order.address.detail}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="order-delivery bg-white p-3 rounded shadow-sm h-100">
            <div className="d-flex mb-2">
              <h5 className="mb-0 me-2">Kiện 1/1</h5>
              <span className="delivery-status badge bg-success">
                Giao: {order.deliveryDate}
              </span>
              <span className="ms-auto text-success">{order.status}</span>
            </div>

            <div className="order-timeline mt-4">
              {order.timeline.map((step, index) => (
                <div
                  key={index}
                  className={`order-timeline-step ${
                    step.completed ? "completed" : ""
                  } ${index === order.timeline.length - 1 ? "last" : ""}`}
                >
                  <div className="timeline-icon-container">
                    <div className="timeline-icon"></div>
                  </div>
                  <div className="timeline-content">
                    <div className="fw-medium">{step.status}</div>
                    <div className="text-secondary small">{step.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="order-products bg-white rounded shadow-sm mb-4">
        {order.items.map((item, index) => (
          <div key={index} className="order-product-item p-3 border-bottom">
            <div className="row align-items-center">
              <div className="col-md-8">
                <div className="d-flex">
                  <div className="position-relative me-3">
                    <Image
                      src={item.imgSrc}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="rounded border"
                    />
                    {item.discount && (
                      <div className="product-discount-badge">
                        -{item.discount}
                      </div>
                    )}
                  </div>
                  <div>
                    <div className="text-secondary small mb-1">
                      {item.brand}
                    </div>
                    <h6 className="mb-1">{item.title}</h6>
                    <div className="text-secondary small">
                      {item.size && <span className="me-2">{item.size}</span>}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-2 text-md-center">
                <div className="text-secondary small d-md-none mt-2">
                  Số lượng
                </div>
                <div>{item.quantity}</div>
              </div>
              <div className="col-6 col-md-2 text-end">
                <div className="text-secondary small d-md-none mt-2">
                  Đơn giá
                </div>
                <div className="fw-medium">{item.price.toLocaleString()}₫</div>
              </div>
            </div>
          </div>
        ))}

        <div className="order-summary p-3">
          <div className="row justify-content-end">
            <div className="col-md-4">
              <div className="d-flex justify-content-between mb-2">
                <span>Tạm tính ({order.items.length})</span>
                <span>{order.total.toLocaleString()}₫</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Giảm giá</span>
                <span>-{order.discount}₫</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Phí vận chuyển</span>
                <span>{order.shippingFee}₫</span>
              </div>
              <div className="d-flex justify-content-between total-amount">
                <span>Thành tiền (Đã VAT)</span>
                <span className="text-danger fw-bold">
                  {order.total.toLocaleString()}₫
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-4">
        <Link href="/account_orders" className="btn btn-outline-secondary me-2">
          <i className="fa fa-arrow-left me-2"></i>
          Quay lại
        </Link>
        <button className="btn btn-primary px-4">Mua lại</button>
      </div>
    </div>
  );
};

export default AccountOrderDetail;
