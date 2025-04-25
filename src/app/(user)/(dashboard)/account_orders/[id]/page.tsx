import Breadcrumb from "@/components/Breadcrumb";
import Footer1 from "@/components/footers/Footer1";

import Header1 from "@/components/headers/Header1";
import AccountOrderDetail from "@/components/otherPages/AccountOrderDetail";
import DashboardSidebar from "@/components/otherPages/DashboardSidebar";

export const metadata = {
  title:
    "Dashboard Account Order Detail || Double Fish eCommerce React Nextjs Template",
  description: "Double Fish eCommerce React Nextjs Template",
};
export default function AccountDetailPage() {
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
            <AccountOrderDetail />
          </div>
        </section>
      </main>
      <Footer1 />
    </>
  );
}
