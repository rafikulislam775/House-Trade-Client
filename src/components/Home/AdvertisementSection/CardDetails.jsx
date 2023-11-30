import { NavLink, useLoaderData } from "react-router-dom";
import { ImLocation } from "react-icons/im";
import useAuth from "../../../hooks/useAuth";
import axiosPublic from "../../../api/axiosInstance";
import Swal from "sweetalert2";
import useTanst from "../../../api/useTanstack";

const CardDetails = () => {
  const { wishlist, refetch } = useTanst();
  console.log(wishlist);
  const data = useLoaderData();
  const { _id, img, title, address, details } = data;
  const { user } = useAuth();
  console.log(_id);
  const handleAddWishlist = (_id) => {
    // if (!wishlist.find((item) => item.id === _id)) {
    if (!wishlist.some((item) => item.id === _id)) {
      if (user && user.email) {
        const item = {
          email: user.email,
          price: details.price,
          img,
          title,
          address,
          id: _id,
        };

        axiosPublic.post("/wishlist", item).then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              title: "Good job!",
              text: `${title} added successfully`,
              icon: "success",
            });
            // Refetch the data for instant data loading
            refetch();
          }
        });
      }
    } else {
      Swal.fire({
        title: "Oops!",
        text: `${title} is already in your wishlist`,
        icon: "error",
      });
    }
  };
  //add reviews
  const handleReview = (e) => {
    e.preventDefault();
    const review = e.target.review.value;
    const item = {
      email: user.email,
      name: user?.displayName,
      img: user?.photoURL,
      title,
      review,
    };

    console.log(item);
  };

  return (
    <section className="p-4 h-screen lg:p-8 dark:bg-gray-800 dark:text-gray-100">
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm ">
          <img
            src={img}
            alt=""
            className="h-80 dark:bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
            <span className="text-xs uppercase dark:text-gray-400">
              <span className="flex  ">
                <span className="mr-2 text-orange-500  ">
                  <ImLocation></ImLocation>
                </span>{" "}
                <span className="  whitespace-nowrap">{address}</span>
              </span>
            </span>
            <h3 className="text-3xl font-bold">{title}</h3>
            <div className="badge badge-error text-white my-4">
              Price : $ {details.price} K
            </div>
            <span className="flex  ">
              <span className="mr-2 text-orange-500  ">
                Bedrooms : {details.bedrooms}
              </span>{" "}
              <span className="  whitespace-nowrap">
                Area_sqft :{details.area_sqft}
              </span>
            </span>
            <p className="my-6 dark:text-gray-400">{details.description}</p>
            <div>
              <button
                onClick={() => handleAddWishlist(_id)}
                type="button"
                className=" btn  mr-5"
              >
                Add To Wishlist
              </button>
              {/* Open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="btn bg-orange-500 text-white hover:bg-blue-600"
                onClick={() =>
                  document.getElementById("my_modal_5").showModal()
                }
              >
                Add a Review
              </button>

              <dialog
                id="my_modal_5"
                className="modal modal-bottom sm:modal-middle"
              >
                <form
                  onSubmit={handleReview}
                  className="modal-box p-6 bg-gray-200 text-black rounded-md shadow-lg"
                >
                  <h3 className="font-bold text-lg mb-4">Write a Review</h3>

                  <textarea
                    className="w-full h-32 p-2 border rounded-md"
                    placeholder="Your review..."
                    name="review"
                  ></textarea>
                  <div className="mt-4 flex justify-end">
                    <button
                      className="btn mr-2 bg-red-400"
                      onClick={() =>
                        document.getElementById("my_modal_5").close()
                      }
                    >
                      Close
                    </button>
                    <button
                      className="btn text-white bg-orange-500"
                      type="submit"
                    >
                      Submit Review
                    </button>
                  </div>
                </form>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardDetails;
