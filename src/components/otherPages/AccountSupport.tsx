import React from "react";
import Link from "next/link";
import Image from "next/image";

const AccountSupport = () => {
  return (
    <div className="col-lg-9 py-2 bg-white">
      {/* Main Title */}
      <div className="mb-4">Hỗ trợ khách hàng</div>

      {/* Support Options */}
      <div className="row mb-4">
        {/* Hotline */}
        <div className="col-md-4 mb-2 mb-md-0">
          <div className="bg-gray-100 p-3 h-100 rounded d-flex flex-column align-items-center justify-content-end rounded-4">
            <div className="text-secondary mb-1 fw-medium">Hotline</div>
            <div className="fw-bold mb-1">1900-6035</div>
            <p className="text-muted small mb-0">
              1000 đ/phút, 8h-21h kể cả thứ 7, CN
            </p>
          </div>
        </div>

        {/* Chat Support */}
        <div className="col-md-4 mb-2 mb-md-0">
          <div className="bg-gray-100 p-3 h-100 rounded text-center">
            <div className="mb-1">
              <Image
                src="/assets/images/agent.png"
                alt="Support Staff"
                width={40}
                height={43}
                className="rounded-circle"
              />
            </div>
            <div className="mb-2">Gặp Trợ lý cá nhân</div>
            <button
              className="btn btn-primary btn-sm rounded-3 bg-blue-500 px-4"
              style={{ outline: "none", border: "none" }}
            >
              Chat ngay
            </button>
            <p className="text-muted small mt-1 mb-0">8h-21h kể cả thứ 7, CN</p>
          </div>
        </div>

        {/* Submit Request */}
        <div className="col-md-4 mb-2 mb-md-0">
          <div className="bg-gray-100 p-3 h-100 rounded d-flex flex-column align-items-center justify-content-end rounded-4">
            <div className="mb-2 fw-bold">Gửi yêu cầu hỗ trợ</div>
            <button
              className="btn btn-primary btn-sm rounded-3 bg-blue-500 px-4"
              style={{ outline: "none", border: "none" }}
            >
              Tạo đơn yêu cầu
            </button>
            <p className="text-muted small mb-0 mt-2">
              Hoặc email đến hotro@tiki.vn
            </p>
          </div>
        </div>
      </div>

      {/* Information Lookup Section */}
      <div className="mb-4">Tra cứu thông tin</div>

      <div className="row">
        {/* Order and Payment */}
        <div className="col-md-6 mb-4">
          <div className=" p-3 h-100">
            <div className="fw-medium mb-2">Đơn hàng và thanh toán</div>
            <p className="text-secondary mb-3">
              Cách tra cứu đơn hàng, sử dụng mã giảm giá và các phương thức
              thanh toán...
            </p>
            <Link href="#" className="text-blue-500 fw-medium">
              Xem chi tiết
            </Link>
          </div>
        </div>

        {/* Account */}
        <div className="col-md-6 mb-4">
          <div className=" p-3 h-100">
            <div className="fw-medium mb-2">Tài khoản của tôi</div>
            <p className="text-secondary mb-3">
              Cách đăng ký tài khoản tại Tiki, chỉnh sửa thông tin cá nhân, theo
              dõi đơn hàng...
            </p>
            <Link href="#" className="text-blue-500 fw-medium">
              Xem chi tiết
            </Link>
          </div>
        </div>

        {/* Order and Shipping */}
        <div className="col-md-6 mb-4">
          <div className=" p-3 h-100">
            <div className="fw-medium mb-2">Đơn hàng và vận chuyển</div>
            <p className="text-secondary mb-3">
              Chính sách đổi trả, cách kích hoạt bảo hành, hướng dẫn đổi trả
              online ...
            </p>
            <Link href="#" className="text-blue-500 fw-medium">
              Xem chi tiết
            </Link>
          </div>
        </div>

        {/* Returns and Refunds */}
        <div className="col-md-6 mb-4">
          <div className=" p-3 h-100">
            <div className="fw-medium mb-2">Đổi trả, bảo hành và hoàn tiền</div>
            <p className="text-secondary mb-3">
              Chính sách đổi trả, cách kích hoạt bảo hành, hướng dẫn đổi trả
              online ...
            </p>
            <Link href="#" className="text-blue-500 fw-medium">
              Xem chi tiết
            </Link>
          </div>
        </div>

        {/* Services */}
        <div className="col-md-6 mb-4">
          <div className=" p-3 h-100">
            <div className="fw-medium mb-2">Dịch vụ và chương trình</div>
            <p className="text-secondary mb-3">
              Chính sách của các dịch vụ và chương trình dành cho khách hàng
              Tiki
            </p>
            <Link href="#" className="text-blue-500 fw-medium">
              Xem chi tiết
            </Link>
          </div>
        </div>

        {/* About Tiki */}
        <div className="col-md-6 mb-4">
          <div className=" p-3 h-100">
            <div className="fw-medium mb-2">Thông tin về Tiki</div>
            <p className="text-secondary mb-3">
              Quy chế hoạt động và chính sách của sàn thương mại điện tử Tiki
            </p>
            <Link href="#" className="text-blue-500 fw-medium">
              Xem chi tiết
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSupport;
