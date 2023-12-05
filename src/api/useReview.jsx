import useAuth from "../hooks/useAuth";
import axiosPublic from "./axiosInstance";
import { useQuery } from "@tanstack/react-query";

const useReview = () => {
  const { user } = useAuth();
  const axiosInstance = axiosPublic;

  const {
    data: reviews = {},
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["reviews", user?.email],
    queryFn: async () => {
      if (!user?.email) {
        // Handle the case when user email is not available
        return [];
      }

      try {
        const res = await axiosInstance.get(`/reviews?email=${user.email}`);
        // console.log(res);
        return res.data;
      } catch (error) {
        console.error("Error fetching reviews:", error);
        throw error;
      }
    },
  });

  return { reviews, refetch, isLoading };
};

export default useReview;
