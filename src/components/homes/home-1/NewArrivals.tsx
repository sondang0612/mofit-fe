"use client";
import { useSiteSettings } from "@/hooks/react-query/useSiteSettings";

const NewArrivals = () => {
  const { data: siteSettings } = useSiteSettings();

  return (
    <div className="products-carousel mx-4">
      <h2 className="tw-font-anton section-title tw-text-black mb-4 pb-xl-2 mb-xl-2 text-center text-text-uppercase">
        Mới ra mắt
      </h2>

      <div className="position-relative grid grid-cols-3 gap-4">
        {siteSettings?.home?.news?.map?.((elm, i) => (
          <img src={elm} alt="#" className="tw-w-full tw-h-auto" />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
