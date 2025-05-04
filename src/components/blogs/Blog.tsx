"use client";
import { postsData } from "@/data/posts";
import { useRouter } from "next/navigation";
import { BlogItem } from "./BlogItem";

const Blog = () => {
  const router = useRouter();
  return (
    <div className="container">
      <h2 className="tw-text-3xl tw-font-bold tw-text-black">Tin tức</h2>
      <p className="tw-text-base">
        Bộ sưu tập bài viết chất lượng từ các chuyên gia của chúng tôi
      </p>
      <div className="tw-grid md:tw-grid-cols-4 tw-grid-cols-1 md:tw-gap-8 tw-gap-12 tw-mt-10">
        {postsData.map((item, index) => (
          <BlogItem data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
