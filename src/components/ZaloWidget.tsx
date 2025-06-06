"use client";
import { useSiteSettings } from "@/hooks/react-query/useSiteSettings";
import React from "react";

export default function ZaloWidget() {
  const { data: siteSettings } = useSiteSettings();

  React.useEffect(() => {
    if (siteSettings?.zaloWidget?.show) {
      const script = document.createElement("script");
      script.src = "https://sp.zalo.me/plugins/sdk.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [siteSettings?.zaloWidget?.show]);

  if (!siteSettings?.zaloWidget?.show) {
    return (
      <div className="tw-fixed tw-z-50 tw-bottom-[4.65rem] md:tw-bottom-10 tw-right-[4.5rem]">
        <a
          href="https://zalo.me/0923680808"
          target="_blank"
          className="tw-flex tw-items-center tw-justify-end md:tw-bottom-10"
        >
          <img src="/assets/svgs/zalo-color.svg" alt="#" />
        </a>
      </div>
    );
  }

  return (
    <div
      className="zalo-chat-widget"
      data-oaid="390717872129579341"
      data-welcome-message="Rất vui khi được hỗ trợ bạn!"
      data-autopopup="0"
      data-width=""
      data-height=""
    ></div>
  );
}
