"use client";
import { useCheckLike } from "@/hooks/react-query/auth/favorite-products/useCheckLike";
import { useLikeProduct } from "@/hooks/react-query/auth/favorite-products/useLikeProduct";
import { useUnLikeProduct } from "@/hooks/react-query/auth/favorite-products/useUnLikeProduct";
import { useCreateCartItem } from "@/hooks/react-query/cart-items/useCreateCartItem";
import { useProduct } from "@/hooks/react-query/products/useProduct";
import { formatPrice } from "@/utils/formatPrice";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import ShareComponent from "../common/ShareComponent";
import HtmlContent from "../HtmlContent";
import ProductSlider1 from "./sliders/ProductSlider1";

type Props = {
  id: string;
};

type TabType = "description" | "specifications" | "reviews";

const SingleProduct: React.FC<Props> = ({ id }) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<TabType>("description");
  const { mutateAsync: createCartItem } = useCreateCartItem();
  const { data: product } = useProduct({ id });
  const { data: isLiked } = useCheckLike({ productId: product?.id });
  const { mutate: likeProduct } = useLikeProduct();
  const { mutate: unLikeProduct } = useUnLikeProduct();
  const router = useRouter();

  const handleAddToCart = async (
    productId?: number,
    quantity?: number,
    callback?: () => void
  ) => {
    if (!productId || !quantity) {
      return undefined;
    }
    try {
      await createCartItem({ productId, quantity });
      callback?.();
    } catch (error) {}
  };

  const handleQuantityChange = (action: "increase" | "decrease") => {
    if (action === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const realPrice = useMemo(() => {
    let price = product?.price || 0;
    if (product?.discount && product.discount.percentage) {
      price = price - (product?.discount?.percentage / 100) * price;
    }
    return price;
  }, [product]);

  return (
    <>
      <div className="product-single container tw-bg-white">
        <div className="tw-flex tw-gap-[29px] tw-py-8 tw-flex-col lg:tw-flex-row">
          <div className="tw-w-full lg:tw-w-1/2">
            <ProductSlider1 product={product} />
          </div>

          <div className="tw-w-full lg:tw-w-1/2 tw-space-y-6">
            <div>
              <h1 className="tw-text-2xl tw-font-semibold tw-mb-2 tw-uppercase">
                {product?.title}
              </h1>
              {/* <p className="tw-text-sm tw-text-gray-500">(USAPA APPROVAL)</p> */}
            </div>

            <div className="tw-flex tw-justify-between tw-items-center">
              <div className="tw-flex tw-items-center tw-gap-4">
                <span className="tw-text-3xl tw-font-semibold">
                  {formatPrice(realPrice)}
                </span>
                {product?.discount && product?.discount?.percentage && (
                  <span className="tw-text-xl tw-line-through tw-text-gray-400">
                    {formatPrice(product.price)}
                  </span>
                )}
              </div>
              <div className="tw-flex tw-items-center tw-gap-2">
                <div
                  className="hover:tw-opacity-80 tw-transition-all tw-cursor-pointer tw-size-[34px] tw-flex tw-justify-center tw-items-center  tw-bg-[#FFF0F0] tw-rounded-lg"
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
                    </>
                  ) : (
                    <>
                      <FcLikePlaceholder size={18} className="unliked" />
                    </>
                  )}
                </div>
                <div className="tw-bg-[#EDF0F8] hover:tw-opacity-80 tw-transition-all tw-cursor-pointer tw-size-[34px] tw-flex tw-items-center tw-justify-center tw-rounded-lg">
                  <ShareComponent showText={false} title={product?.title} />
                </div>
              </div>
            </div>

            <div className="tw-flex tw-items-center tw-gap-4">
              <div className="tw-text-gray-700">Loại</div>
              <button
                className={`tw-px-4 tw-py-1 tw-rounded-lg tw-border-[#0095FF] tw-border`}
              >
                {product?.category?.name}
              </button>
            </div>

            <div className="tw-flex tw-items-center tw-gap-4">
              <div className="tw-text-gray-700">Số Lượng</div>
              <div className="tw-flex tw-items-center tw-gap-1">
                <button
                  className="tw-text-3xl tw-rounded-full tw-flex tw-items-center tw-justify-center"
                  onClick={() => handleQuantityChange("decrease")}
                >
                  -
                </button>
                <span className="tw-w-12 tw-text-xl tw-text-center">
                  {quantity}
                </span>
                <button
                  className=" tw-text-3xl tw-rounded-full tw-flex tw-items-center tw-justify-center"
                  onClick={() => handleQuantityChange("increase")}
                >
                  +
                </button>
              </div>
            </div>

            <div className="tw-flex tw-gap-4">
              <button
                onClick={() => handleAddToCart(product?.id, quantity)}
                className="tw-flex-1 tw-py-3 tw-border tw-border-red-500 tw-text-red-500 tw-rounded"
              >
                Thêm vào giỏ
              </button>
              <button
                onClick={() =>
                  handleAddToCart(product?.id, quantity, () =>
                    router.push("/shop_cart")
                  )
                }
                className="tw-flex-1 tw-py-3 tw-bg-red-500 tw-text-white tw-rounded"
              >
                Mua ngay
              </button>
            </div>

            <div className="tw-border-t tw-pt-6">
              <div className="tw-flex tw-gap-4">
                <div className="tw-text-gray-600">Thương hiệu:</div>
                <div className="tw-font-light">{product?.brand?.name}</div>
              </div>
              <div className="tw-flex tw-gap-4">
                <div className="tw-text-gray-600">SKU:</div>
                <div className="tw-font-light">{product?.sku}</div>
              </div>
              <div className="tw-flex tw-gap-4">
                <div className="tw-text-gray-600">Xuất xứ:</div>
                <div className="tw-font-light">{product?.origin}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container tw-py-8 tw-min-h-40">
        <div className="tw-border-b tw-border-gray-200">
          <div className="tw-flex tw-gap-8 tw-justify-center">
            <button
              onClick={() => setActiveTab("description")}
              className={classNames(
                "tw-pb-4 tw-px-4 tw-text-lg tw-font-medium tw-relative",
                {
                  "tw-text-[#FF7700] after:tw-absolute after:tw-bottom-0 after:tw-left-0 after:tw-w-full after:tw-h-0.5 after:tw-bg-[#FF7700]":
                    activeTab === "description",
                  "tw-text-gray-500": activeTab !== "description",
                }
              )}
            >
              Mô tả
            </button>
            <button
              onClick={() => setActiveTab("specifications")}
              className={classNames(
                "tw-pb-4 tw-px-4 tw-text-lg tw-font-medium tw-relative",
                {
                  "tw-text-[#FF7700] after:tw-absolute after:tw-bottom-0 after:tw-left-0 after:tw-w-full after:tw-h-0.5 after:tw-bg-[#FF7700]":
                    activeTab === "specifications",
                  "tw-text-gray-500": activeTab !== "specifications",
                }
              )}
            >
              Thông số kỹ thuật
            </button>
          </div>
        </div>
        <div className="tw-py-6">
          {activeTab === "description" && (
            <HtmlContent value={product?.description} />
          )}
          {activeTab === "specifications" && (
            <HtmlContent value={product?.specifications} />
          )}
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
