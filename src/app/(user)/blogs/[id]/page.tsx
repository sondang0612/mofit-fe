import BlinkingHot from "@/components/blogs/BlinkingHot";
import { BlogItem } from "@/components/blogs/BlogItem";
import Breadcrumb from "@/components/Breadcrumb";
import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";
import HtmlContentWithoutReadmore from "@/components/HtmlContentWithoutReadmore";
import { postsData } from "@/data/posts";

export default function BlogDetailsPage({ params }: { params?: any }) {
  const id = params.id;
  const blog = postsData?.find((item) => item.id == id);
  return (
    <>
      <Header1 />
      <main className="page-wrapper tw-relative">
        <div className="mb-2 pb-2"></div>
        <Breadcrumb />
        <div className="container tw-mt-10 lg:!tw-px-40 md:!tw-px-0 tw-px-10">
          <h3 className="tw-text-black tw-font-bold">{blog?.title}</h3>
          <HtmlContentWithoutReadmore value={blog?.description} />
          <div>
            Link tham khảo:{" "}
            <a
              target="_blank"
              href={blog?.referenceLink}
              className="tw-text-blue-500 hover:tw-text-blue-400 tw-underline"
            >
              {blog?.referenceLink}
            </a>
          </div>

          <div className="tw-mt-14">
            <h3 className="tw-text-black tw-font-bold">Tin tức liên quan</h3>
            <div className="tw-grid lg:md:tw-grid-cols-4 md:tw-grid-cols-3 sm:tw-grid-cols-1 md:tw-gap-8 tw-gap-12 tw-mt-5">
              {postsData
                .filter((item) => item.id != id)
                .map((item, index) => (
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
