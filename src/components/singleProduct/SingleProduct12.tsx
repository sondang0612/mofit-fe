"use client";
import { useCreateCartItem } from "@/hooks/react-query/cart-items/useCreateCartItem";
import { useProduct } from "@/hooks/react-query/products/useProduct";
import { formatPrice } from "@/utils/formatPrice";
import { getProductAttributeNames } from "@/utils/getProductAttributeNames";
import React from "react";
import ShareComponent from "../common/ShareComponent";
import Star from "../common/Star";
import BreadCumb from "./BreadCumb";
import ProductSlider1 from "./sliders/ProductSlider1";
import { useCheckLike } from "@/hooks/react-query/auth/favorite-products/useCheckLike";
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import { useLikeProduct } from "@/hooks/react-query/auth/favorite-products/useLikeProduct";
import { useUnLikeProduct } from "@/hooks/react-query/auth/favorite-products/useUnLikeProduct";

interface Props {
  slug?: string;
}

export default function SingleProduct12(props: Props) {
  const { slug } = props;
  const { mutate: createCartItem } = useCreateCartItem();
  const [quantity, setQuantity] = React.useState<number>(1);
  const { data: product } = useProduct({ slug });
  const { data: isLiked } = useCheckLike({ productId: product?.id });
  const { mutate: likeProduct } = useLikeProduct();
  const { mutate: unLikeProduct } = useUnLikeProduct();

  const handleAddToCart = (productId?: number, quantity?: number) => {
    if (!productId || !quantity) {
      return undefined;
    }
    createCartItem({ productId, quantity });
  };

  return (
    <section className="product-single container">
      <div className="row">
        <div className="col-lg-7">
          <ProductSlider1 product={product} />
        </div>
        <div className="col-lg-5">
          <div className="d-flex justify-content-between mb-4 pb-md-2">
            <div className="breadcrumb mb-0 d-none d-md-block flex-grow-1">
              <BreadCumb />
            </div>
          </div>
          <h1 className="product-single__name">{product?.title || "Tittle"}</h1>
          <div className="product-single__rating">
            <div className="reviews-group d-flex">
              <Star stars={5} />
            </div>
          </div>
          <div className="product-single__price">
            <span className="current-price">{formatPrice(product?.price)}</span>
          </div>
          <div className="product-single__short-desc">
            <p>{product?.shortDescription || "Product description"}</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="product-single__addtocart">
              <div className="qty-control position-relative">
                <input
                  type="number"
                  name="quantity"
                  min={1}
                  value={quantity}
                  className="qty-control__number text-center"
                  onChange={(e) => {
                    setQuantity(+e.target.value);
                  }}
                />
                <div
                  className="qty-control__reduce"
                  onClick={() =>
                    quantity > 1 && setQuantity((prev) => prev - 1)
                  }
                >
                  -
                </div>
                <div
                  className="qty-control__increase"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  +
                </div>
              </div>
              {/* <!-- .qty-control --> */}
              <button
                type="submit"
                className="btn btn-primary btn-addtocart js-open-aside"
                onClick={() => handleAddToCart(product?.id, quantity)}
              >
                Thêm vào giỏ hàng
              </button>
            </div>
          </form>
          <div className="product-single__addtolinks">
            <a
              className="menu-link menu-link_us-s add-to-wishlist"
              onClick={() => {
                if (isLiked) {
                  unLikeProduct({ productId: product?.id });
                } else {
                  likeProduct({ productId: product?.id });
                }
              }}
            >
              {isLiked ? (
                <>
                  <FcLike size={18} />
                  <span>Đã thích</span>
                </>
              ) : (
                <>
                  <FcLikePlaceholder size={18} className="unliked" />
                  <span>Thích</span>
                </>
              )}
            </a>
            <ShareComponent title={product?.title} />
          </div>
          <div className="product-single__meta-info">
            <div className="meta-item">
              <label>SKU:</label>
              <span>{product?.sku || "N/A"}</span>
            </div>
            <div className="meta-item">
              <label>Loại:&nbsp;</label>
              <span>{product?.category?.name}</span>
            </div>
            <div className="meta-item">
              <label>Thuộc tính:&nbsp;</label>
              <span>{getProductAttributeNames(product)}</span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="product-single__details-tab">
        <ul className="nav nav-tabs" id="myTab1" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link nav-link_underscore active"
              id="tab-description-tab"
              data-bs-toggle="tab"
              href="#tab-description"
              role="tab"
              aria-controls="tab-description"
              aria-selected="true"
            >
              Mô tả
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link nav-link_underscore"
              id="tab-additional-info-tab"
              data-bs-toggle="tab"
              href="#tab-additional-info"
              role="tab"
              aria-controls="tab-additional-info"
              aria-selected="false"
            >
              Thông tin thêm
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            id="tab-description"
            role="tabpanel"
            aria-labelledby="tab-description-tab"
          >
            <Description product={product} />
          </div>
          <div
            className="tab-pane fade"
            id="tab-additional-info"
            role="tabpanel"
            aria-labelledby="tab-additional-info-tab"
          >
            <AdditionalInfo />
          </div>
        </div>
      </div> */}
    </section>
  );
}
