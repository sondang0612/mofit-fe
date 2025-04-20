"use client";

import { useEffect } from "react";

import { closeModalShopFilter } from "@/utils/aside";

import FilterAll from "../shoplist/filter/FilterAll";
import { useUrlParams } from "@/hooks/useUrlParams";
export default function ShopFilter() {
  const { clearParams } = useUrlParams()
  useEffect(() => {
    const pageOverlay = document.getElementById("pageOverlay");

    pageOverlay?.addEventListener("click", closeModalShopFilter);

    return () => {
      pageOverlay?.removeEventListener("click", closeModalShopFilter);
    };
  }, []);

  return (
    <div className="aside-filters aside aside_right" id="shopFilterAside">
      <div className="aside-header tw-flex tw-items-center tw-justify-between">
        <h3 className="text-uppercase fs-6 mb-0">Lọc và sắp xếp</h3>
        <div className="tw-flex tw-items-center tw-gap-2">
          <div className="tw-underline tw-cursor-pointer" onClick={() => clearParams({})}>Clear All</div>
          <button
            onClick={() => closeModalShopFilter()}
            className="btn-close-lg js-close-aside btn-close-aside ms-auto"
          />
        </div>
      </div>
      {/* /.aside-header */}
      <div className="aside-content">
        <FilterAll />
      </div>
      {/* /.aside-content */}
    </div>
  );
}
