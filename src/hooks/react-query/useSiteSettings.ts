import axiosInstance from "@/libs/axiosInstance";
import { SiteSettings } from "@/types/api";
import { useQuery } from "@tanstack/react-query";
import { queryKey } from "./queryKey";

const fetchData = async () => {
  const url = process.env.NEXT_PUBLIC_SITE_SETTINGS_URL;
  if (!url) {
    return;
  }
  const response = await axiosInstance.get(url);
  return response?.data;
};

const useSiteSettings = () => {
  const { data, ...query } = useQuery<SiteSettings>({
    queryKey: [queryKey.SITE_SETTINGS],
    queryFn: () => fetchData(),
  });

  return { ...query, data };
};

export { useSiteSettings };
