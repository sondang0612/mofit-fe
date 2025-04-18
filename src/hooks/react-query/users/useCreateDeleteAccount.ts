import axiosInstance from "@/libs/axiosInstance";
import { asyncAuth } from "@/utils/asyncAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { queryKey } from "../queryKey";

type Form = {};

const fetchData = async (form: Form) => {
  const response = await axiosInstance.post("users/request-delete", form);
  return response?.data;
};

const useCreateDeleteAccount = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: fetchData,
    onSuccess: () => {
      toast.success(`Đã gửi yêu cầu xoá tài khoản`);
      queryClient.invalidateQueries({ queryKey: [queryKey.PROFILE] });
    },
  });
};

export { useCreateDeleteAccount };
