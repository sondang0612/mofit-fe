import { useSiteSettings } from "@/hooks/react-query/useSiteSettings";
import React from "react";

export default function ZaloWidget() {
  const { data: siteSettings } = useSiteSettings();

  React.useEffect(() => {
    if (siteSettings?.zalo?.show) {
      const script = document.createElement("script");
      script.src = "https://sp.zalo.me/plugins/sdk.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [siteSettings?.zalo?.show]);

  if (!siteSettings?.zalo?.show) {
    return null;
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
