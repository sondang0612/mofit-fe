"use client";
import {
  footerLinks1,
  footerLinks2,
  footerLinks3,
  socialLinks,
} from "@/data/footer";
import Link from "next/link";

export default function Footer1() {
  return (
    <footer className="footer footer_type_1 !tw-bg-black">
      <div className="footer-middle md:tw-px-24 tw-px-6">
        <div className="row row-cols-lg-5 row-cols-2">
          <div className="footer-column footer-store-info col-12 mb-4 mb-lg-0">
            <p className="!tw-text-base tw-text-white tw-font-semibold">
              CÔNG TY CỔ PHẦN ĐẦU TƯ VÀ THƯƠNG MẠI MODERN FARE VIỆT NAM.
            </p>
            <p className="tw-text-sm tw-text-white">
              GPKD số 0105243391 do Sở KH và ĐT TP Hà Nội cấp ngày 06/04/2011
            </p>

            <p className="tw-text-sm tw-text-white">
              Địa chỉ: Số 31B, Ngõ 226, Đường Cầu Giấy, Phường Quan Hoa, Quận
              Cầu Giấy, TP. Hà Nội, Việt Nam
            </p>

            <ul className="social-links list-unstyled d-flex flex-wrap mb-0">
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    className="footer__social-link d-block"
                  >
                    <svg
                      className={link.className}
                      width={link.width}
                      height={link.height}
                      viewBox={link.viewBox}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {typeof link.icon === "string" ? (
                        <use href={link.icon} />
                      ) : (
                        link.icon
                      )}
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* <!-- /.footer-column --> */}
          <div className="footer-column footer-menu mb-4 mb-lg-0">
            <h5 className="sub-menu__title text-uppercase !tw-font-semibold !tw-text-base">
              Hỗ trợ khách hàng
            </h5>
            <ul className="sub-menu__list list-unstyled">
              {footerLinks1.map((elm, i) => (
                <li key={i} className="sub-menu__item">
                  <Link
                    href={elm.href}
                    className="menu-link menu-link_us hover:!tw-text-white hover:tw-opacity-80 !tw-text-white"
                  >
                    {elm.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <!-- /.footer-column --> */}

          <div className="footer-column footer-menu mb-4 mb-lg-0">
            <h5 className="sub-menu__title text-uppercase !tw-font-semibold !tw-text-base">
              Về Double Fish
            </h5>
            <ul className="sub-menu__list list-unstyled">
              {footerLinks2.map((elm, i) => (
                <li key={i} className="sub-menu__item">
                  <Link
                    href={elm.href}
                    className="menu-link menu-link_us hover:!tw-text-white hover:tw-opacity-80 !tw-text-white"
                  >
                    {elm.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <!-- /.footer-column --> */}
          <div className="footer-column footer-newsletter col-12 mb-4 mb-lg-0 md:tw-pb-0 tw-pb-6">
            <h5 className="sub-menu__title text-uppercase !tw-font-semibold !tw-text-base">
              Đăng ký nhận ngay ưu đã mới nhất
            </h5>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="footer-newsletter__form position-relative bg-body !tw-bg-black"
            >
              <input
                className="form-control !tw-outline-none !tw-bg-black !tw-text-white tw-relative autofill:!tw-bg-transparent"
                style={{
                  border: "none !important",
                  borderBottom: "1px solid #fff !important",
                }}
                type="email"
                name="email"
                placeholder="Nhập email của bạn"
              />
              <input
                className="fw-medium absolute tw-top-1/2 -tw-translate-y-1/2 end-0 !tw-h-fit !tw-bg-black !tw-text-white"
                type="submit"
                defaultValue="Tham gia"
              />
            </form>
            <div className="tw-mt-5 tw-flex tw-gap-4">
              <a target="_blank" href="https://zalo.me/0971090094">
                <img
                  src="/assets/svgs/zalo.svg"
                  alt="#"
                  className="tw-cursor-pointer"
                />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/evogiaiphapthethao"
              >
                <img
                  src="/assets/svgs/facebook.svg"
                  alt="#"
                  className="tw-cursor-pointer"
                />
              </a>
              <a
                target="_blank"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@evovietnam.com.vn&su=Chào%20Công%20Ty&body=Xin%20chào%2C%20tôi%20muốn%20hỏi%20về%20sản%20phẩm."
              >
                <img
                  src="/assets/svgs/mail.svg"
                  alt="#"
                  className="tw-cursor-pointer"
                />
              </a>
            </div>
          </div>
          {/* <!-- /.footer-column --> */}
        </div>
        {/* <!-- /.row-cols-5 --> */}
      </div>
    </footer>
  );
}
