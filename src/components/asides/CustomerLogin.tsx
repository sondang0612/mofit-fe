"use client";

import { useLogin } from "@/hooks/react-query/auth/useLogin";
import { closeModalUserlogin } from "@/utils/aside";
import { useRouter } from "next/navigation";
import React from "react";
import { IoEyeSharp } from "react-icons/io5";
import { toast } from "react-toastify";
import { BsFillEyeSlashFill } from "react-icons/bs";

export default function CustomerLogin() {
  const [username, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();
  const { mutate: login, isSuccess } = useLogin();
  const [showPass, setShowPass] = React.useState<boolean>(false);

  const isValidForm = React.useMemo(() => {
    return username.length !== 0 && password.length !== 0;
  }, [username, password]);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidForm) {
      toast.error("Vui lòng nhập đầy đủ thông tin");
      return;
    }
    login({ username, password });
  };

  const preClose = () => {
    setEmail("");
    setPassword("");
    closeModalUserlogin();
  };

  React.useEffect(() => {
    const pageOverlay = document.getElementById("pageOverlay");

    pageOverlay?.addEventListener("click", preClose);

    return () => {
      pageOverlay?.removeEventListener("click", preClose);
    };
  }, []);

  React.useEffect(() => {
    if (isSuccess) {
      preClose();
    }
  }, [isSuccess]);

  const navigate = (url: string) => {
    preClose();
    router.push(url);
  };

  return (
    <div
      id="userAside"
      className="aside aside_right overflow-hidden customer-forms "
    >
      <div className="customer-forms__wrapper d-flex position-relative">
        <div className="customer__login">
          <div className="aside-header d-flex align-items-center">
            <h3 className="text-uppercase fs-6 mb-0">Đăng nhập</h3>
            <button
              onClick={() => preClose()}
              className="btn-close-lg js-close-aside ms-auto"
            />
          </div>
          <form
            onSubmit={handleLogin}
            className="aside-content"
            id="login-form"
          >
            <div className="form-floating mb-3">
              <input
                name="username"
                type="username"
                className="form-control form-control_gray"
                placeholder="Tên đăng nhập"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email *</label>
            </div>
            <div className="pb-3" />
            <div className="form-floating mb-3 tw-relative">
              <input
                name="password"
                className="form-control form-control_gray"
                type={!showPass ? "password" : "text"}
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="form-label">Mật khẩu *</label>
              <div
                className="tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-right-4 tw-cursor-pointer"
                onClick={() => setShowPass(!showPass)}
              >
                {showPass ? (
                  <IoEyeSharp size={18} />
                ) : (
                  <BsFillEyeSlashFill size={18} />
                )}
              </div>
            </div>
            {/* <div className="d-flex align-items-center mb-3 pb-2">
              <div
                onClick={() => navigate("/reset_password")}
                className="btn-text ms-auto"
              >
                Đặt lại mật khẩu
              </div>
            </div> */}
            <button
              className="btn btn-primary w-100 text-uppercase"
              type="submit"
              form="login-form"
            >
              Đăng nhập
            </button>
            <div className="customer-option mt-4 text-center">
              <span className="text-secondary">Chưa có tài khoản?</span>{" "}
              <span
                onClick={() => navigate("/login_register?isRegister=true")}
                className="btn-text js-show-register"
              >
                Đăng ký ngay
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
