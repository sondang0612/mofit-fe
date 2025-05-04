import Blog from "@/components/blogs/Blog";
import Breadcrumb from "@/components/Breadcrumb";

import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";

export const metadata = {
  title:
    "Tin tức || Double Fish Sport Group,Sport Equipments Manufacturer-doublefish.com.vn",
  description:
    "Double Fish Sport Group,Sport Equipments Manufacturer-doublefish.com.vn",
};
export default function BlogPage2() {
  return (
    <>
      <Header1 />
      <main className="page-wrapper">
        <div className="mb-2 pb-2"></div>
        <Breadcrumb />
        <div className="mb-2 pb-2"></div>

        <Blog />
      </main>
      <Footer1 />
    </>
  );
}
