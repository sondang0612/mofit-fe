import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";
import DashboardSidebar from "@/components/otherPages/DashboardSidebar";
import AccountSupport from "@/components/otherPages/AccountSupport";
import React from "react";

export const metadata = {
  title: "Dashboard Account Support || Double Fish eCommerce",
  description: "Double Fish eCommerce",
};
export default function AccountSupportPage() {
  return (
    <>
      <Header1 />
      <main className="page-wrapper">
        <div className="mb-4 pb-4"></div>
        <section className="my-account container">
          <div className="row">
            <DashboardSidebar />
            <AccountSupport />
          </div>
        </section>
      </main>
      <Footer1 />
    </>
  );
}
