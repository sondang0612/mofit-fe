import Breadcrumb from "@/components/Breadcrumb";
import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";
import Spinner from "@/components/loading/Spinner";
import DashboardSidebar from "@/components/otherPages/DashboardSidebar";
import EditAddress from "@/components/otherPages/EditAddress";
import { Suspense } from "react";

export const metadata = {
  title:
    "Dashboard Edit Address || Double Fish eCommerce React Nextjs Template",
  description: "Double Fish eCommerce React Nextjs Template",
};
export default function AccountEditAddressPage() {
  return (
    <>
      <Header1 />
      <main className="page-wrapper">
        <div className="mb-2 pb-2"></div>
        <Suspense fallback={<Spinner />}>
          <Breadcrumb />
        </Suspense>
        <div className="mb-2 pb-2"></div>
        <section className="my-account container">
          <Suspense fallback={<Spinner />}>
            <div className="row">
              <DashboardSidebar />
              <EditAddress />
            </div>
          </Suspense>
        </section>
      </main>

      <Footer1 />
    </>
  );
}
