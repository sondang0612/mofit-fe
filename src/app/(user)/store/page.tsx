import ShopFilter from "@/components/asides/ShopFilter";
import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";
import Spinner from "@/components/loading/Spinner";
import Shop1 from "@/components/shoplist/Shop1";
import dynamic from "next/dynamic";
import { Suspense } from "react";

export const metadata = {
  title:
    "Cửa hàng || Double Fish Sport Group,Sport Equipments Manufacturer-doublefish.com.vn",

  description:
    "Double Fish Sport Group,Sport Equipments Manufacturer-doublefish.com.vn",
};
export default function Store() {
  return (
    <>
      <Header1 />
      <main className="page-wrapper" style={{ margin: "auto" }}>
        <Suspense fallback={<Spinner />}>
          <Shop1 />
        </Suspense>
      </main>
      <Suspense fallback={<Spinner />}>
        <ShopFilter />
      </Suspense>

      <Footer1 />
    </>
  );
}
