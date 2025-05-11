"use client";
import { postsData } from "@/data/posts";
import { useRouter } from "next/navigation";
import { BlogItem } from "./BlogItem";
import { QueryParam, QueryValue, useFetch } from "@/hooks/react-query/useFetch";
import { Post } from "@/types/api";
import { ITEMS_PER_PAGE } from "@/utils/constants";
import { apiEndpoints } from "@/utils/constants/apiEndpoints";
import React, { useState } from "react";
import List from "../homes/home-1/List";
import Pagination from "../shoplist/Pagination";
import { ClipLoader } from "react-spinners";

const Blog = () => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const {
    data: blogs,
    isFetching,
    totalElements,
  } = useFetch<Post>({
    page: page,
    endpoint: `${apiEndpoints.POSTS}`,
    limit: ITEMS_PER_PAGE,
    queryParams: [QueryParam.SORT_BY, QueryParam.SORT],
    queryValues: [QueryValue.CREATED_AT, QueryValue.DESC],
  });

  const renderItem = React.useCallback(({ data }: { data: Post }) => {
    return <BlogItem data={data} />;
  }, []);

  const onPageChange = (page: number) => {
    setPage(page);
  };

  return (
    <div className="container">
      <h2 className="tw-text-3xl tw-font-bold tw-text-black">Tin tức</h2>
      <p className="tw-text-base">
        Bộ sưu tập bài viết chất lượng từ các chuyên gia của chúng tôi
      </p>
      <div className="tw-mb-4">
        {isFetching ? (
          <div className="tw-flex tw-items-center tw-justify-center tw-min-h-80">
            <ClipLoader size={24} />
          </div>
        ) : (
          <List
            data={blogs}
            className="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 xl:tw-grid-cols-5 tw-gap-4"
            isFetching={isFetching}
            renderItem={renderItem}
          />
        )}
      </div>
      <Pagination totalItems={totalElements} onChange={onPageChange} />
    </div>
  );
};

export default Blog;
