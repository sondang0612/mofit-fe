import axiosInstance from "@/libs/axiosInstance";
import { asyncAuth } from "@/utils/asyncAuth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { queryKey } from "../queryKey";
import { apiEndpoints } from "@/utils/constants/apiEndpoints";

type Params = {
  orderId?: number;
};

const fetchData = async (params: Params) => {
  const response = await axiosInstance.patch(`orders/${params.orderId}`);
  return response?.data;
};

const useCancelOrder = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: fetchData,
    onSuccess: (_, variable) => {
      toast.success(`Huỷ đơn thành công`);
      queryClient.invalidateQueries({
        queryKey: [queryKey.ORDERS, variable.orderId],
      });
      queryClient.invalidateQueries({ queryKey: [apiEndpoints.ORDERS] });
    },
  });
};

export { useCancelOrder };
