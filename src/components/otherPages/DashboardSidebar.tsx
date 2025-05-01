"use client";
import { dashboardMenuItems } from "@/data/menu";
import { useLogout } from "@/hooks/react-query/auth/useLogout";
import { usePathname, useRouter } from "next/navigation";
import UserInfo from "../account/UserInfo";
import React from "react";
export default function DashboardSidebar() {
  const pathname = usePathname();
  const { mutate: logout } = useLogout();
  const router = useRouter();
  const handleNavigate = (href: string, value: string) => {
    if (value === "logout") {
      logout();
    } else {
      router.push(href);
    }
  };

  return (
    <div className="col-lg-3">
      <UserInfo />
      <ul className="account-nav">
        {dashboardMenuItems.map((elm, i) => {
          const Icon = elm.Icon;
          return (
            <li key={i} className="cursor-pointer">
              <span
                onClick={() => handleNavigate(elm.href, elm.value)}
                className={`menu-link ${
                  pathname.includes(elm.href) ? "menu-link_active" : ""
                } `}
              >
                <div
                  style={{
                    width: "1.5rem",
                    height: "1.5rem",
                    marginRight: "0.5rem",
                  }}
                  className="d-flex align-items-center"
                >
                  {Icon && <Icon />}
                </div>
                {elm.title}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
