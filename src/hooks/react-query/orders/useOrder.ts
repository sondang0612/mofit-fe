import axiosInstance from "@/libs/axiosInstance";
import { ApiResponse, Order } from "@/types/api";
import { asyncAuth } from "@/utils/asyncAuth";
import { ERole } from "@/utils/constants/role.enum";
import { useQuery } from "@tanstack/react-query";
import { queryKey } from "../queryKey";

type Params = {
  id?: number;
};

const fetchData = asyncAuth(
  async (params?: Params) => {
    const response = await axiosInstance.get(`orders/${params?.id}`);
    return response?.data?.data;
  },
  { roles: [ERole.ADMIN, ERole.USER] }
);

const useOrder = (params: Params) => {
  const { data, ...query } = useQuery<Order>({
    queryKey: [queryKey.ORDERS, params.id],
    queryFn: () => fetchData(params),
    enabled: !!params.id,
  });

  return {
    ...query,
    data: data,
  };
};

export { useOrder };
