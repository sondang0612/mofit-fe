import { useEffect } from "react";

export default function ZaloWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sp.zalo.me/plugins/sdk.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
