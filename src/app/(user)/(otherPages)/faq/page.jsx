import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";
import Faq from "@/components/otherPages/Faq";
import React from "react";

export const metadata = {
  title:
    "Faq || Double Fish Sport Group,Sport Equipments Manufacturer-doublefish.com.vn",
  description:
    "Double Fish Sport Group,Sport Equipments Manufacturer-doublefish.com.vn",
};
export default function FaqPage() {
  return (
    <>
      <Header1 />
      <main className="page-wrapper">
        <div className="mb-4 pb-4"></div>
        <Faq />
      </main>

      <Footer1 />
    </>
  );
}
