import axiosInstance from "@/libs/axiosInstance";
import { Address } from "@/types/address";
import { asyncAuth } from "@/utils/asyncAuth";
import { apiEndpoints } from "@/utils/constants/apiEndpoints";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "react-toastify";

interface UpdateAddressParams extends Omit<Address, "id"> {
  id: string | number;
}

const fetchData = asyncAuth(async (form: UpdateAddressParams) => {
  const response = await axiosInstance.patch("addresses", form);
  return response?.data;
});

export const useUpdateAddress = () => {
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const router = useRouter();
  const redirect = searchParams.get("redirect");
  return useMutation({
    mutationFn: fetchData,
    onSuccess: () => {
      toast.success(`Cập nhật địa chỉ thành công`);
      queryClient.invalidateQueries({ queryKey: [apiEndpoints.ADDRESSES] });
      if (redirect) {
        router.push(redirect);
      }
    },
    onError: (_) => {
      toast.error(`Cập nhật địa chỉ thất bại`);
    },
  });
};
