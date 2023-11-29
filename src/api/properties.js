import axiosPublic from "./axiosInstance";


//fetch all data
export const allProperties = async () => {
  const { data } = await axiosPublic("/properties");
  return data;
};
//fetch data by id
export const property = async (id) => {
  const { data } = await axiosPublic(`/properties/${id}`);
  return data;
};
