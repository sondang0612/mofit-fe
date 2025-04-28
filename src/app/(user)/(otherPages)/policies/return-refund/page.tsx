import React from "react";

const Page = () => {
  return (
    <div>
      <h3 className="tw-font-bold tw-uppercase">
        Chính sách đổi trả và hoàn tiền
      </h3>
      <div>
        <h6 className="tw-font-bold">1. Điều kiện đổi trả</h6>
        <div>
          Quý Khách hàng cần kiểm tra tình trạng hàng hóa và có thể đổi hàng/
          trả lại hàng ngay tại thời điểm giao/nhận hàng trong những trường hợp
          sau:
        </div>
        <ul>
          <li className="tw-list-disc">
            Hàng không đúng chủng loại, mẫu mã trong đơn hàng đã đặt hoặc như
            trên website tại thời điểm đặt hàng.
          </li>
          <li className="tw-list-disc">
            Không đủ số lượng, không đủ bộ như trong đơn hàng.
          </li>
          <li className="tw-list-disc">
            Tình trạng bên ngoài bị ảnh hưởng như rách bao bì, bong tróc, bể vỡ…
          </li>
          <li className="tw-list-disc">
            Khách hàng có trách nhiệm trình giấy tờ liên quan chứng minh sự
            thiếu sót trên để hoàn thành việc hoàn trả/đổi trả hàng hóa.
          </li>
        </ul>
      </div>
      <div>
        <h6 className="tw-font-bold">
          2. Quy định về thời gian thông báo và gửi sản phẩm đổi trả
        </h6>
        <p>
          Thời gian thông báo đổi trả: trong vòng 48h kể từ khi nhận sản phẩm
          đối với trường hợp sản phẩm thiếu phụ kiện, quà tặng hoặc bể vỡ.
        </p>
        <p>
          Thời gian gửi chuyển trả sản phẩm: trong vòng 7 ngày kể từ khi nhận
          sản phẩm.
        </p>
        <p>
          Địa điểm đổi trả sản phẩm: Khách hàng có thể mang hàng trực tiếp đến
          văn phòng/ cửa hàng của chúng tôi hoặc chuyển qua đường bưu điện.
        </p>
        <p>
          Trong trường hợp Quý Khách hàng có ý kiến đóng góp/khiếu nại liên quan
          đến chất lượng sản phẩm, Quý Khách hàng vui lòng liên hệ đường dây
          chăm sóc khách hàng của chúng tôi.
        </p>
      </div>

      <div>
        <h6 className="tw-font-bold">3. Hình thức đổi trả </h6>
        <ul>
          <li className="tw-list-disc">
            Chúng tôi thực hiện đổi hàng hóa đúng loại sản phẩm mà khách hàng
            đặt đối với sản phẩm giao sai hàng/ sai số lượng hoặc khi phát sinh
            sản phẩm không đạt cam kết.
          </li>
          <li className="tw-list-disc">
            Đổi sản phẩm khác có giá trị tương đương cho khách hàng trong trường
            hợp sản phẩm khách hàng đã đặt hết hàng nếu khách hàng đồng ý.
          </li>
        </ul>
      </div>
      <div className="tw-font-bold">
        - Trường hợp khách hàng không còn nhu cầu nữa do lỗi hàng hóa hoặc không
        đồng ý với hàng hóa được đổi lại công ty sẽ hoàn phí cho khách hàng bằng
        hình thức chuyển khoản hoặc theo phương thức thỏa thuận với khách hàng
        trong vòng 07 ngày làm việc kể từ ngày nhận được yêu cầu. Phí chuyển
        khoản khách hàng sẽ chịu (nếu có).
      </div>
      <div className="tw-font-bold">
        - Khi phát sinh chi phí vận chuyển của hàng đổi trả, khách hàng sẽ chịu
        chi phí này và thanh toán trực tiếp cho bên vân chuyển.
      </div>
    </div>
  );
};

export default Page;
