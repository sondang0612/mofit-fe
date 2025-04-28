import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Checkout from "@/components/shopCartandCheckout/Checkout";

export default function () {
  return (
    <>
      <Header1 showBreadcrumb />
      <main className="page-wrapper">
        <section className="shop-checkout container  ">
          <Checkout />
        </section>
      </main>
      <Footer1 />
    </>
  );
}
