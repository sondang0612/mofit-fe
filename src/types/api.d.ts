import { EGender } from "@/utils/constants/gender.enum";
import {
  EOrderStatus,
  EPaymentMethod,
  EPaymentStatus,
  EShippingMethod,
} from "@/utils/constants/order.enum";
import { ERole } from "@/utils/constants/role.enum";
import { EUserDeleteRequestStatus } from "@/utils/constants/user-delete-request-status.enum";

export interface ApiResponse<T> {
  data: T;
  message?: string;
  total?: number;
}

export interface Product {
  id?: number | undefined;
  title?: string | undefined;
  price?: number | undefined;
  images?: { cover?: string | undefined; other?: string[] };
  ratings?: number | undefined;
  totalReviews?: string | undefined;
  price?: number | undefined;
  category?: Category | undefined;
  attributes?: Attribute[] | undefined;
  discount?: Discount | undefined;
  shortDescription?: string | undefined;
  description?: string | undefined;
  sku?: string | undefined;
  slug?: string | undefined;
  brand?: Brand | undefined;
  origin?: string | undefined;
  specifications?: string | undefined;
}

export interface Category {
  id?: number | undefined;
  name?: string | undefined;
  imgSrc?: string | undefined;
  parentCategory?: Category | undefined;
  subCategories?: Category[] | undefined;
  slug?: string | undefined;
}

export interface Brand {
  id?: number | undefined;
  name?: string | undefined;
  totalProducts?: number | undefined;
}

export interface Attribute {
  id?: number | undefined;
  label?: string | undefined;
  value: string | undefined;
}

export interface User {
  id?: number | undefined;
  email?: string | undefined;
  firstName?: string | undefined;
  lastName?: string | undefined;
  phoneNumber?: string | undefined;
  username?: string | undefined;
  role?: ERole | undefined;
  birthday?: string | undefined;
  gender?: EGender | undefined;
  deletionStatus?: EUserDeleteRequestStatus | undefined;
}

export interface CartItem {
  id: number | undefined;
  quantity?: number | undefined;
  product?: Product | undefined;
}

export interface Address {
  id?: number | undefined;
  firstName?: string | undefined;
  lastName?: string | undefined;
  city?: string | undefined;
  district?: string | undefined;
  streetAddress?: string | undefined;
  note?: string | undefined;
  isDefault?: string | undefined;
  phoneNumber?: string | undefined;
  user?: User | undefined;
}

export interface OrderItem {
  id?: number | undefined;
  product?: Product | undefined;
  quantity?: number | undefined;
}

export interface Payment {
  id?: number | undefined;
  status?: EPaymentStatus | undefined;
}

export interface Order {
  id?: number | undefined;
  orderItems?: OrderItem[] | undefined;
  shippingMethod?: EShippingMethod | undefined;
  shippingPrice?: number | undefined;
  paymentMethod?: EPaymentMethod | undefined;
  status?: EOrderStatus | undefined;
  discount?: number | undefined;
  vat?: number | undefined;
  subTotal?: number | undefined;
  totalPrice?: number | undefined;
  txnRef?: string | undefined;
  user?: User | undefined;
  address?: Address | undefined;
  cart?: CartItem[] | undefined;
  canCancel?: boolean | undefined;
  payment?: Payment | undefined;
  createdAt?: string | undefined;
}

export interface Category {
  id?: number | undefined;
  name?: string | undefined;
}

export interface Discount {
  id?: number | undefined;
  percentage?: number | undefined;
}

export interface Contact {
  id?: number | undefined;
  email?: string | undefined;
  name?: string | undefined;
  message?: string | undefined;
}

export interface Attribute {
  id?: number | undefined;
  label?: string | undefined;
  value?: string | undefined;
}

export interface OrderStatusLog {
  order?: Order | undefined;
  previousStatus?: EOrderStatus | undefined;
  currentStatus?: EOrderStatus | undefined;
  time?: string;
}

export interface FavoriteProduct {
  id?: number | undefined;
  product?: Product | undefined;
}

export interface SiteSettings {
  home: {
    heros: string[];
    tryNow: string;
    news: string[];
    about_us: {
      about_com: string;
      about_centre: string;
    };
    should_try_video: string;
  };
  zaloWidget: {
    show: boolean;
  };
}

export interface Post {
  id?: number | undefined;
  title?: string | undefined;
  images?: { cover?: string | undefined; other?: string[] };
  category?: PostCategory | undefined;
  shortDescription?: string | undefined;
  description?: string | undefined;
  isDeleted?: boolean | undefined;
  referenceLink?: string | undefined;
  createdAt?: string | undefined;
}

export interface PostCategory {
  id?: number | undefined;
  name?: string | undefined;
}
