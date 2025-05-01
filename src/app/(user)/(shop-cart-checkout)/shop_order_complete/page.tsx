import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Spinner from "@/components/loading/Spinner";

import ChectoutSteps from "@/components/shopCartandCheckout/ChectoutSteps";
import OrderCompleted from "@/components/shopCartandCheckout/OrderCompleted";
import React, { Suspense } from "react";

export default function () {
  return (
    <>
      <Header1 showBreadcrumb />
      <main className="page-wrapper">
        <section className="shop-checkout container  ">
          <Suspense fallback={<Spinner />}>
            <OrderCompleted />
          </Suspense>
        </section>
      </main>
      <Footer1 />
    </>
  );
}
