import Breadcrumb from "@/components/Breadcrumb";
import { sortingOptions } from "@/data/products/productCategories";
import { useUrlParams } from "@/hooks/useUrlParams";
import { openModalShopFilter } from "@/utils/aside";
import { pathNames } from "@/utils/constants/paths";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { BiTransfer } from "react-icons/bi";

interface Props {
  isMobile?: boolean;
}

const SoftFilter = (props: Props) => {
  const { isMobile } = props;
  const pathName = usePathname();
  const { params: searchParams, getParam } = useUrlParams();
  const router = useRouter();
  const sortingValue = getParam("sortingValue");

  const handleClick = (value: string) => {
    if (value) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("sortingValue", value);

      router.push(`?${params?.toString()}`, { scroll: false });
    }
  };

  return (
    pathName === pathNames.STORE && (
      <div className="bg-white">
        <div className={`shop-filter-header pb-1 container`}>
          <Breadcrumb />

          <div className="tw-pt-4 tw-pb-2 tw-flex tw-items-center tw-justify-between">
            <div className="tw-hidden lg:tw-flex tw-flex-wrap tw-gap-4">
              {sortingOptions.map((option, index) => (
                <div
                  key={index}
                  onClick={() => handleClick(option.value)}
                  className={`tw-uppercase tw-cursor-pointer tw-text-xs hover:tw-text-black tw-border-b-2 tw-border-transparent hover:tw-border-black  ${
                    (sortingValue || "all") == option.value
                      ? "tw-text-black tw-border-black tw-font-medium"
                      : "tw-text-[#767676]"
                  }`}
                >
                  {option.label}
                </div>
              ))}
            </div>

            <div className="tw-flex tw-h-[42px] lg:tw-hidden tw-border tw-border-[#767676] tw-bg-white tw-font-medium tw-px-4 tw-py-2 tw-text-xs lg:tw-text-base">
              <select
                value={sortingValue || "all"}
                onChange={(e) => handleClick(e.target.value)}
                className="tw-outline-none tw-border-none tw-bg-white"
              >
                {sortingOptions.map((option, index) => (
                  <option
                    key={index}
                    value={option.value}
                    className="tw-text-sm lg:tw-text-base tw-font-medium"
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div
              onClick={openModalShopFilter}
              className="tw-flex tw-items-center tw-justify-center tw-gap-2 tw-cursor-pointer tw-border tw-border-[#767676] tw-bg-white tw-font-medium tw-px-4 tw-py-2 tw-text-xs lg:tw-text-base"
              style={{ color: "#131313" }}
            >
              <BiTransfer size={24} color="#131313" />
              <div>Lọc và sắp xếp</div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default SoftFilter;
