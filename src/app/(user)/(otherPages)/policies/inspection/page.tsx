import DoubleFishLink from "@/components/policies/DoubleFishLink";
import React from "react";

const Page = () => {
  return (
    <div>
      <h3 className="tw-font-bold tw-uppercase">Chính sách kiểm hàng</h3>
      <div>
        <span>
          Trước khi nhận hàng và thanh toán, Quý Khách được quyền kiểm tra sản
          phẩm.
        </span>{" "}
        <span className="tw-font-bold">Không hỗ trợ thử hàng.</span>
      </div>
      <div>
        <span>
          Quý Khách vui lòng mở gói hàng kiểm tra để đảm bảo đơn hàng được giao
          đúng mẫu mã, số lượng như đơn hàng đã đặt.
        </span>{" "}
        <span className="tw-font-bold">Không thử hay dùng thử sản phẩm.</span>
      </div>
      <div>
        Sau khi đồng ý với món hàng được giao đến, Quý Khách thanh toán với nhân
        viên giao hàng (trường hợp đơn hàng được ship COD) và nhận hàng.
      </div>
      <div>
        Trường hợp Quý Khách không ưng ý với sản phẩm, Quý Khách có thể từ chối
        nhận hàng. Tại đây, chúng tôi sẽ thu thêm chi phí hoàn hàng, tương đương
        với phí ship của đơn hàng Quý khách đã đặt.
      </div>
      <div>
        <div className="tw-font-bold">Lưu ý:</div>
        <ul>
          <li className="tw-list-disc">
            Khi Quý Khách kiểm tra đơn hàng, nhân viên giao nhận buộc phải đợi
            Quý Khách kiểm tra hàng hóa bên trong gói hàng. Trường hợp nhân viên
            từ chối cho Quý Khách kiểm tra hàng hóa, Quý Khách vui lòng liên hệ
            với <DoubleFishLink /> qua hotline: +84 315 636 871 để được hỗ trợ.
          </li>
          <li className="tw-list-disc">
            Quý Khách tránh dùng vật sắc nhọn để mở gói hàng để tránh gây hư
            hỏng cho sản phẩm bên trong. Đối với những trường hợp sản phẩm bị hư
            hỏng do lỗi từ phía Khách hàng, doublefish.com.vn rất tiếc không thể
            hỗ trợ Quý Khách đổi/trả/bảo hành sản phẩm.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
