import Swal from "sweetalert2";
import axiosPublic from "../api/axiosInstance";
import useTanst from "../api/useTanstack";
import { ImSpinner9 } from "react-icons/im";
import { NavLink } from "react-router-dom";
import { FaLocationPin } from "react-icons/fa6";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const Wishlist = () => {
  const { wishlist, isLoading, refetch } = useTanst();
  const axios = axiosPublic;
  const handleDelate = (id) => {
    console.log(wishlist);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/wishlist/${id}`).then((res) => {
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
    <div className="flex justify-center">
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10  text-black">
        <h2 className="text-xl font-semibold border-b-4 ">Your carts </h2>
        <ul className="flex flex-col divide-y dark:divide-gray-700">
          {isLoading ? (
            <ImSpinner9 className="animate-spin m-auto text-9xl" />
          ) : (
            wishlist?.map((item) => (
              <li
                key={item._id}
                className="flex flex-col py-6 sm:flex-row sm:justify-between"
              >
                <div className="flex w-full space-x-2 sm:space-x-4">
                  <img
                    className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                    src={item.img}
                    alt="Polaroid camera"
                  />
                  <div className="flex flex-col justify-between w-full pb-4">
                    <div className="flex justify-between w-full pb-2 space-x-2">
                      <div className="space-y-1">
                        <h3 className="text-lg font-semibold  sm:pr-8">
                          {item.title}
                        </h3>
                        <p className=" flex items-center gap-4 text-sm dark:text-gray-400">
                          Classic
                          <span className="">
                            {item.status === "verified" ? (
                              <RiVerifiedBadgeFill className="text-2xl text-orange-500"></RiVerifiedBadgeFill>
                            ) : (
                              ""
                            )}
                          </span>
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold">{item.price}$</p>
                        <p className="text-sm line-through dark:text-gray-600">
                          75.50$
                        </p>
                      </div>
                    </div>
                    <div className="flex text-sm divide-x">
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
                        <button onClick={() => handleDelate(item._id)}>
                          Remove
                        </button>
                      </button>
                      <button
                        type="button"
                        className="flex items-center px-2 py-1 space-x-1"
                      >
                        <FaLocationPin></FaLocationPin>
                        <span>{item.address}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
        <div className="space-y-1 text-right">
          <p>
            Total amount :
            <span className="font-semibold">
              {wishlist &&
                wishlist?.reduce((total, item) => total + item.price, 0)}
              $
            </span>
          </p>
          <p className="text-sm dark:text-gray-400">
            Not including taxes and shipping costs
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          <NavLink to="/">
            <button
              type="button"
              className="px-6 py-2 border rounded-md dark:border-violet-400"
            >
              Back
              <span className="sr-only sm:not-sr-only"> to shop</span>
            </button>
          </NavLink>

          <button
            type="button"
            className="px-6 py-2 border rounded-md dark:bg-orange-500 dark:text-gray-900 dark:border-violet-400"
          >
            <span className="sr-only sm:not-sr-only">Continue to</span>Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
