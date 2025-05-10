import axiosInstance from "@/libs/axiosInstance";
import { Product } from "@/types/api";
import { useQuery } from "@tanstack/react-query";
import { queryKey } from "../queryKey";

type Params = {
  id?: string;
};

const fetchData = async (params?: Params) => {
  const response = await axiosInstance.get(`products/${params?.id}`);
  return response?.data?.data;
};

const useProduct = (params: Params) => {
  const { data, ...query } = useQuery<Product>({
    queryKey: [queryKey.PRODUCTS, params?.id],
    queryFn: () => fetchData(params),
    enabled: !!params?.id,
  });

  return { ...query, data };
};

export { useProduct };
