"use client";
import { useFetch } from "@/hooks/react-query/useFetch";
import { QueryParam, QueryValue } from "@/hooks/react-query/useInfiniteFetch";
import { useUrlParams } from "@/hooks/useUrlParams";
import { Product as IProduct } from "@/types/api";
import { ITEMS_PER_PAGE } from "@/utils/constants";
import { apiEndpoints } from "@/utils/constants/apiEndpoints";
import React from "react";
import List from "../homes/home-1/List";
import SkeletonProduct1 from "../homes/home-1/SkeletonProduct1";
import Pagination from "./Pagination";
import Product from "./Product";

const Shop1 = () => {
  const { getParam, getAllParams, setParams } = useUrlParams();
  const sortingValue = getParam("sortingValue");
  const activeCategory = getParam("activeCategory");
  const brands = getAllParams("brands");
  const minPrice = getParam("minPrice");
  const maxPrice = getParam("maxPrice");
  const currentPage = Number(getParam("page") || 1);
  const searchQuery = getParam("searchQuery");

  const {
    data: products,
    isFetching,
    totalElements,
  } = useFetch<IProduct>({
    page: currentPage,
    endpoint: apiEndpoints.PRODUCTS,
    limit: 20,
    queryParams: [
      QueryParam.SORT_BY,
      QueryParam.SORT,
      QueryParam.ATTRIBUTE_VALUE,
      QueryParam.CATEGORY,
      ...(brands ? [QueryParam.BRANDS] : []),
      QueryParam.MIN_PRICE,
      QueryParam.MAX_PRICE,
      QueryParam.SEARCH_QUERY,
    ],
    queryValues: [
      QueryValue.CREATED_AT,
      QueryValue.DESC,
      sortingValue === "all" ? undefined : sortingValue,
      activeCategory,
      ...(brands ? [brands] : []),
      minPrice,
      maxPrice,
      searchQuery,
    ],
  });

  const renderItem = React.useCallback(({ data }: { data: IProduct }) => {
    return <Product data={data} />;
  }, []);

  const onPageChange = (page: number) => {
    setParams([{ key: "page", value: page }]);
  };

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  React.useEffect(() => {
    setParams([{ key: "page", value: 1 }]);
  }, [sortingValue, activeCategory, brands, minPrice, maxPrice, searchQuery]);

  return (
    <div className="bg-layout pb-5">
      <section className="shop-main d-flex container">
        <div className="shop-list flex-grow-1 relative tw-pt-10 lg:tw-pt-0">
          <div className={``} id="products-grid">
            <List
              data={products}
              className="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 xl:tw-grid-cols-5 tw-gap-4"
              isFetching={isFetching}
              renderItem={renderItem}
              skeleton={SkeletonProduct1}
            />
          </div>
          <Pagination totalItems={totalElements} onChange={onPageChange} />
        </div>
      </section>
    </div>
  );
};

export default Shop1;
