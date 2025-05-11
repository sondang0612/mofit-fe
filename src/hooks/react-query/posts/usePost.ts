import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../../libs/axiosInstance";
import { Post } from "../../../types/api";
import { apiEndpoints } from "../../../utils/constants/apiEndpoints";

type Params = {
  id?: number;
};

const fetchData = async (params?: Params) => {
  const response = await axiosInstance.get(`posts/${params?.id}`);
  return response?.data?.data;
};

const usePost = (params: Params) => {
  const { data, ...query } = useQuery<Post>({
    queryKey: [apiEndpoints.POSTS, params.id],
    queryFn: () => fetchData(params),
    enabled: !!params.id,
  });

  return {
    ...query,
    data: data,
  };
};

export { usePost };
