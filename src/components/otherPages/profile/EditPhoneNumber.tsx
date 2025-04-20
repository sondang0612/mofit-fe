import { useUpdateProfile } from "@/hooks/react-query/auth/useUpdateProfile";
import { User } from "@/types/api";
import { isValidPhoneNumber } from "@/utils/isValidPhoneNumber";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type Form = {
    phoneNumber: string;
};

interface Props {
    isOpen: boolean;
    onClose: () => void;
    profile?: User;
}

const EditPhoneNumberModal = (props: Props) => {
    const { isOpen, onClose, profile } = props;

    const { register, handleSubmit, reset } = useForm<Form>({
        defaultValues: {
            phoneNumber: profile?.phoneNumber
        },
    });

    const { mutate: updatePhoneNumber, isSuccess: isUpdateSuccess } = useUpdateProfile();

    const ref = React.useRef<HTMLDivElement | null>(null);

    const checkValid = (data: Form) => {
        const { phoneNumber } = data;
        if (!isValidPhoneNumber(phoneNumber)) {
            toast.error("Số điện thoại không hợp lệ");
            return false;
        }

        return true;
    };

    const onSubmit = (data: Form) => {
        const isValid = checkValid(data);

        if (!isValid) return;

        updatePhoneNumber({ ...profile, phoneNumber: data.phoneNumber });
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
            onClose();
        }
    }, [isUpdateSuccess]);

    React.useEffect(() => {
        // Reset form when phone number changes or modal opens
        reset({
            phoneNumber: profile?.phoneNumber || ""
        });
    }, [profile, isOpen]);

    return (
        <div className="address-modal-component">
            <div className={`modal ${isOpen ? "is-active" : ""}`}>
                <div className="modal__container slide-up" ref={ref}>
                    <div className="modal__header">
                        <h3>Cập nhật số điện thoại</h3>
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
                            id="phone-number-modal"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className="form__group">
                                <label className="form__label">Số điện thoại</label>
                                <input
                                    type="tel"
                                    className="form__input"
                                    required
                                    placeholder="Nhập số điện thoại mới"
                                    {...register("phoneNumber")}
                                />
                                <small className="form__text">Vui lòng nhập số điện thoại hợp lệ (VD: 0912345678)</small>
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
                                    form="phone-number-modal"
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

export default EditPhoneNumberModal;
