import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import axiosPublic from "./axiosInstance";

const useTanst = () => {
  const { user } = useAuth();
  const axiosUse = axiosPublic;
  const {
    data: wishlist = {},
    refetch,
    isLoading,
  } = useQuery({
    // queryKey: ["wishlist"],
    queryKey: ["wishlist", user?.email],
    queryFn: async () => {
      const res = await axiosUse.get(`/wishlist?email=${user?.email}`);
      // const response = await axiosUse.get(`/wishlist`);
      console.log(res);
      return res.data; // Return the data from the axios request
    },
  });
  return { wishlist, refetch, isLoading };
};

export default useTanst;
