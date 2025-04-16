import axiosInstance from "@/libs/axiosInstance";
import { ApiResponse, Order } from "@/types/api";
import { asyncAuth } from "@/utils/asyncAuth";
import { ERole } from "@/utils/constants/role.enum";
import { useQuery } from "@tanstack/react-query";
import { queryKey } from "../queryKey";
import { EOrderStatus } from "@/utils/constants/order.enum";

type Params = {
  id?: number;
};

type TimeLine = {
  [key in EOrderStatus]: string;
};

const fetchData = asyncAuth(
  async (params?: Params) => {
    const response = await axiosInstance.get(`orders/${params?.id}/timeline`);
    return response?.data?.data;
  },
  { roles: [ERole.ADMIN, ERole.USER] }
);

const useOrderTimeLine = (params: Params) => {
  const { data, ...query } = useQuery<TimeLine>({
    queryKey: [queryKey.ORDERS_TIMELINE, params.id],
    queryFn: () => fetchData(params),
    enabled: !!params.id,
  });

  return {
    ...query,
    data: data,
  };
};

export { useOrderTimeLine };
