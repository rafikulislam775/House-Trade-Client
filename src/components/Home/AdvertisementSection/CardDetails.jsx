import { useLoaderData } from "react-router-dom";
import { ImLocation } from "react-icons/im";
import useAuth from "../../../hooks/useAuth";
import axiosPublic from "../../../api/axiosInstance";
import Swal from "sweetalert2";
import useTanst from "../../../api/useTanstack";

const CardDetails = () => {
  const data = useLoaderData();
  const { _id, img, title, address, details, price, status, views } = data;
  const { user } = useAuth();
  console.log(user);
  const { refetch } = useTanst();
  const handleAddWishlist = () => {
    if (user && user?.email) {
      const item = {
        email: user.email,
        price,
        img,
        title,
      };
      axiosPublic.post("/wishlist", item).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: "Good job!",
            text: `${title} added successfully`,
            icon: "success",
          });
          //refetch the data for instant data loaded
          refetch();
        }
      });
    }
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
                onClick={handleAddWishlist}
                type="button"
                className=" btn  mr-5"
              >
                Add To Wishlist
              </button>
              <button type="button" className=" btn ">
                Add a Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardDetails;
