import axiosInstance from "@/libs/axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKey } from "../../queryKey";

type Form = {
  productId?: number;
};

const fetchData = async (form: Form) => {
  const response = await axiosInstance.post(
    `auth/product/${form.productId}/like`
  );
  return response?.data;
};

const useLikeProduct = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: fetchData,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [queryKey.FAVORITE_PRODUCTS] });
    },
  });
};

export { useLikeProduct };
