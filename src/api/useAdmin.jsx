// import { useQuery } from "@tanstack/react-query";
// import useAuth from "../hooks/useAuth";
// import axiosPublic from "./axiosInstance";

// const useAdmin = () => {
//   const { user } = useAuth();
//   const axios = axiosPublic;
//   const { data: isAdmin } = useQuery({
//     queryKey: ["users", user?.email],
//     queryFn: async () => {
//       const res = await axios.get(`/users?email=${user?.email}`);
//       console.log(res.data);
//       return res.data;
//     },
//   });
//   return [isAdmin];
// };

// export default useAdmin;
