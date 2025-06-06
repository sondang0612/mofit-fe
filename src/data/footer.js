import { pathNames } from "@/utils/constants/paths";

export const footerLinks2 = [
  { href: pathNames.PAYMENT_POLICY, text: "Chính sách thanh toán" },
  { href: pathNames.COMPLAINT_POLICY, text: "Chính sách xử lý khiếu nại" },
  {
    href: pathNames.SHIPPING_AND_DELIVERY_POLICY,
    text: "Chính sách vận chuyển và giao nhận",
  },
  {
    href: pathNames.RETURN_AND_REFUND_POLICY,
    text: "Chính sách đổi trả và hoàn tiền",
  },
  { href: pathNames.INSPECTION_POLICY, text: "Chính sách kiểm hàng" },
  { href: pathNames.PRIVATE_POLICY, text: "Chính sách bảo mật thông tin" },
];
export const footerLinks3 = [
  { href: "/store?sortingValue=new_arrivals", text: "Hàng mới về" },
  { href: "/store?sortingValue=best_seller", text: "Bán chạy" },
];
export const footerLinks1 = [
  { href: pathNames.ABOUT_US, text: "Giới thiệu" },
  // { href: pathNames.CONTACT, text: "Liên hệ" },
  { href: pathNames.BLOGS, text: "Tin tức" },
  { href: "#", text: "Hotline: +84 923 680 808" },
  { href: "#", text: "contact@doublefish.com.vn" },
];

export const languageOptions = [
  { value: "", text: "United Kingdom | English", selected: true },
  { value: "1", text: "United States | English" },
  { value: "2", text: "German" },
  { value: "3", text: "French" },
  { value: "4", text: "Swedish" },
];

export const languageOptions2 = [
  { value: "english", text: "English", selected: true },
  { value: "german", text: "German" },
  { value: "french", text: "French" },
  { value: "swedish", text: "Swedish" },
];

export const currencyOptions = [
  { value: "", text: "$ USD", selected: true },
  { value: "1", text: "£ GBP" },
  { value: "2", text: "€ EURO" },
];

export const socialLinks = [
  {
    href: "https://facebook.com",
    className: "svg-icon svg-icon_facebook",
    width: 9,
    height: 15,
    viewBox: "0 0 9 15",
    icon: "#icon_facebook",
  },
  {
    href: "https://twitter.com",
    className: "svg-icon svg-icon_twitter",
    width: 14,
    height: 13,
    viewBox: "0 0 14 13",
    icon: "#icon_twitter",
  },
  {
    href: "https://instagram.com",
    className: "svg-icon svg-icon_instagram",
    width: 14,
    height: 13,
    viewBox: "0 0 14 13",
    icon: "#icon_instagram",
  },
  {
    href: "https://youtube.com",
    className: "svg-icon svg-icon_youtube",
    width: 16,
    height: 11,
    viewBox: "0 0 16 11",
    icon: (
      <path d="M15.0117 1.8584C14.8477 1.20215 14.3281 0.682617 13.6992 0.518555C12.5234 0.19043 7.875 0.19043 7.875 0.19043C7.875 0.19043 3.19922 0.19043 2.02344 0.518555C1.39453 0.682617 0.875 1.20215 0.710938 1.8584C0.382812 3.00684 0.382812 5.46777 0.382812 5.46777C0.382812 5.46777 0.382812 7.90137 0.710938 9.07715C0.875 9.7334 1.39453 10.2256 2.02344 10.3896C3.19922 10.6904 7.875 10.6904 7.875 10.6904C7.875 10.6904 12.5234 10.6904 13.6992 10.3896C14.3281 10.2256 14.8477 9.7334 15.0117 9.07715C15.3398 7.90137 15.3398 5.46777 15.3398 5.46777C15.3398 5.46777 15.3398 3.00684 15.0117 1.8584ZM6.34375 7.68262V3.25293L10.2266 5.46777L6.34375 7.68262Z" />
    ),
  },
  {
    href: "https://pinterest.com",
    className: "svg-icon svg-icon_pinterest",
    width: 14,
    height: 15,
    viewBox: "0 0 14 15",
    icon: "#icon_pinterest",
  },
];
