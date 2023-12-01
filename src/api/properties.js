import axiosPublic from "./axiosInstance";


//fetch all data
export const allProperties = async () => {
  const { data } = await axiosPublic("/properties");
  return data;
};
//fetch all data
export const reviews = async () => {
  const { data } = await axiosPublic("/reviews");
  return data;
};
//fetch data by id
export const property = async (id) => {
  const { data } = await axiosPublic(`/properties/${id}`);
  return data;
};
