import axiosInstance from "@/libs/axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { queryKey } from "../queryKey";
import { EGender } from "@/utils/constants/gender.enum";

export type Form = {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  birthday?: string;
  gender?: EGender;
  email?: string;
  currentPassword?: string;
  newPassword?: string;
  confirmNewPassword?: string;
};

const fetchData = async (form: Form) => {
  const response = await axiosInstance.put("auth/profile", form);
  return response.data;
};

const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: fetchData,
    onSuccess: () => {
      toast.success(`Cập nhật thông tin cá nhân thành công`);
      queryClient.invalidateQueries({
        queryKey: [queryKey.PROFILE],
      });
    },
  });
};

export { useUpdateProfile };
