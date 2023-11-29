import { useQuery } from "@tanstack/react-query";
import axiosPublic from "../api/axiosInstance";
import useAuth from "./useAuth";

const useWistlist = () => {
  const { user } = useAuth();
  const axios = axiosPublic;
  const {
    data: wishlist = {},
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["wishlist", user?.email],
    queryFn: async () => {
      const res = await axios.get(`/wishlist?email=${user?.email}`);
      return res.data;
    },
  });
  return { wishlist, isLoading, refetch };
};
export default useWistlist;
