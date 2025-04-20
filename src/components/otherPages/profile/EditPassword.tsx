import { useUpdateProfile } from "@/hooks/react-query/auth/useUpdateProfile";
import { User } from "@/types/api";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type Form = {
    currentPassword: string;
    newPassword: string;
    confirmNewPassword: string;
};

interface Props {
    isOpen: boolean;
    onClose: () => void;
    profile?: User;
}

const EditPasswordModal = (props: Props) => {
    const { isOpen, onClose, profile } = props;

    const { register, handleSubmit, reset } = useForm<Form>({
        defaultValues: {
            currentPassword: "",
            newPassword: "",
            confirmNewPassword: "",
        },
    });

    const { mutate: updatePassword, isSuccess: isUpdateSuccess } = useUpdateProfile();

    const ref = React.useRef<HTMLDivElement | null>(null);

    const checkValidPassword = (data: Form) => {
        const { newPassword, confirmNewPassword, currentPassword } = data;

        if (
            currentPassword.length < 6 ||
            newPassword.length < 6 ||
            confirmNewPassword.length < 6
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

    const onSubmit = (data: Form) => {
        const isValid = checkValidPassword(data);

        if (!isValid) return;

        updatePassword({
            ...profile,
            currentPassword: data.currentPassword,
            newPassword: data.newPassword
        });
    };

    React.useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    React.useEffect(() => {
        if (isUpdateSuccess) {
            reset();
        }
    }, [isUpdateSuccess]);

    React.useEffect(() => {
        // Reset form when modal opens
        if (isOpen) {
            reset({
                currentPassword: "",
                newPassword: "",
                confirmNewPassword: ""
            });
        }
    }, [isOpen]);

    return (
        <div className="address-modal-component">
            <div className={`modal ${isOpen ? "is-active" : ""}`}>
                <div className="modal__container slide-up" ref={ref}>
                    <div className="modal__header">
                        <h3>Đổi mật khẩu</h3>
                        <button className="modal__close" onClick={onClose}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>
                    </div>

                    <div className="modal__body">
                        <form
                            className="form"
                            id="password-modal"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className="form__group">
                                <label className="form__label">Mật khẩu hiện tại</label>
                                <input
                                    type="password"
                                    className="form__input"
                                    required
                                    placeholder="Nhập mật khẩu hiện tại"
                                    {...register("currentPassword")}
                                />
                            </div>

                            <div className="form__group">
                                <label className="form__label">Mật khẩu mới</label>
                                <input
                                    type="password"
                                    className="form__input"
                                    required
                                    placeholder="Nhập mật khẩu mới"
                                    {...register("newPassword")}
                                />
                                <small className="form__text">Mật khẩu phải có ít nhất 6 ký tự</small>
                            </div>

                            <div className="form__group">
                                <label className="form__label">Xác nhận mật khẩu mới</label>
                                <input
                                    type="password"
                                    className="form__input"
                                    required
                                    placeholder="Xác nhận mật khẩu mới"
                                    {...register("confirmNewPassword")}
                                />
                            </div>

                            <div className="modal__footer">
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="btn btn--secondary btn--md"
                                >
                                    Hủy
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn--primary btn--md"
                                    form="password-modal"
                                >
                                    Cập nhật
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditPasswordModal;