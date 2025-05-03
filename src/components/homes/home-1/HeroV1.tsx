"use client";
import ImageSlider from "@/components/ImageSlider";
import { useSiteSettings } from "@/hooks/react-query/useSiteSettings";

const HeroV1 = () => {
  const { data: siteSettings } = useSiteSettings();
  return (
    <div className="w-full h-full relative overflow-hidden">
      <ImageSlider images={siteSettings?.home?.heros} />
    </div>
  );
};

export default HeroV1;
