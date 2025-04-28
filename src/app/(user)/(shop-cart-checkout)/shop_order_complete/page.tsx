import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";

import ChectoutSteps from "@/components/shopCartandCheckout/ChectoutSteps";
import OrderCompleted from "@/components/shopCartandCheckout/OrderCompleted";
import React, { Suspense } from "react";

export default function () {
  return (
    <>
      <Header1 showBreadcrumb />
      <main className="page-wrapper">
        <section className="shop-checkout container  ">
          <OrderCompleted />
        </section>
      </main>
      <Footer1 />
    </>
  );
}
