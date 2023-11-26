import axios from "axios";

export const imageUpload = async (image) => {
  const formData = new FormData();
  formData.append("image", image);
  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=d206b620051696a0a87a5df768011c1b`,
    formData
  );
  return data;
};

// admin stat
// export const getAdminStat = async () => {
//   const { data } = await axiosSecure(`/admin-stat`);
//   return data;
// };
