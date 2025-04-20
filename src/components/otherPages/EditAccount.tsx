"use client";
import { useProfile } from "@/hooks/react-query/auth/useProfile";
import { useUpdateProfile } from "@/hooks/react-query/auth/useUpdateProfile";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Avatar from "../headers/components/Avatar";
import PhoneIcon from "../icons/PhoneIcon";
import MailIcon from "../icons/MailIcon";
import LockIcon from "../icons/LockIcon";
import TrashIcon from "../icons/TrashIcon";
import EditPhoneNumberModal from "./profile/EditPhoneNumber";
import EditEmailModal from "./profile/EditEmail";
import EditPasswordModal from "./profile/EditPassword";
import { useCreateDeleteAccount } from "@/hooks/react-query/users/useCreateDeleteAccount";
import Swal from "sweetalert2";
import { EUserDeleteRequestStatus } from "@/utils/constants/user-delete-request-status.enum";

type Form = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  birthDay: string;
  birthMonth: string;
  birthYear: string;
  gender: string;
  currentPassword?: string;
  newPassword?: string;
  confirmNewPassword?: string;
};

const defaultValues = {
  firstName: "",
  lastName: "",
  birthDay: "",
  birthMonth: "",
  birthYear: "",
  gender: "",
  email: "",
  phoneNumber: "",
};

export default function EditAccount() {
  const { data: profile } = useProfile();
  const { mutate: requestDeleteAccount } = useCreateDeleteAccount()
  const [modal, setModal] = useState({
    editPhoneNumber: false,
    editEmail: false,
    editPassword: false,
  })
  console.log("🚀 ~ EditAccount ~ profile:", profile)
  const { register, reset, handleSubmit, formState: { errors } } = useForm<Form>({
    defaultValues,
  });
  const { mutate: updateProfile } = useUpdateProfile();

  const checkValidPassword = (data: Form) => {
    const { newPassword, confirmNewPassword, currentPassword } = data;

    if (
      (currentPassword && currentPassword.length < 6) ||
      (newPassword && newPassword.length < 6) ||
      (confirmNewPassword && confirmNewPassword.length < 6)
    ) {
      toast.error("Mật khẩu phải lớn hơn 6 kí tự");

      return false;
    }

    if (newPassword !== confirmNewPassword) {
      toast.error("Mật khẩu mới chưa trùng khớp");
      return false;
    }

    return true;
  };

  React.useEffect(() => {
    if (profile) {
      // Split birthday into day, month, year if exists
      if (profile.birthday) {
        const birthdayDate = new Date(profile.birthday);
        const formattedProfile = {
          ...profile,
          birthDay: birthdayDate.getDate().toString().padStart(2, '0'),
          birthMonth: (birthdayDate.getMonth() + 1).toString().padStart(2, '0'),
          birthYear: birthdayDate.getFullYear().toString()
        };
        reset(formattedProfile);
      } else {
        reset(profile);
      }
    } else {
      reset(defaultValues);
    }
  }, [profile, reset]);

  const onSubmit = (data: Form) => {
    // Reconstruct birthday from separate fields
    const birthday = data.birthYear && data.birthMonth && data.birthDay
      ? `${data.birthYear}-${data.birthMonth}-${data.birthDay}`
      : null;

    // Validate password if provided
    if ((data.currentPassword || data.newPassword || data.confirmNewPassword) && !checkValidPassword(data)) {
      return;
    }

    const { birthDay, birthMonth, birthYear, ...payload } = data;
    // Call update profile mutation
    updateProfile({
      ...payload,
      birthday: birthday || "",
    })
  };

  const handleRequestDeleteAccount = () => {
    Swal.fire({
      title: 'Bạn có chắc chắn muốn xoá tài khoản này?',
      text: "Tất cả dữ liệu sẽ bị xoá vĩnh viễn!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Có, tôi muốn xoá!',
      cancelButtonText: 'Huỷ bỏ',
    }).then((result) => {
      if (result.isConfirmed) {
        requestDeleteAccount(profile as any)
      }
    })
  }

  return (
    <div className="col-lg-9 ">
      <div className="page-content">
        <form onSubmit={handleSubmit(onSubmit)} className="tw-flex tw-flex-col lg:tw-flex-row tw-gap-y-8">
          <div className="tw-w-full lg:tw-w-[60%] lg:tw-pr-4">
            <p className="tw-text-lg tw-text-[#64646D] tw-font-normal">Thông tin cá nhân</p>
            <div className="tw-flex tw-gap-4">
              <div className="tw-flex">
                <Avatar fontSize={35} size={112} data={profile} />
              </div>
              <div className="tw-space-y-4">
                <div className="tw-flex tw-items-center tw-gap-4">
                  <div className="tw-w-[50px]">Họ</div>
                  <input
                    className={`tw-rounded tw-px-2 tw-w-full tw-py-1 !tw-border !tw-border-${errors.lastName ? "red-500" : "[#C4C4CF]"} tw-shadow-none tw-outline-none`}
                    {...register("lastName", { required: "Vui lòng nhập họ" })}
                  />
                </div>
                <div className="tw-flex tw-items-center tw-gap-4">
                  <div className="tw-w-[50px]">Tên</div>
                  <input
                    className={`tw-rounded tw-px-2 tw-w-full tw-py-1 !tw-border !tw-border-${errors.firstName ? "red-500" : "[#C4C4CF]"} tw-shadow-none tw-outline-none`}
                    {...register("firstName", { required: "Vui lòng nhập tên" })}
                  />
                </div>
              </div>
            </div>
            <div className="tw-space-y-4 tw-mt-8">
              <div className="tw-flex tw-gap-4">
                <div className="tw-w-[100px]">Ngày sinh</div>
                <div className="tw-flex tw-flex-1 tw-items-center tw-gap-2">
                  <input
                    placeholder="Ngày"
                    className="tw-rounded tw-w-full tw-px-2 tw-py-1 !tw-border !tw-border-[#C4C4CF] tw-shadow-none tw-outline-none"
                    {...register("birthDay")}
                    maxLength={2}
                  />
                  <input
                    placeholder="Tháng"
                    className="tw-rounded tw-w-full tw-px-2 tw-py-1 !tw-border !tw-border-[#C4C4CF] tw-shadow-none tw-outline-none"
                    {...register("birthMonth")}
                    maxLength={2}
                  />
                  <input
                    placeholder="Năm"
                    className="tw-rounded tw-w-full tw-px-2 tw-py-1 !tw-border !tw-border-[#C4C4CF] tw-shadow-none tw-outline-none"
                    {...register("birthYear")}
                    maxLength={4}
                  />
                </div>
              </div>
              <div className="tw-flex tw-gap-4">
                <div className="tw-w-[100px]">Giới tính</div>
                <div className="tw-flex tw-items-center tw-gap-4">
                  <div className="tw-flex tw-gap-1 tw-items-center">
                    <input
                      type="radio"
                      value="male"
                      id="male"
                      {...register("gender")}
                    />
                    <label htmlFor="male">Nam</label>
                  </div>
                  <div className="tw-flex tw-gap-1 tw-items-center">
                    <input
                      type="radio"
                      value="female"
                      id="female"
                      {...register("gender")}
                    />
                    <label htmlFor="female">Nữ</label>
                  </div>
                  <div className="tw-flex tw-gap-1 tw-items-center">
                    <input
                      type="radio"
                      value="other"
                      id="other"
                      {...register("gender")}
                    />
                    <label htmlFor="other">Khác</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="tw-mt-20 tw-flex tw-justify-center mx-auto">
              <button
                type="submit"
                className="tw-rounded tw-bg-primary tw-h-[40px] tw-w-[176px] tw-border-none tw-outline-none tw-text-white hover:tw-opacity-80"
              >
                Lưu thay đổi
              </button>
            </div>
          </div>
          <div className="tw-flex-1 lg:tw-pl-4 lg:tw-border-l lg:tw-border-[#EBEBF0]">
            <p className="tw-text-lg tw-text-[#64646D] tw-font-normal">Số điện thoại và Email</p>
            <div className="tw-flex tw-items-center tw-justify-between tw-pb-4 tw-border-b tw-border-[#F8F8F8]">
              <div className="tw-flex tw-items-center tw-gap-1">
                <PhoneIcon />
                <div>
                  <div>Số điện thoại</div>
                  <div>{profile?.phoneNumber}</div>
                </div>
              </div>
              <div>
                <button onClick={() => setModal({ ...modal, editPhoneNumber: true })} type="button" className="tw-w-[86px] tw-text-primary tw-border tw-border-primary tw-rounded tw-bg-transparent">Cập nhật</button>
              </div>
            </div>
            <div className="tw-flex tw-items-center tw-justify-between tw-py-4 tw-border-b tw-border-[#F8F8F8]">
              <div className="tw-flex tw-items-center tw-gap-1">
                <MailIcon />
                <div>
                  <div>Địa chỉ email</div>
                  <div>{profile?.email}</div>
                </div>
              </div>
              <div>
                <button onClick={() => setModal({ ...modal, editEmail: true })} type="button" className="tw-w-[86px] tw-text-primary tw-border tw-border-primary tw-rounded tw-bg-transparent">Cập nhật</button>
              </div>
            </div>

            <p className="tw-text-lg tw-text-[#64646D] tw-font-normal tw-mt-4">Bảo mật</p>
            <div className="tw-flex tw-items-center tw-justify-between tw-pb-4 tw-border-b tw-border-[#F8F8F8]">
              <div className="tw-flex tw-items-center tw-gap-1">
                <LockIcon />
                <div>
                  Đổi mật khẩu
                </div>
              </div>
              <div>
                <button onClick={() => setModal({ ...modal, editPassword: true })} type="button" className="tw-w-[86px] tw-text-primary tw-border tw-border-primary tw-rounded tw-bg-transparent">Cập nhật</button>
              </div>
            </div>
            <div className="tw-flex tw-items-center tw-justify-between tw-py-4 ">
              <div className="tw-flex tw-items-center tw-gap-1">
                <TrashIcon />
                <div>
                  Yêu cầu xoá tài khoản
                </div>
              </div>
              <div>
                {profile?.deletionStatus !== EUserDeleteRequestStatus.PENDING && profile?.deletionStatus !== EUserDeleteRequestStatus.APPROVED ? <button onClick={handleRequestDeleteAccount} type="button" className="tw-w-[79px] tw-text-primary tw-border tw-border-primary tw-rounded tw-bg-transparent">Yêu cầu</button> : <div className="tw-text-primary">Đang chờ duyệt</div>}
              </div>
            </div>
          </div>
        </form>
      </div>
      <EditPhoneNumberModal isOpen={modal.editPhoneNumber} onClose={() => setModal({ ...modal, editPhoneNumber: false })} profile={profile} />
      <EditEmailModal isOpen={modal.editEmail} onClose={() => setModal({ ...modal, editEmail: false })} profile={profile} />
      <EditPasswordModal isOpen={modal.editPassword} onClose={() => setModal({ ...modal, editPassword: false })} profile={profile} />
    </div>
  );
}
