import Breadcrumb from "@/components/Breadcrumb";
import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";
import AccountWishlist from "@/components/otherPages/AccountWishlist";
import DashboardSidebar from "@/components/otherPages/DashboardSidebar";
import React from "react";

export const metadata = {
  title:
    "Dashboard Account Wishlist || Double Fish eCommerce React Nextjs Template",
  description: "Double Fish eCommerce React Nextjs Template",
};
export default function AccountWishlistPage() {
  return (
    <>
      <Header1 />
      <main className="page-wrapper">
        <div className="mb-2 pb-2"></div>
        <Breadcrumb />
        <div className="mb-2 pb-2"></div>
        <section className="my-account container">
          <div className="row">
            <DashboardSidebar />
            <AccountWishlist />
          </div>
        </section>
      </main>

      <Footer1 />
    </>
  );
}
