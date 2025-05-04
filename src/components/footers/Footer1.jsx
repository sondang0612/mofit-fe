"use client";
import { footerLinks1, footerLinks2 } from "@/data/footer";
import { pathNames } from "@/utils/constants/paths";
import Link from "next/link";
import React from "react";

export default function Footer1() {
  return (
    <footer className="footer footer_type_1 !tw-bg-black">
      <div className="footer-middle md:tw-px-24 tw-px-6 md:tw-pb-[1.625rem] !tw-pb-20">
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
          </div>
          {/* <!-- /.footer-column --> */}
          <div className="footer-column footer-menu mb-4 mb-lg-0">
            <h5 className="sub-menu__title text-uppercase !tw-font-semibold !tw-text-base">
              Về Double Fish
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
              Chính sách và quy định
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
                className="tw-w-full tw-h-12 !tw-outline-none !tw-bg-black !tw-text-white tw-relative autofill:!tw-bg-transparent tw-border-b tw-border-b-white tw-px-3"
                type="email"
                name="email"
                placeholder="Nhập email của bạn"
              />
              <input
                className="fw-medium absolute tw-top-1/2 -tw-translate-y-1/2 tw-right-3 !tw-h-fit !tw-bg-transparent !tw-text-white"
                type="submit"
                value="Tham gia"
              />
            </form>
            <div className="tw-mt-5 tw-flex tw-gap-4">
              <a target="_blank" href="https://zalo.me/0923680808">
                <img
                  src="/assets/svgs/zalo.svg"
                  alt="#"
                  className="tw-cursor-pointer"
                />
              </a>
              <a target="_blank" href="https://www.facebook.com/MofitVietnam">
                <img
                  src="/assets/svgs/facebook.svg"
                  alt="#"
                  className="tw-cursor-pointer"
                />
              </a>
              <a
                target="_blank"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@doublefish.com.vn&su=Chào%20Công%20Ty&body=Xin%20chào%2C%20tôi%20muốn%20hỏi%20về%20sản%20phẩm."
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
        <div className="tw-h-[0.5px] tw-w-full tw-bg-white tw-mb-6 md:tw-mt-10 tw-mt-2"></div>
        <div className="tw-flex tw-items-center tw-justify-between md:tw-flex-row tw-flex-col md:tw-pb-0">
          <p className="tw-text-white">
            © 2025 Double Fish VN . All Rights Reserved
          </p>
          <div className="tw-flex tw-flex-row tw-text-white tw-gap-6">
            <Link href={pathNames.INSPECTION_POLICY}>
              <p className="tw-underline tw-text-white">Chính sách DVKH</p>
            </Link>
            <Link href={pathNames.PRIVATE_POLICY}>
              <p className="tw-underline tw-text-white">Chính sách bảo mật</p>
            </Link>
            <Link href={pathNames.VNPAY_PAYMENT_INSTRUCTION}>
              <p className="tw-underline tw-text-white">
                Hướng dẫn thanh toán VNPAY
              </p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
