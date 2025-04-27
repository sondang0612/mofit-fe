import axiosInstance from "@/libs/axiosInstance";
import { FavoriteProduct } from "@/types/api";
import { asyncAuth } from "@/utils/asyncAuth";
import { useQuery } from "@tanstack/react-query";
import { queryKey } from "../../queryKey";

type Params = {};

const fetchData = asyncAuth(async (params?: Params) => {
  const response = await axiosInstance.get(`auth/favorite-products`);
  return response?.data?.data;
});

const useFavoriteProducts = (params?: Params) => {
  const { data, ...query } = useQuery<FavoriteProduct[]>({
    queryKey: [queryKey.FAVORITE_PRODUCTS],
    queryFn: () => fetchData(params),
  });

  return { ...query, data };
};

export { useFavoriteProducts };
