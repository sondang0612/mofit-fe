import Breadcrumb from "@/components/Breadcrumb";
import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";
import About from "@/components/otherPages/about/About";

export const metadata = {
  title:
    "Về Double Fish || Double Fish Sport Group,Sport Equipments Manufacturer-doublefish.com.vn",
  description:
    "Double Fish Sport Group,Sport Equipments Manufacturer-doublefish.com.vn",
};

export default function AboutPage() {
  return (
    <>
      <Header1 />
      <main className="page-wrapper">
        <div className="mb-2 pb-2"></div>
        <Breadcrumb />
        <div className="mb-2 pb-2"></div>
        <div className="mb-2 pb-2"></div>
        <About />
      </main>
      <Footer1 />
    </>
  );
}
