import { ImSpinner9 } from "react-icons/im";
import useReview from "../api/useReview";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import axiosPublic from "../api/axiosInstance";

const MyReviews = () => {
  const { user } = useAuth();
  const axios = axiosPublic;
  const { reviews, refetch, isLoading } = useReview();
  if (isLoading) {
    return (
      <div>
        {" "}
        <ImSpinner9 className="animate-spin text-8xl m-auto" />
      </div>
    );
  }
  const filteredReviews = reviews?.filter((item) => item.email === user.email);
  //   console.log(filteredReviews);
  const handleDelate = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete your reviews!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/reviews/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <h2 className="text-4xl text-center p-5 m-5 border-b-2 border-black">
        My reviews: {filteredReviews.length}
      </h2>
      <div className="grid grid-cols-2 gap-2">
        {filteredReviews?.map((review) => (
          <div
            key={review._id}
            className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md dark:divide-gray-700 dark:bg-gray-900 dark:text-gray-100"
          >
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <img
                    src={review.img}
                    alt=""
                    className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{review.title}</h4>
                  <span className="text-xs dark:text-gray-400">2 days ago</span>
                </div>
              </div>
              <div className="flex items-center space-x-2 dark:text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                </svg>
                <span className="text-xl font-bold">4.5</span>
              </div>
            </div>
            <div>
              <div className="p-4 space-y-2 text-sm dark:text-gray-400">
                <p>{review.review !== "" ? review.review : "nothing wrote"}</p>
              </div>
              <span className="">
                {" "}
                <button
                  type="button"
                  className="flex items-center px-2 py-1 pl-0 space-x-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="w-4 h-4 fill-current"
                  >
                    <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                    <rect width="32" height="200" x="168" y="216"></rect>
                    <rect width="32" height="200" x="240" y="216"></rect>
                    <rect width="32" height="200" x="312" y="216"></rect>
                    <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                  </svg>
                  <button onClick={() => handleDelate(review._id)}>
                    Remove
                  </button>
                </button>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyReviews;
