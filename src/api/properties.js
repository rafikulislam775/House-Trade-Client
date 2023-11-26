import axiosPublic from "./axiosInstance";

//fetch all data
export const allProperties = async () => {
  const { data } = await axiosPublic("/properties");
  return data;
};
