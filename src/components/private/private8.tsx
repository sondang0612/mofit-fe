import React, { Fragment } from "react";
const data = [
  {
    title:
      "Quét mã VNPAY-QR trên 40+ Ứng dụng Mobile Banking và 15+ Ví điện tử liên kết",
    images: [
      "/assets/images/vnpay-payment-instructions/01.png",
      "/assets/images/vnpay-payment-instructions/02.png",
    ],
  },
  {
    title:
      "40+ Thẻ ATM và tài khoản ngân hàng nội địa + 5 thẻ thanh toán quốc tế",
    images: ["/assets/images/vnpay-payment-instructions/03.png"],
  },
  {
    title: "Apple Pay",
    images: ["/assets/images/vnpay-payment-instructions/04.png"],
    subContent: (
      <div className="text-sm tw-text-gray-500 tw-text-center">
        (Phụ thuộc vào tổ chức thẻ và ngân hàng phát hành thẻ. Chi tiết danh
        sách{" "}
        <a
          className="tw-text-blue-500 tw-underline"
          href="https://support.apple.com/en-us/102897"
          target="_blank"
        >
          tại đây
        </a>
        )
      </div>
    ),
  },
  {
    title: "Các phương thức thanh toán qua VNPAY",
    images: ["/assets/images/vnpay-payment-instructions/05.jpg"],
    highlight: true,
  },
];
const Private8 = () => {
  return (
    <div>
      <h3 className="tw-font-bold tw-uppercase">
        HƯỚNG DẪN THANH TOÁN VNPAY TRÊN WEBSITE
      </h3>
      <div className="tw-flex tw-flex-col tw-gap-4">
        <div>
          Cổng thanh toán VNPAY là giải pháp thanh toán do Công ty Cổ phần Giải
          pháp Thanh toán Việt Nam (VNPAY) phát triển. Khách hàng sử dụng thẻ,
          tài khoản ngân hàng, tính năng QR Pay/VNPAY-QR được tích hợp sẵn trên
          ứng dụng Mobile Banking của các ngân hàng hoặc Ví điện tử liên kết để
          thanh toán các giao dịch và nhập mã giảm giá (nếu có)
        </div>
        {data.map((item, index) => (
          <div className="tw-flex tw-flex-col tw-gap-2" key={index}>
            <h5
              className={`tw-font-bold tw-mt-2 tw-text-black tw-text-center ${
                item?.highlight ? "tw-underline" : ""
              }`}
            >
              {item.title}
            </h5>
            <div className="md:tw-px-40 tw-px-10">
              {item.images.map((item) => (
                <Fragment key={item}>
                  <img src={item} alt="#" />
                </Fragment>
              ))}
            </div>
            {item?.subContent && item?.subContent}
          </div>
        ))}

        <div>
          <h5 className="tw-text-black tw-font-bold">
            1. Phương thức thanh toán qua “Ứng dụng thanh toán hỗ trợ VNPAY-QR”
          </h5>
          <div className="tw-flex tw-flex-col tw-gap-2">
            <div className="">
              <span className="tw-font-bold tw-text-black">Bước 1:</span> Quý
              khách lựa chọn sản phẩm, dịch vụ và chọn Thanh toán ngay hoặc Đặt
              hàng Tại trang thanh toán, vui lòng kiểm tra lại sản phẩm đã đặt,
              điền đầy đủ thông tin người nhận hàng, chọn phương thức thanh toán
              VNPAY và nhấn nút “Đặt hàng ngay”.
            </div>
            <div className="">
              <span className="tw-font-bold tw-text-black">Bước 2:</span> Màn
              hình thanh toán chuyển sang giao diện cổng thanh toán VNPAY. Chọn
              phương thức “Ứng dụng thanh toán hỗ trợ VNPAY-QR”.
            </div>
            <div className="">
              <span className="tw-font-bold tw-text-black">Bước 3:</span> Hệ
              thống hiển thị mã QR cùng với số tiền cần thanh toán, Quý khách
              kiểm tra lại số tiền. Sử dụng ứng dụng ngân hàng (theo danh sách
              liệt kê), chọn “Quét Mã” và tiến hành quét mã QR trên màn hình
              thanh toán website *Lưu ý: Mã QR có hiệu lực trong 15 phút. Để quá
              trình thanh toán thành công, khách hàng vui lòng tham khảo trước
              các điều kiện và thao tác quét mã trên điện thoại để sẵn sàng,
              tránh sự cố hết thời gian ảnh hưởng đến thanh toán và mã khuyến
              mại của quý khách.
            </div>
            <div className="">
              <span className="tw-font-bold tw-text-black">Bước 4:</span> Kiểm
              tra thông tin, chọn nguồn tiền thanh toán từ “Nguồn tài khoản và
              Ví điện tử” hoặc “Nguồn thẻ tín dụng”, nhập mã giảm giá (nếu có)
              và hoàn tất thanh toán
              <div>
                Khi thực hiện thanh toán hoàn tất Quý khách sẽ nhận được thông
                báo xác nhận đơn hàng đặt hàng thành công tại website
              </div>
              <img
                src="/assets/images/vnpay-payment-instructions/06.png"
                alt="#"
                className="tw-mt-2"
              />
              <p className="tw-text-center tw-mt-2">
                Hướng dẫn thanh toán qua tính năng QR Pay/VNPAY-QR
              </p>
            </div>
          </div>
        </div>

        <div>
          <h5 className="tw-text-black tw-font-bold">
            2. Phương thức thanh toán qua “Thẻ nội địa và tài khoản ngân hàng”{" "}
          </h5>
          <div className="tw-flex tw-flex-col tw-gap-2">
            <div className="">
              <span className="tw-font-bold tw-text-black">Bước 1:</span> Quý
              khách lựa chọn sản phẩm, dịch vụ và chọn Thanh toán ngay hoặc Đặt
              hàng Tại trang thanh toán, vui lòng kiểm tra lại sản phẩm đã đặt,
              điền đầy đủ thông tin người nhận hàng, chọn phương thức thanh toán
              VNPAY và nhấn nút “Đặt hàng ngay”.
            </div>
            <div className="">
              <span className="tw-font-bold tw-text-black">Bước 2:</span> Màn
              hình thanh toán chuyển sang giao diện cổng thanh toán VNPAY. Chọn
              phương thức “Thẻ nội địa và tài khoản ngân hàng” và chọn ngân hàng
              muốn thanh toán thẻ trong danh sách
            </div>
            <div className="">
              <span className="tw-font-bold tw-text-black">Bước 3:</span> Quý
              khách vui lòng thực hiện nhập các thông tin thẻ/tài khoản theo yêu
              cầu và chọn “Tiếp tục”. Mã OTP sẽ được gửi về điện thoại đăng ký,
              nhập mã OTP để hoàn tất giao dịch *Lưu ý: Giao dịch sẽ hết hạn sau
              15 phút.
            </div>
            <div className="">
              <span className="tw-font-bold tw-text-black">Bước 4:</span> Khi
              thực hiện thanh toán hoàn tất Quý khách sẽ nhận được thông báo xác
              nhận đơn hàng đặt hàng thành công tại website.
              <img
                src="/assets/images/vnpay-payment-instructions/07.png"
                alt="#"
                className="tw-mt-2"
              />
              <p className="tw-text-center tw-mt-2">
                Giao diện thanh toán qua “Thẻ nội địa và tài khoản ngân hàng”
              </p>
            </div>
          </div>
        </div>
        <div>
          <h5 className="tw-text-black tw-font-bold">
            3.Phương thức thanh toán qua “Thẻ thanh toán quốc tế (Visa,
            MasterCard, JCB, UnionPay)”
          </h5>
          <div>
            Tương tự như phương thức thanh toán “Thẻ nội địa và tài khoản ngân
            hàng”
          </div>
        </div>
        <div>
          <h5 className="tw-text-black tw-font-bold">
            4.Phương thức thanh toán qua “Ví điện tử VNPAY”
          </h5>
          <div>
            Tương tự như phương thức thanh toán “Ứng dụng thanh toán hỗ trợ
            VNPAY-QR
          </div>
        </div>
        <div>
          <h5 className="tw-text-black tw-font-bold">
            5. Phương thức thanh toán qua “Apple pay”
          </h5>
          <div className="tw-flex tw-flex-col tw-gap-2">
            <div className="">
              <span className="tw-font-bold tw-text-black">Bước 1:</span> Truy
              cập website bằng trình duyệt Safari, lựa chọn sản phẩm, dịch vụ và
              chọn Thanh toán ngay hoặc Đặt hàng Tại trang thanh toán, vui lòng
              kiểm tra lại sản phẩm đã đặt, điền đầy đủ thông tin người nhận
              hàng, chọn phương thức thanh toán VNPAY và nhấn nút “Đặt hàng
              ngay”.
            </div>
            <div className="">
              <span className="tw-font-bold tw-text-black">Bước 2:</span>àn hình
              thanh toán chuyển sang giao diện cổng thanh toán VNPAY. Chọn
              phương thức “Apple Pay”
              <span>*Lưu ý: Giao dịch sẽ hết hạn sau 15 phút</span>
            </div>
            <div className="">
              <span className="tw-font-bold tw-text-black">Bước 3:</span> Sử
              dụng Face ID hoặc Touch ID để thanh toán
            </div>
            <div className="">
              <span className="tw-font-bold tw-text-black">Bước 4:</span> Khi
              thực hiện thanh toán hoàn tất Quý khách sẽ nhận được thông báo xác
              nhận đơn hàng đặt hàng thành công tại app.
              <img
                src="/assets/images/vnpay-payment-instructions/08.png"
                alt="#"
                className="tw-mt-2"
              />
              <p className="tw-text-center tw-mt-2">
                Hướng dẫn thanh toán qua Apple Pay
              </p>
            </div>
          </div>
        </div>

        <div>
          <div>---------------------</div>
          <h5 className="tw-text-black tw-font-bold">KÊNH HỖ TRỢ VNPAY</h5>
          <ul>
            <li className="tw-list-disc">Tổng đài: *3388 hoặc 1900 55 55 77</li>
            <li className="tw-list-disc">
              Zalo OA:{" "}
              <a
                href="https://zalo.me/4134983655549474109"
                target="_blank"
                className="tw-text-blue-500 tw-underline hover:tw-text-blue-400"
              >
                zalo.me/4134983655549474109
              </a>
            </li>
            <li className="tw-list-disc">
              Email:{" "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=hotro@vnpay.vn"
                target="_blank"
                className="tw-text-blue-500 tw-underline hover:tw-text-blue-400"
              >
                hotro@vnpay.vn
              </a>
            </li>
            <li className="tw-list-disc">
              Fanpage:{" "}
              <a
                href="https://zalo.me/4134983655549474109"
                target="_blank"
                className="tw-text-blue-500 tw-underline hover:tw-text-blue-400"
              >
                facebook.com/VNPAYQR.vn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Private8;
