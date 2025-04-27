import axiosInstance from "@/libs/axiosInstance";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { queryKey } from "../../queryKey";
import { ApiResponse } from "@/types/api";

type Params = {
  productId?: number;
};

const fetchData = async (params: Params) => {
  const response = await axiosInstance.get(
    `auth/product/${params.productId}/like`
  );
  return response?.data;
};

const useCheckLike = (params: Params) => {
  const { data, ...query } = useQuery<ApiResponse<boolean>>({
    queryKey: [queryKey.FAVORITE_PRODUCTS, params.productId],
    queryFn: () => fetchData(params),
    enabled: !!params.productId,
  });

  return {
    ...query,
    data: data?.data || false,
  };
};

export { useCheckLike };
