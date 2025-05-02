"use client";
import { AuthProvider } from "@/providers/AuthProvider";
import React, { useEffect } from "react";
import Svgs from "../common/Svgs";
import MobileFooter1 from "../footers/MobileFooter1";
import QueryProvider from "@/providers/QueryProvider";
import MobileHeader from "../headers/MobileHeader";
import LoginFormPopup from "../common/LoginFormPopup";
import QuickView from "../modals/QuickView";
import SizeGuide from "../modals/SizeGuide";
import Delivery from "../modals/Delivery";
import CartDrawer from "../shopCartandCheckout/CartDrawer";
import SiteMap from "../modals/SiteMap";
import CustomerLogin from "../asides/CustomerLogin";
import ProductDescription from "../asides/ProductDescription";
import ProductAdditionalInformation from "../asides/ProductAdditionalInformation";
import ProductReviews from "../asides/ProductReviews";
import { ToastContainer } from "react-toastify";
import ZaloWidget from "../ZaloWidget";
import ScrollTop from "../common/ScrollTop";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};
const MainLayout = ({ children }: Props) => {
  const pathName = usePathname();
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Import the script only on the client side
      import("bootstrap/dist/js/bootstrap.esm" as any).then(() => {
        // Module is imported, you can access any exported functionality if
      });
    }
  }, []);

  const isPolicy = React.useMemo(() => {
    return pathName?.includes("policy");
  }, [pathName?.includes("policy")]);

  return (
    <>
      <AuthProvider>
        <QueryProvider>
          <Svgs />
          {!isPolicy && <MobileHeader />}
          {children}
          {!isPolicy && <MobileFooter1 />}
          {/* //modals and asides */}
          <LoginFormPopup />
          <QuickView />
          {/* <NewsLetter /> */}
          {/* <CookieContainer /> */}
          <SizeGuide />
          <Delivery />
          {!isPolicy && <CartDrawer />}
          <SiteMap />
          <CustomerLogin />
          <ProductDescription />
          <ProductAdditionalInformation />
          <ProductReviews />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <div className="page-overlay" id="pageOverlay"></div>
          <ScrollTop />
        </QueryProvider>
      </AuthProvider>
      <ZaloWidget />
    </>
  );
};

export default MainLayout;
