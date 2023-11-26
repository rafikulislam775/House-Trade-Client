import { useLoaderData } from "react-router-dom";
import { ImLocation } from "react-icons/im";
const CardDetails = () => {
  const data = useLoaderData();
  const { _id, img, title, address, details, status, views } = data;
  console.log(data);
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
              <button type="button" className=" btn  mr-5">
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
