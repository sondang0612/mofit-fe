import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Cart from "@/components/shopCartandCheckout/Cart";
import React from "react";

export default function () {
  return (
    <>
      <Header1 showBreadcrumb />
      <main className="page-wrapper">
        <section className="shop-checkout container  ">
          <Cart />
        </section>
      </main>
      <Footer1 />
    </>
  );
}
