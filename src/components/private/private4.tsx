import React from "react";
import DoubleFishLink from "../policies/DoubleFishLink";

const Private4 = () => {
  return (
    <div>
      <h3 className="tw-font-bold tw-uppercase">Chính sách thanh toán</h3>
      <p>
        Có 2 hình thức thanh toán, khách hàng có thể lựa chọn hình thức thuận
        tiện và phù hợp với mình nhất:
      </p>
      <p>
        Cách 1: Thanh toán khi nhận hàng (COD): Với hình thức này khách hàng xem
        hàng tại nhà, thanh toán tiền mặt cho nhân viên giao nhận hàng
      </p>
      <p>
        Cách 2: Thanh toán bằng thẻ: Tại phần thanh toán đặt hàng, KH chọn thanh
        toán bằng thẻ; sau đó KH chọn các hình thức thanh toán tương ứng của
        VNPay đã được chúng tôi tích hợp qua website:
      </p>
      <img
        src="/assets/images/payment-methods.png"
        alt="#"
        className="tw-w-full"
      />
      <h5 className="tw-font-bold">Bảo mật thông tin thanh toán</h5>
      <div>
        <h6 className="tw-font-bold">1. Cam kết bảo mật</h6>
        <p>
          Hệ thống thanh toán thẻ được cung cấp bởi các đối tác cổng thanh toán
          (“Đối Tác Cổng Thanh Toán”) đã được cấp phép hoạt động hợp pháp tại
          Việt Nam. Theo đó, các tiêu chuẩn bảo mật thanh toán thẻ tại{" "}
          <DoubleFishLink /> đảm bảo tuân thủ theo các tiêu chuẩn bảo mật ngành.
        </p>
      </div>
      <div>
        <h6 className="tw-font-bold">2. Quy định bảo mật</h6>
        <p>
          Chính sách giao dịch thanh toán bằng thẻ nội địa và thẻ quốc tế đảm
          bảo tuân thủ các tiêu chuẩn bảo mật của các Đối Tác Cổng Thanh Toán
          gồm:
        </p>
        <ul>
          <li className="tw-list-disc">
            Tiêu chuẩn bảo mật dữ liệu trên Internet SSL (Secure Sockets Layer)
            do GlobalSign cấp;
          </li>
          <li className="tw-list-disc">
            Chứng nhận tiêu chuẩn bảo mật dữ liệu thông tin thanh toán (PCI DSS)
            do Trustwave cung cấp;
          </li>
          <li className="tw-list-disc">Tiêu chuẩn mã hóa MD5 128 bit;</li>
        </ul>
        <p>
          Các nguyên tắc và quy định bảo mật thông tin trong ngành tài chính
          ngân hàng theo quy định của Ngân hàng nhà nước Việt Nam;
        </p>
        <p>
          Cơ chế bảo đảm an toàn giao dịch trong thanh toán của Nền Tảng TMĐT{" "}
          <DoubleFishLink /> áp dụng với Thành viên:
        </p>
        <ul>
          <li className="tw-list-disc">
            Nền Tảng cung cấp tiện ích lưu giữ token - chỉ lưu chuỗi đã được mã
            hóa bởi Đối Tác Cổng Thanh Toán cung cấp cho Nền Tảng. Nền Tảng
            không trực tiếp lưu trữ thông tin thẻ Thành viên. Việc bảo mật thông
            tin thẻ thanh toán Thành viên được thực hiện bởi Đối Tác Cổng Thanh
            Toán đã được cấp phép.
          </li>
          <li className="tw-list-disc">
            Đối với thẻ quốc tế: thông tin thẻ thanh toán của Thành viên mà có
            khả năng sử dụng để xác lập giao dịch không được lưu trên hệ thống
            của Nền Tảng. Đối Tác Cổng Thanh Toán sẽ lưu trữ và bảo mật.
          </li>
          <li className="tw-list-disc">
            Đối với thẻ nội địa (Internet banking), Nền Tảng chỉ lưu trữ mã đơn
            hàng, mã giao dịch và tên ngân hàng.
          </li>
          <li className="tw-list-disc">
            Thành Viên truy cập vào website thông qua giao thức HTTPS.
          </li>
          <li className="tw-list-disc">
            Thành Viên có tuỳ chọn sử dụng OTP để truy cập và giao dịch.
          </li>
        </ul>
        <p>
          Khách hàng không nên đưa thông tin chi tiết về việc thanh toán với bất
          kỳ ai bằng email hoặc hình thức liên lạc khác, <DoubleFishLink />{" "}
          không chịu trách nhiệm về những thiệt hại hay rủi ro thành viên có thể
          gánh chịu trong việc trao đổi thông tin của mình với người khác.
        </p>
        <p>
          Khách hàng tuyệt đối không sử dụng bất kỳ chương trình, công cụ hay
          hình thức nào khác để can thiệp vào hệ thống hay làm thay đổi cấu trúc
          dữ liệu. Nghiêm cấm việc phát tán, truyền bá hay cổ vũ cho bất kỳ hoạt
          động nào nhằm can thiệp, phá hoại hay xâm nhập của hệ thống{" "}
          <DoubleFishLink />. Mọi vi phạm sẽ bị xử lý theo Quy chế và quy định
          của pháp luật.
        </p>
        <p className="tw-font-bold">
          <DoubleFishLink /> cam kết đảm bảo thực hiện nghiêm túc các biện pháp
          bảo mật cần thiết cho mọi hoạt động thanh toán thực hiện trên Nền
          Tảng. Mọi thông tin giao dịch được bảo mật, trừ trường hợp buộc phải
          cung cấp theo yêu cầu của Cơ quan nhà nước có thẩm quyền.
        </p>
      </div>
    </div>
  );
};

export default Private4;
