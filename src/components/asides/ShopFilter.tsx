"use client";

import React, {useEffect, useState} from "react";

import { closeModalShopFilter } from "@/utils/aside";

import FilterAll from "../shoplist/filter/FilterAll";
import { useUrlParams } from "@/hooks/useUrlParams";
import {useParams} from "next/navigation";
import {IoIosArrowRoundForward} from "react-icons/io";
export default function ShopFilter() {
  const { removeAllParams, getAllQueryParams, setParams } = useUrlParams()
  const [filter, setFilter] = useState<any>(getAllQueryParams() || {});
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
          <div className="tw-underline tw-cursor-pointer" onClick={() => removeAllParams()}>Clear All</div>
          <button
            onClick={() => closeModalShopFilter()}
            className="btn-close-lg js-close-aside btn-close-aside ms-auto"
          />
        </div>
      </div>
      {/* /.aside-header */}
      <div className="aside-content tw-max-h-[75vh] tw-overflow-auto">
        <FilterAll filter={filter} setFilter={setFilter}/>

      </div>

      <div onClick={() => {

        const paramsArray = Object.keys(filter).map((key) => {
          const value = filter[key]
          return {
            key,
            value: Array.isArray(value) ? value?.join(',') : value,
          };
        }          );
        setParams(paramsArray,{replace:true})
      }} className="tw-rounded tw-border tw-absolute tw-px-4 tw-left-0 tw-right-0 tw-bottom-0 tw-bg-white tw-py-2">
        <div className="tw-text-white tw-flex tw-items-center tw-justify-between tw-px-4 tw-bg-black tw-py-3">
          <div className=" tw-font-bold tw-uppercase">Áp dụng</div>
          <IoIosArrowRoundForward size={25} />
        </div>
      </div>

      {/* /.aside-content */}
    </div>
  );
}
