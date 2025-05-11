"use client";
import { BlogItem } from "@/components/blogs/BlogItem";
import Breadcrumb from "@/components/Breadcrumb";
import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";
import HtmlContentWithoutReadmore from "@/components/HtmlContentWithoutReadmore";
import { usePost } from "@/hooks/react-query/posts/usePost";
import { QueryParam, QueryValue, useFetch } from "@/hooks/react-query/useFetch";
import { Post } from "@/types/api";
import { apiEndpoints } from "@/utils/constants/apiEndpoints";

export default function BlogDetailsPage({ params }: { params?: any }) {
  const id = params.id;
  const { data: post } = usePost({ id });
  const { data: blogs } = useFetch<Post>({
    page: 1,
    endpoint: `${apiEndpoints.POSTS}`,
    limit: 10,
    queryParams: [QueryParam.SORT_BY, QueryParam.SORT, QueryParam.CATEGORY],
    queryValues: [QueryValue.CREATED_AT, QueryValue.DESC, post?.category?.id],
  });
  return (
    <>
      <Header1 />
      <main className="page-wrapper tw-relative">
        <div className="mb-2 pb-2"></div>
        <Breadcrumb />
        <div className="container tw-mt-10 lg:!tw-px-40 md:!tw-px-0 tw-px-10">
          <h3 className="tw-text-black tw-font-bold">{post?.title}</h3>
          <HtmlContentWithoutReadmore value={post?.description} />
          <div>
            Link tham khảo:{" "}
            <a
              target="_blank"
              href={post?.referenceLink}
              className="tw-text-blue-500 hover:tw-text-blue-400 tw-underline"
            >
              {post?.referenceLink}
            </a>
          </div>

          <div className="tw-mt-14">
            <h3 className="tw-text-black tw-font-bold">Tin tức liên quan</h3>
            <div className="tw-grid lg:md:tw-grid-cols-4 md:tw-grid-cols-3 sm:tw-grid-cols-1 md:tw-gap-8 tw-gap-12 tw-mt-5">
              {blogs.map((item, index) => (
                <BlogItem data={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer1 />
    </>
  );
}
