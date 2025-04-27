import axiosInstance from "@/libs/axiosInstance";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryKey } from "../queryKey";

type Form = {
  productId: number;
  quantity: number;
};

const fetchData = async (form: Form) => {
  const response = await axiosInstance.patch("cart-items", form);
  return response?.data;
};

const useUpdateCartItem = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: fetchData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey.CART_INFO] });
    },
  });
};

export { useUpdateCartItem };
