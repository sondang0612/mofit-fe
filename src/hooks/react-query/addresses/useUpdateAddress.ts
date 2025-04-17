import axiosInstance from "@/libs/axiosInstance";
import { Address } from "@/types/address";
import { asyncAuth } from "@/utils/asyncAuth";
import { apiEndpoints } from "@/utils/constants/apiEndpoints";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

interface UpdateAddressParams extends Omit<Address, "id"> {
  id: string | number;
}

const fetchData = asyncAuth(async (form: UpdateAddressParams) => {
  const response = await axiosInstance.post("addresses", form);
  return response?.data;
});

export const useUpdateAddress = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: fetchData,
    onSuccess: () => {
      toast.success(`Cập nhật địa chỉ thành công`);
      queryClient.invalidateQueries({ queryKey: [apiEndpoints.ADDRESSES] });
    },
    onError: (_) => {
      toast.error(`Cập nhật địa chỉ thất bại`);
    },
  });
};
